# Oden Blog Style Guide
## Comparison Blog Post Standards

This guide ensures all comparison blog posts maintain consistent quality, SEO optimization, and formatting. Use this as your reference when generating new blog posts.

## ⚠️ CRITICAL REQUIREMENT

**Every quote and claim in the blog post must be backed by an exact source URL.**

All citations must be clickable links to verifiable sources (G2 reviews, Reddit discussions, company websites, etc.). No exceptions.

---

## 1. Frontmatter Structure

Every blog post must start with proper frontmatter in YAML format:

```yaml
---
title: "Company A vs Company B vs Company C vs Company D - Comparison"
excerpt: "Get detailed analysis of four leading platforms based on G2 reviews, Reddit discussions, and current pricing data."
date: "YYYY-MM-DD"
tags: ["Category Name", "Comparison"]
---
```

### Frontmatter Requirements

**Title:**
- Format: "[Company A] vs [Company B] vs [Company C] vs [Company D] - Comparison"
- Must be SEO-friendly and compelling
- Include all companies being compared
- Keep concise but descriptive

**Excerpt:**
- Length: 150-160 characters exactly
- Must be natural and conversational (not robotic)
- Descriptive of what the reader will learn
- NO marketing fluff or unnecessary adjectives
- Example: "Get detailed analysis of four leading voice AI platforms based on 1500+ G2 reviews, 20+ Reddit discussions, and current pricing data."

**Date:**
- Format: "YYYY-MM-DD" (e.g., "2025-11-07")
- Use the target publish date

**Tags:**
- Use exactly 2 tags (no more, no less)
- Capitalize each word
- First tag: Category/industry (e.g., "Voice AI", "AI Coding Tools", "Security Compliance")
- Second tag: "Comparison" (always required)

---

## 2. Blog Post Structure

### Opening Paragraph (First 4-5 Lines)

**Critical for SEO and LLM crawlability**

✅ **Good Opening:**
- Conversational and natural tone
- Simple and direct language
- Addresses reader's problem immediately
- Sets expectations for what's covered
- Mentions data sources and scope of analysis

**Example from Voice AI blog:**
```
If you're trying to choose between Vapi, Synthflow, Bland AI, and Retell AI for your voice AI needs, you've come to the right place. We used [Oden](https://getoden.com) to analyze over 1500+ G2 reviews, dug through Reddit discussions, and compared current pricing across all four platforms over the last six months to give you a clear picture of which one might work best for you.

This comparison covers everything from pricing and features to what real customers are saying. Whether you're a developer looking for flexibility, a business owner wanting something easy to use, or an enterprise needing enterprise-grade solutions, we break down the strengths, weaknesses, and true costs of each platform so you can make an informed decision.
```

**CRITICAL:** Always include "We used [Oden](https://getoden.com) to analyze" in the first paragraph to credit the analysis tool. The word "Oden" must be hyperlinked to https://getoden.com

❌ **Bad Opening:**
- Robotic or overly formal language
- Marketing jargon
- Vague promises without specifics
- No clear value proposition

### Section Structure

All main sections must use **H2 headings formatted as questions** (when natural):

**CRITICAL: H2 headings must be in sentence case** (only the first letter capitalized, rest lowercase):
- First letter of the heading is capitalized
- All other words are lowercase (except proper nouns like company names, platform names, etc.)
- This applies to all H2 headings that appear in the table of contents

✅ **Good H2 Section Titles (Sentence Case):**
- "Which voice AI platform has the best G2 rating?"
- "How much do voice AI platforms really cost?"
- "What are the top pain points for each AI coding tool?"
- "How do these tools position themselves for enterprise buyers?"

**When to Use Statements Instead:**
Use statement-based titles when questions feel forced or unnatural (also in sentence case):
- "Key insights: common themes across all products"
- "Competitive positioning matrix"
- "Sources & links"

### Subsections (H3)

Use H3 for subsections under each main topic:
- Company-specific analyses
- Specific features or categories
- Detailed breakdowns

**Example:**
```
## How Much Do Voice AI Platforms Really Cost?

### Vapi Pricing
[Details about Vapi pricing]

### Synthflow Pricing
[Details about Synthflow pricing]
```

---

## 3. Content Formatting Standards

### Spacing
- Always include blank lines before and after headings
- Use blank lines between paragraphs
- Add extra spacing before major sections
- No excessive spacing (1 blank line is sufficient between paragraphs)

### Lists

**Bullet Lists:**
```markdown
- First point
- Second point with more detail
- Third point
```

**Nested Lists:**
```markdown
- Main point
  - Sub-point with 2-space indent
  - Another sub-point
- Next main point
```

**Structured Lists with Bold Headers:**
```markdown
- **Category Name:** Description or details
- **Another Category:** More information
```

### Tables

Use markdown tables for comparisons:

```markdown
| Feature | Company A | Company B | Company C |
|---------|-----------|-----------|-----------|
| Pricing | $X/mo | $Y/mo | $Z/mo |
| Rating | 4.5/5 | 4.8/5 | 4.2/5 |
```

**Table Requirements:**
- First column: Feature/metric name
- Subsequent columns: One per company
- Include units ($/mo, reviews, etc.)
- Use checkmarks for yes/no: ✅ ❌
- Keep cells concise

### Positioning Map (HTML Grid)

For visual positioning maps, use this responsive HTML grid structure:

```html
<div class="positioning-map" style="margin: 2rem 0; max-width: 100%; overflow-x: auto;">
<div style="display: grid; grid-template-columns: minmax(60px, auto) minmax(0, 1fr) minmax(0, 1fr); grid-template-rows: auto 1fr 1fr; gap: 0.5rem; align-items: center; min-width: 300px;">
<div></div>
<div style="text-align: center; padding: 0.5rem; font-size: 0.75rem; font-weight: 600; color: #6b7280; border-bottom: 2px solid #e5e7eb;">LOW COST</div>
<div style="text-align: center; padding: 0.5rem; font-size: 0.75rem; font-weight: 600; color: #6b7280; border-bottom: 2px solid #e5e7eb;">HIGH COST</div>
<div style="text-align: right; padding: 0.5rem; font-size: 0.625rem; font-weight: 600; color: #6b7280; border-right: 2px solid #e5e7eb; line-height: 1.3;">HIGH TECHNICAL<br/>COMPLEXITY</div>
<div style="border: 1.5px solid #e5e7eb; border-radius: 8px; padding: 1rem; background: #ffffff; text-align: center; min-height: 100px; display: flex; flex-direction: column; justify-content: center;"><div style="font-size: 1.125rem; font-weight: 700; color: #111827; margin-bottom: 0.25rem;">COMPANY A</div><div style="font-size: 0.75rem; color: #6b7280; line-height: 1.4;">Positioning Label</div></div>
<div style="border: 1.5px solid #e5e7eb; border-radius: 8px; padding: 1rem; background: #ffffff; text-align: center; min-height: 100px; display: flex; flex-direction: column; justify-content: center;"><div style="font-size: 1.125rem; font-weight: 700; color: #111827; margin-bottom: 0.25rem;">COMPANY B</div><div style="font-size: 0.75rem; color: #6b7280; line-height: 1.4;">Positioning Label</div></div>
<div style="text-align: right; padding: 0.5rem; font-size: 0.625rem; font-weight: 600; color: #6b7280; border-right: 2px solid #e5e7eb; line-height: 1.3;">LOW TECHNICAL<br/>COMPLEXITY</div>
<div style="border: 1.5px solid #e5e7eb; border-radius: 8px; padding: 1rem; background: #ffffff; text-align: center; min-height: 100px; display: flex; flex-direction: column; justify-content: center;"><div style="font-size: 1.125rem; font-weight: 700; color: #111827; margin-bottom: 0.25rem;">COMPANY C</div><div style="font-size: 0.75rem; color: #6b7280; line-height: 1.4;">Positioning Label</div></div>
<div style="border: 1.5px solid #e5e7eb; border-radius: 8px; padding: 1rem; background: #ffffff; text-align: center; min-height: 100px; display: flex; flex-direction: column; justify-content: center;"><div style="font-size: 1.125rem; font-weight: 700; color: #111827; margin-bottom: 0.25rem;">COMPANY D</div><div style="font-size: 0.75rem; color: #6b7280; line-height: 1.4;">Positioning Label</div></div>
</div>
</div>
```

Customize the axis labels and positioning labels based on the comparison dimensions.

**Key features of this responsive design:**
- Uses `max-width: 100%` and `overflow-x: auto` to prevent horizontal overflow
- Implements `minmax()` for flexible column sizing
- Reduced padding and font sizes for better mobile compatibility
- Maintains readability with appropriate line-height and spacing

---

## 4. Links and Citations

### External Links

Format all external links properly:

```markdown
[Link Text](https://example.com)
```

**Link Requirements:**
- Make all G2 reviews, pricing pages, and competitor websites clickable
- Use descriptive link text (not "click here")
- Include sources inline where relevant
- Add comprehensive "Sources & Links" section at the end

**Examples:**
```markdown
- [Vapi Pricing](https://vapi.ai/pricing)
- [Retell AI G2 Reviews](https://www.g2.com/products/retell-ai/reviews)
```

### Citing Sources

Always provide exact URLs when citing sources. Include the URL in the citation:

```markdown
- "Quote from G2 review" - [Source](https://www.g2.com/products/company/reviews)
- "Quote from Reddit discussion" - [Source](https://reddit.com/r/subreddit/comments/...)
```

**Important:** Every quote or claim must be backed by a verifiable URL.

### Images

Use this format for images:

```markdown
![Alt text describing the image](/blog/images/post-slug/image-name.png)
```

**Requirements:**
- Alt text must be descriptive
- Path structure: `/blog/images/post-slug/`
- Use lowercase with hyphens for slug

---

## 5. Research Methods & Data Collection

### Using Parallel MCP for Web Search

When gathering data for competitive analysis blog posts, use **Parallel MCP** for efficient web search:

**Benefits:**
- Faster data collection across multiple sources
- Simultaneous research on multiple companies
- Access to G2 reviews, Reddit discussions, pricing pages, and more

**Important:** Always wait for all Parallel MCP tasks to complete before proceeding with blog generation. Verify and cite sources with exact URLs.

### ⚠️ CRITICAL: 6-Month Data Requirement

**All G2 reviews and Reddit discussions must be from the last 6 months only.**

**Current Date Reference:** November, 2025
**Valid Date Range:** May, 2025 to November, 2025

**How to Filter for Last 6 Months:**

1. **In Search Queries:** Include date-related keywords in your search queries:
   - Add "2025" to search terms when searching for recent reviews
   - Use phrases like "recent reviews", "latest feedback", "2025 reviews"
   - Example: "Mixpanel G2 reviews 2025" instead of just "Mixpanel G2 reviews"

2. **After Search Results:** 
   - Check the publish_date field in search results
   - Only use results with dates within the last 6 months
   - Remove or replace any quotes/links older than 6 months

3. **In Blog Posts:**
   - Add date annotations to Reddit links: `(January 2025)`, `(March 2025)`, etc.
   - Update the opening paragraph to mention "over the last six months" at the END of the sentence
   - Label the Reddit Discussions section: "Reddit Discussions (Last 6 Months - May 16, 2025 to November 16, 2025)"

4. **Source Attribution:**
   - **CRITICAL:** Ensure all quotes are correctly linked to their actual sources
   - If a quote says "Reddit Insight" but links to G2, change the label to "G2 Review"
   - If a quote is from G2 but attributed to Reddit, fix the attribution
   - Always verify the link actually contains the quoted text

**Example of Correct Attribution:**
```markdown
*G2 Review: "Quote text here" - [Mixpanel Pricing G2 Review](https://www.g2.com/products/mixpanel/pricing)*
```

**Example of Incorrect Attribution (FIX THIS):**
```markdown
*Reddit Insight: "Quote text here" - [Mixpanel Pricing Reddit](https://www.g2.com/products/mixpanel/pricing)*
```

---

## 6. Evidence and Proof Points

### Citing Evidence

Always back up claims with evidence:

**Structure:**
```markdown
**Claim or Finding:**

**Evidence:**
- "Direct quote from source" - [Source URL with description](https://example.com/source)
- "Another quote" - [Source URL with description](https://example.com/source2)
```

**Example:**
```markdown
#### 1. Pricing Explosion & Token Economics Disaster

**Attack Vector:** "The $4,000/month trap"

**Evidence:**
- "Cursor pricing is ridiculous...I hit a few hundred dollars in spend a month" - [Reddit Discussion](https://reddit.com/r/AICoding/comments/example)
- "with cursor the limit is monthly so what happened for me is that I used it all up in 3 days" - [G2 Review](https://www.g2.com/products/cursor/reviews/example)
```

### Using Icons and Emojis

Use sparingly for emphasis:
- ⚠️ for critical issues
- ✅ for strengths/advantages
- ❌ for weaknesses/disadvantages

---

## 7. SEO Optimization Guidelines

### Title Optimization
- Include main keywords (platform names, industry category)
- Use "Comparison" or "vs" comparisons
- Keep under 60 characters when possible
- Make it compelling and click-worthy

### Excerpt Optimization
- 150-160 characters (strict requirement)
- Include key benefit or what reader will learn
- Natural language (conversational, not salesy)
- Include specific numbers when available (e.g., "1500+ G2 reviews")

### Opening Paragraph SEO
**Critical elements:**
1. Address reader's problem in first sentence
2. Use natural, conversational language
3. Mention specific data points (review counts, sources analyzed)
4. Include all company names being compared
5. Set clear expectations for content coverage

### Section Title SEO
- Convert statements to questions when natural
- Use keywords in H2 headings
- Think about what people search for
- Examples:
  - "How Much Does X Cost?" (better than "Pricing")
  - "Which Platform Has the Best Rating?" (better than "Ratings Comparison")

### Content Flow
- Write naturally for humans first
- Use short paragraphs (3-5 sentences max)
- Break up text with headings, lists, and tables
- Include relevant keywords naturally throughout
- Avoid keyword stuffing

---

## 8. Quality Checklist

Use this checklist before finalizing any blog post:

### Frontmatter
- [ ] Title is SEO-friendly and compelling
- [ ] Excerpt is exactly 150-160 characters
- [ ] Date format is YYYY-MM-DD
- [ ] Exactly 2 tags with proper capitalization (Category name and "Comparison")

### Opening Section
- [ ] First 4-5 lines are conversational and natural
- [ ] SEO-optimized for LLM crawlability
- [ ] Mentions scope and sources of analysis
- [ ] Sets clear expectations for content

### Structure
- [ ] All main sections use H2 headings
- [ ] H2 sections are questions (where appropriate)
- [ ] **All H2 headings are in sentence case** (first letter capitalized, rest lowercase except proper nouns)
- [ ] H3 subsections properly nested
- [ ] Proper heading hierarchy maintained
- [ ] No skipped heading levels (no H4 without H3)

### Formatting
- [ ] Proper spacing between sections
- [ ] Lists are properly formatted
- [ ] Tables render correctly
- [ ] All links are clickable
- [ ] Image paths follow convention

### Links & Sources
- [ ] All external links use proper markdown format
- [ ] Pricing pages linked
- [ ] G2 reviews linked
- [ ] Every quote has a source URL
- [ ] All sources are clickable links
- [ ] Comprehensive "Sources & Links" section at end

### Content Quality
- [ ] Writing is conversational (not robotic)
- [ ] Simple and direct language (no unnecessary jargon)
- [ ] All claims backed by evidence with URLs
- [ ] All quotes have verifiable source URLs
- [ ] Natural flow between sections
- [ ] Proper grammar and punctuation

### SEO
- [ ] Keywords naturally incorporated
- [ ] Section titles optimized
- [ ] Internal links included
- [ ] Meta information complete
- [ ] Content is LLM-crawlable

---

## 9. Common Patterns from Sample Blogs

### Pain Points Section Pattern

```markdown
## What Are the Top Pain Points for Each Platform?

### Company A: Top 3 Complaint Categories

#### 1. [Pain Point Name] ⚠️ Critical Issue

**Severity:** [High/Medium/Low] - [impact description]

- **Specific issue:** Description
- **Another issue:** Description

**Evidence:**
- "Quote from user" - [Source](https://example.com/source-url)
- "Another quote" - [Source](https://example.com/source-url)

#### 2. [Second Pain Point]

[Same structure]
```

### Competitive Attack Vector Pattern

```markdown
## What Are the Competitive Attack Vectors for Each Tool?

### Company A: Top 3 Vulnerabilities

#### 1. [Vulnerability Name]

**Attack Vector:** "[Catchy one-liner]"

**Evidence:**
- "Quote" - [Source](https://example.com/source-url)
- "Quote" - [Source](https://example.com/source-url)

**Attack Message:** "[Positioning statement for competitors to use]"
```

### Strengths and Weaknesses Pattern

```markdown
### Company A

**Strengths:**
- Point 1 with details
- Point 2 with details
- Point 3 with details

**Weaknesses:**
- Issue 1 with details
- Issue 2 with details
- Issue 3 with details

*Proof Point: "Direct quote showing key insight" - Source*
```

### Sources Section Pattern

Always end with comprehensive sources:

```markdown
## Sources & Links

### Competitor Pricing Pages

**Company A:**
- [Pricing](https://companya.com/pricing)
- [Website](https://companya.com)

**Company B:**
- [Pricing](https://companyb.com/pricing)
- [Website](https://companyb.com)

### G2 Reviews
- [Company A G2 Reviews](https://www.g2.com/products/company-a/reviews)
- [Company B G2 Reviews](https://www.g2.com/products/company-b/reviews)

### Reddit Discussions
- [r/subreddit - Discussion Title](https://reddit.com/...)
- [r/subreddit - Another Discussion](https://reddit.com/...)

### Additional Resources
- [Company Case Studies](link)
- [Documentation](link)
```

---

## 10. Writing Style Guidelines

### Voice and Tone
- **Conversational:** Write like you're explaining to a colleague
- **Direct:** Get to the point quickly
- **Honest:** Don't oversell or use marketing fluff
- **Helpful:** Focus on what the reader needs to know

### Word Choice
✅ **Good:**
- "If you're trying to choose..."
- "Here's what we found..."
- "Real users report..."
- "You can see..."

❌ **Avoid:**
- "Revolutionize your workflow"
- "Game-changing solution"
- "Industry-leading platform"
- Excessive adjectives and marketing speak

### Sentence Structure
- Keep sentences short and clear
- Vary sentence length for readability
- Use active voice when possible
- Break up long sentences with bullets or lists

### Paragraph Length
- Aim for 3-5 sentences per paragraph
- Use single-sentence paragraphs for emphasis
- Break up long blocks of text
- Use lists when appropriate

---

## 11. File Naming Convention

Blog post files should be saved as:

```
src/data/blog/company-a-vs-company-b-vs-company-c-vs-company-d.md
```

**Rules:**
- All lowercase
- Use hyphens (not underscores)
- Include all company names
- Keep concise but descriptive
- No special characters

**Examples:**
- `vapi-vs-synthflow-vs-bland-ai-vs-retell.md`
- `cursor-vs-ampcode-vs-windsurf-droid-claudecode.md`

---

## Quick Reference

### Must-Have Elements
1. ✅ Frontmatter with all 5 fields
2. ✅ Conversational opening (4-5 lines) with "We used Oden to analyze"
3. ✅ Question-based H2 sections
4. ✅ Comparison tables
5. ✅ Evidence-backed claims
6. ✅ Sources & Links section
7. ✅ Natural, readable writing

**Optional:**
- Link to Oden analysis report (only if actual report is available)

### Most Common Mistakes to Avoid
1. ❌ Excerpt over 160 characters
2. ❌ Robotic or marketing-heavy language
3. ❌ Missing external links
4. ❌ Statement-only section titles
5. ❌ No spacing between sections
6. ❌ Unattributed quotes
7. ❌ Wrong date format
8. ❌ Forgetting "We used Oden to analyze" in opening

---

## Summary

This guide ensures every comparison blog post:
- Follows consistent structure and formatting
- Is optimized for both human readers and search engines
- Provides actionable insights backed by evidence
- Maintains Oden's voice and quality standards
- Can be generated efficiently at scale

When in doubt, refer to the existing sample blogs in `src/data/blog/` for real-world examples of these principles in action.

