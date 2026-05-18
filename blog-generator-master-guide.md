# Complete Blog Generation Workflow

This guide takes you from a single company website to a fully formatted competitive analysis blog post.

## Input Required

**Company Name:** [Company Name]  
**Company Website:** [URL]

---

## Workflow Overview

This process has 4 main steps:
1. **Find Competitors** - Identify top 3 competitors using Parallel MCP
2. **Research Data** - Gather all necessary data using Parallel MCP
3. **Generate Blog** - Create the final blog post using blog-guide.md
4. **Validate Blog** - Verify all facts using Parallel MCP via blog-validator-guide.md

**⚠️ Important:** When using Parallel MCP tasks in any step, always wait for ALL tasks to complete and retrieve all results before moving to the next step.

---

## STEP 1: Find Top 3 Competitors

### Task for Cursor:
Given the company website above, identify the top 3 direct competitors using **Parallel MCP web search**.

**Research Methods (use Parallel MCP):**
- Search "[Company Name] competitors"
- Find G2 comparison pages
- Search for "Alternatives to [Company Name]"
- Verify each is a direct competitor (similar product/service)

**💡 Pro Tip:** Create a single Parallel search query that looks for competitors across G2, alternative pages, and review sites simultaneously.

**Output this format:**
```
## Competitors Found

1. **[Competitor 1 Name]** - https://competitor1.com
2. **[Competitor 2 Name]** - https://competitor2.com
3. **[Competitor 3 Name]** - https://competitor3.com
```

---

## STEP 2: Research & Data Collection

Now that you have 4 companies (original + 3 competitors), gather the following data using Parallel MCP for efficient web search.

**💡 Use blog-prompt-template.md to structure your data collection** - it has detailed sections for all required information.

### Required Data for Each Company:

**A. G2 Reviews:**
- G2 page URL
- Overall rating (X.X/5)
- Total review count
- Top pros (with mention counts)
- Top cons (with mention counts)
- 2-3 notable quotes with URLs

**B. Pricing Information:**
- Pricing page URL
- All pricing tiers with costs
- What's included in each tier
- Hidden costs or add-ons
- True cost analysis if different from advertised

**C. Reddit & Community Feedback:**
- 3-5 relevant Reddit discussions with URLs
- Positive quotes with exact Reddit URLs
- Negative quotes with exact Reddit URLs
- Key themes and sentiment

**D. Company Information:**
- Main value proposition
- Target audience
- Key differentiators
- Notable features

⚠️ **CRITICAL:** Every quote must have an exact source URL.

**💡 Pro Tip:** Search multiple companies simultaneously for faster data collection.

---

## STEP 3: Generate Blog Post

Once you have all the data, use this prompt:

```
Generate a comparison blog post comparing [Company A] vs [Company B] vs [Company C] vs [Company D].

Use:
- blog-guide.md for all formatting and style guidelines
- blog-prompt-template.md as the structure reference

Requirements:
1. Save to: src/data/blog/company-a-vs-company-b-vs-company-c-vs-company-d.md
2. Follow all SEO guidelines from blog-guide.md
3. Opening paragraph MUST include "We used [Oden](https://getoden.com) to analyze" with Oden hyperlinked to https://getoden.com
4. Include comparison tables
5. Use question-based H2 sections
6. Every quote must have a clickable source URL
7. Excerpt must be exactly 150-160 characters
8. Date format: YYYY-MM-DD (use today's date)
9. Tags: Exactly 2 tags - [Industry Category] and "Comparison" (no additional tags)
11. Do NOT add Oden report link unless actual report URL is provided

Sections to include:
- G2 ratings comparison
- Pricing comparison
- Pain points for each platform
- Strengths and weaknesses
- Positioning analysis
- Feature comparison table
- Sources & Links section

Use the research data I've provided and ensure all formatting matches the standards in blog-guide.md.
```

---

## STEP 4: Validate Blog Post

After generating the blog, validate all facts to catch any errors.

### Run Validation

Say to Cursor:
```
Run the blog validator guide for this blog post.
```

**What happens:**
1. Extracts all G2 ratings, review counts, and pricing claims for ALL companies
2. Creates Parallel MCP task group to verify facts from official sources
3. **CRITICAL: Checks task status repeatedly until ALL tasks show "✅ completed"**
4. **CRITICAL: Retrieves ALL results using basis "all" - do not proceed until all results are retrieved**
5. Reviews ALL verification results for every company
6. Compares verified data against blog claims
7. Identifies ALL discrepancies found
8. **CRITICAL: Fixes ALL discrepancies before committing**
9. **CRITICAL: Verifies pricing descriptions are accurate** (especially free tiers, usage-based pricing, and what happens after free limits)

**⚠️ NEVER claim validation is "running" or "complete" until:**
- You have verified task status shows ALL tasks as "✅ completed"
- You have retrieved ALL results
- You have reviewed ALL discrepancies
- You have fixed ALL issues

**Validation checks:**
- G2 ratings accurate (within ±0.1) - **check ALL companies**
- Review counts accurate (within ±5%) - **check ALL companies**
- **G2 data exists for ALL companies** - if G2 has data, it must be in the blog
- Pricing numbers correct - **verify ALL pricing tiers for ALL companies**
- **Pricing descriptions accurate** - especially:
  - Free tier limits clearly stated
  - Usage-based pricing shows per-unit costs
  - What happens after free tier is explained
  - "Contact for pricing" only if ALL paid tiers require contact
- Excerpt is 150-160 characters
- Frontmatter complete
- Oden link present in opening
- All source URLs working

**Time:** 5-10 minutes

**📖 Full details:** See blog-validator-guide.md

---

## Complete Example

### Input:
- **Company:** Vapi
- **Website:** https://vapi.ai

### Step 1 Output:
```
1. **Retell AI** - https://www.retellai.com
2. **Synthflow** - https://synthflow.ai
3. **Bland AI** - https://www.bland.ai
```

### Step 2:
[Gather all data for Vapi, Retell AI, Synthflow, and Bland AI from G2, Reddit, pricing pages]

### Step 3:
[Cursor generates: `vapi-vs-retell-ai-vs-synthflow-vs-bland-ai.md`]

### Step 4:
[Run validator - Cursor verifies all facts and applies any corrections]

---

## Quality Checklist

Before publishing, verify:

**Generation:**
- [ ] Frontmatter is complete (title, excerpt, date, tags)
- [ ] Excerpt is 150-160 characters
- [ ] All quotes have source URLs
- [ ] Comparison tables included
- [ ] H2 sections use questions
- [ ] Sources & Links section complete
- [ ] File saved in src/data/blog/
- [ ] Filename follows convention (lowercase, hyphens)

**Validation (automated):**
- [ ] G2 ratings verified with Parallel MCP
- [ ] Review counts verified with Parallel MCP
- [ ] Pricing numbers verified with Parallel MCP
- [ ] All discrepancies corrected
- [ ] Oden link present and correct

---

## Tips for Success

1. **Be thorough in Step 2** - The more complete your research, the better the blog
2. **Always wait for tasks to complete** - Don't proceed to the next step until all Parallel MCP results are retrieved
3. **Check task status explicitly** - Use `getResultMarkdown` to verify ALL tasks show "✅ completed" before proceeding
4. **Retrieve ALL results** - Use basis "all" to get complete results for every company
5. **Fix ALL discrepancies** - Never commit until every validation issue is resolved
6. **Verify exact URLs** - Ensure all citations include complete, verifiable source URLs
7. **Verify competitors** - Make sure they're actually direct competitors
8. **Use exact quotes** - Don't paraphrase, copy the actual text
9. **Check pricing dates** - Pricing can change, note when you accessed it
10. **Validate pricing descriptions** - Free tiers must show limits; usage-based pricing must show per-unit costs
11. **Check ALL companies for G2 data** - Don't assume "not available" - verify by checking G2 directly

---

## Estimated Time

- Step 1 (Find Competitors with Parallel MCP): 2-3 minutes
- Step 2 (Research & Data Collection with Parallel MCP): 15-30 minutes
- Step 3 (Generate Blog): 2-5 minutes
- Step 4 (Validate Blog with Parallel MCP): 5-10 minutes
- Final Review: 5 minutes

**Total: ~30-55 minutes per blog post** (with automated validation)

---

## Need Help?

- **Formatting questions?** Check blog-guide.md
- **Data structure?** Reference blog-prompt-template.md
- **Validation process?** See blog-validator-guide.md
- **Examples?** Look at existing blogs in src/data/blog/

