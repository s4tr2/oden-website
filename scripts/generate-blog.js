#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

function parseCompaniesQueue() {
  const queuePath = path.join(process.cwd(), 'companies-queue.txt');
  const content = fs.readFileSync(queuePath, 'utf-8');
  const lines = content.split('\n');

  const companies = [];
  for (const line of lines) {
    // Skip comments and empty lines
    if (line.trim().startsWith('#') || !line.trim()) {
      continue;
    }

    const parts = line.split('|').map(p => p.trim());
    // Need at least: company name, website, 1 competitor (name + website), industry, status = 6 parts
    if (parts.length >= 6 && (parts.length - 2) % 2 === 0) {
      const companyName = parts[0];
      const companyWebsite = parts[1];
      
      // Parse competitors dynamically (pairs of name + website)
      const competitors = [];
      for (let i = 2; i < parts.length - 2; i += 2) {
        if (parts[i] && parts[i + 1]) {
          competitors.push({
            name: parts[i],
            website: parts[i + 1]
          });
        }
      }

      const industry = parts[parts.length - 2];
      const status = parts[parts.length - 1];

      companies.push({
        name: companyName,
        website: companyWebsite,
        competitors: competitors,
        industry: industry,
        status: status,
        originalLine: line
      });
    }
  }

  return { companies, content, queuePath };
}

function findPendingCompanies(companies, limit = 2) {
  const pending = [];
  for (const company of companies) {
    if (company.status === 'pending' && pending.length < limit) {
      pending.push(company);
    }
  }
  return pending;
}

function updateCompanyStatus(queuePath, originalContent, companiesToUpdate) {
  const lines = originalContent.split('\n');

  const updatedLines = lines.map(line => {
    for (const company of companiesToUpdate) {
      if (line.trim() === company.originalLine.trim()) {
        return line.replace(/\|\s*(pending|processing)\s*$/, '| done');
      }
    }
    return line;
  });

  const updatedContent = updatedLines.join('\n');
  fs.writeFileSync(queuePath, updatedContent, 'utf-8');
}

function loadPromptTemplate() {
  const templatePath = path.join(__dirname, 'blog-prompt-template.txt');
  const templateContent = fs.readFileSync(templatePath, 'utf-8');

  const instructionsMatch = templateContent.match(/INSTRUCTIONS:\s*(.*?)(?=INPUT:|$)/s);
  const inputMatch = templateContent.match(/INPUT:\s*(.*?)$/s);

  return {
    instructions: instructionsMatch ? instructionsMatch[1].trim() : '',
    inputTemplate: inputMatch ? inputMatch[1].trim() : ''
  };
}

async function generateBlogPost(targetCompany, competitors, industry) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is required');
  }
  const client = new OpenAI({ apiKey });

  const targetCompanyName = targetCompany.name;
  const targetCompanyWebsite = targetCompany.website;

  const competitorList = competitors.map((c, i) =>
    `${i + 1}. ${c.name} - ${c.website}`
  ).join('\n');

  const today = new Date().toISOString().split('T')[0];
  const allCompanyNames = [targetCompanyName, ...competitors.map(c => c.name)];
  const title = allCompanyNames.join(' vs ');

  const { instructions: instructionsTemplate, inputTemplate } = loadPromptTemplate();

  const input = inputTemplate
    .replace(/\{\{TARGET_COMPANY_NAME\}\}/g, targetCompanyName)
    .replace(/\{\{TARGET_COMPANY_WEBSITE\}\}/g, targetCompanyWebsite)
    .replace(/\{\{COMPANY_LIST\}\}/g, competitorList)
    .replace(/\{\{CATEGORY\}\}/g, industry)
    .replace(/\{\{TITLE\}\}/g, title)
    .replace(/\{\{DATE\}\}/g, today);

  try {
    const response = await client.responses.create({
      model: 'gpt-5.1',
      instructions: instructionsTemplate,
      input: input,
      tools: [
        { type: "web_search" },
      ],
      reasoning: { effort: "medium" },
    });

    const content = response.output_text;
    if (!content) {
      throw new Error('No content returned from OpenAI API');
    }
    return content;
  } catch (error) {
    console.error('Error generating blog post:', error);
    throw error;
  }
}

function saveBlogPost(content, slug) {
  const blogDir = path.join(process.cwd(), 'src', 'data', 'blog');
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  let blogContent = content.trim();

  if (blogContent.startsWith('```')) {
    const lines = blogContent.split('\n');
    if (lines[0].startsWith('```')) {
      lines.shift();
    }
    if (lines[lines.length - 1].trim() === '```') {
      lines.pop();
    }
    blogContent = lines.join('\n');
  }

  blogContent = blogContent.replace(/\?utm_source=openai/g, '?utm_source=oden');

  fs.writeFileSync(filePath, blogContent, 'utf-8');
  console.log(`Blog post saved to: ${filePath}`);
}

async function main() {
  try {
    console.log('Reading companies-queue.txt...');
    let { companies, content, queuePath } = parseCompaniesQueue();

    console.log(`Found ${companies.length} companies in queue`);
    const pendingCount = companies.filter(c => c.status === 'pending').length;
    console.log(`Found ${pendingCount} pending companies`);

    if (pendingCount === 0) {
      console.log('No pending companies found. Exiting.');
      process.exit(0);
    }

    const targetCompanies = findPendingCompanies(companies, 2);
    console.log(`Processing ${targetCompanies.length} companies...`);

    const processedCompanies = [];

    for (const targetCompany of targetCompanies) {
      try {
        console.log(`\nProcessing company: ${targetCompany.name} (${targetCompany.website})`);
        console.log(`Industry: ${targetCompany.industry}`);

        const competitors = targetCompany.competitors;
        
        if (!competitors || competitors.length === 0) {
          console.error(`No competitors found for ${targetCompany.name}. Skipping.`);
          continue;
        }

        console.log(`Using competitors from queue: ${competitors.map(c => c.name).join(', ')}`);

        const allCompanyNames = [targetCompany.name, ...competitors.map(c => c.name)];
        console.log(`Generating blog comparing: ${allCompanyNames.join(' vs ')}`);

        const blogContent = await generateBlogPost(targetCompany, competitors, targetCompany.industry);
        const slug = allCompanyNames.map(name => slugify(name)).join('-vs-');

        saveBlogPost(blogContent, slug);
        processedCompanies.push(targetCompany);

        updateCompanyStatus(queuePath, content, [targetCompany]);
        const { content: updatedContent } = parseCompaniesQueue();
        content = updatedContent;

        console.log(`Successfully generated blog for ${targetCompany.name}`);
      } catch (error) {
        console.error(`Error processing ${targetCompany.name}:`, error);
        continue;
      }
    }

    if (processedCompanies.length > 0) {
      console.log(`\nBlog generation completed successfully! Processed ${processedCompanies.length} companies.`);
    } else {
      console.log('\nNo blogs were generated.');
    }
  } catch (error) {
    console.error('Error in blog generation:', error);
    process.exit(1);
  }
}

main();
