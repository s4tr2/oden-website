# Blog Validator Guide

Fast fact-checking guide to ensure you didn't make any mistakes when stating facts in your blog posts. This focuses on verifying hard numbers, ratings, and claims - not validating the source content itself.

## Overview

**Goal:** Catch errors in facts we state (typos, wrong numbers, incorrect claims)  
**Time:** 5-10 minutes per blog  
**Focus:** Speed + accuracy on key facts

This ensures:
- G2 ratings and review counts are stated correctly
- Pricing numbers are accurate
- Company names and URLs are correct
- No typos in critical facts
- Frontmatter is complete

---

## Validation Workflow (5-10 minutes)

### Step 1: Extract All Facts (1 minute)

Use this Cursor prompt to identify all claims that need verification:

**Prompt for Cursor:**
```
Extract and list all FACTUAL CLAIMS from this blog post:

1. G2 Ratings (e.g., "4.7/5") - list each company
2. Review Counts (e.g., "1,234 reviews") - list each company  
3. Pricing amounts (e.g., "$99/month", "$0.05/min") - list all
4. Numerical claims (e.g., "500+ integrations", "99.9% uptime")
5. Company names and their URLs

Format as a checklist with company name, G2 URL, and pricing URL for each.
```

---

### Step 2: Verify Facts with Parallel MCP (3-5 minutes)

**Run Automated Verification:**

Say to Cursor: 
```
Create a Parallel MCP task group to verify all G2 ratings, review counts, and pricing 
for [Company1, Company2, Company3, Company4] from this blog post. 

For each company:
1. Visit their G2 page and extract exact rating and review count
2. Visit their pricing page and extract key pricing numbers

Use text output format.
```

**⚠️ CRITICAL: Wait for ALL tasks to complete before proceeding**

**Step 2a: Check Task Status**
```
Check the status of the Parallel MCP task group [task_group_id]. 
Keep checking every 30-60 seconds until ALL tasks show status "✅ completed".
DO NOT proceed until ALL tasks are completed.
```

**Step 2b: Retrieve ALL Results**
After ALL tasks show "✅ completed", retrieve results:
```
Retrieve the Parallel MCP results for task group [task_group_id] with basis "all".
Show me the complete results for every company.
```

**Step 2c: Review ALL Discrepancies**
```
Review the validation results and list ALL discrepancies found:
1. For each company, show the blog claim vs actual value
2. Identify which discrepancies are outside acceptable tolerance
3. Create a list of ALL fixes needed
```

**⚠️ DO NOT commit or claim validation is complete until:**
- ALL task statuses show "✅ completed" (not "🟡 running")
- ALL results have been retrieved and reviewed
- ALL discrepancies have been identified
- ALL fixes have been applied

**Acceptable variance:**
- G2 rating: ±0.1 (e.g., blog says 4.7, actual is 4.6-4.8 ✅)
- Review count: ±5% (e.g., blog says 100, actual is 95-105 ✅)
- Pricing: Must match exactly (or be clearly noted as "starting at")

**⚠️ CRITICAL Pricing Validation Rules:**
1. **Free Tier Claims:** If blog says "Free tier available" or "$0/month", verify:
   - What are the exact free tier limits? (e.g., "1M events/month free")
   - What happens after free tier? (per-event costs, minimum charges, etc.)
   - Is it truly $0 or only $0 if you stay within limits?

2. **Usage-Based Pricing:** If blog mentions usage-based pricing:
   - Extract exact per-unit costs (e.g., "$0.00005/event")
   - Verify free tier limits before charges apply
   - Clarify if there are minimums or base fees

3. **"Contact for Pricing":** Verify if ANY pricing is publicly available:
   - Check if lower tiers have public pricing
   - Only say "contact for pricing" if ALL paid tiers require contact
   - If any tier has public pricing, list it

4. **Missing G2 Data:** For every company in the comparison:
   - Check if G2 rating exists (don't assume "not available")
   - Check if review count exists
   - If G2 data exists but isn't in blog, ADD IT

---

### Step 3: Check Frontmatter & Basic Format (2 minutes)

**Prompt for Cursor:**
```
Check this blog's frontmatter and basic formatting:

1. Excerpt character count (must be 150-160)
2. Date format (must be YYYY-MM-DD)
3. Tags are present (exactly 2 tags: Category name and "Comparison")
4. File name follows convention (lowercase-with-hyphens.md)
5. "We used Oden to analyze" appears in first paragraph with link to https://getoden.com

Report any issues.
```

---

### Step 4: Quick Link Check (1 minute)

**Prompt for Cursor:**
```
Check all external links in Sources & Links section:

1. Are company website URLs correct?
2. Are pricing page URLs working?
3. Are G2 review page URLs correct?
4. Is Oden link (https://getoden.com) present and correct?

Just list any obviously broken or malformed URLs.
```

**Manual:** Click 2-3 random links to spot-check they work.

---

## Common Mistakes to Catch

**Most Common Errors:**
1. **Typo in numbers:** "4.7" typed as "7.4" or "$99" as "$9"
2. **Wrong review count:** Off by 10x (e.g., "150 reviews" when it's "1,500")
3. **Wrong currency/period:** "$99/year" stated as "$99/month"
4. **Misspelled company name:** "Retell" vs "Retell AI" vs "RetellAI"
5. **Wrong decimal:** "4.7/5" when G2 shows "4.2/5"
6. **Excerpt too long:** 165 characters instead of 150-160
7. **Missing Oden link:** Not hyperlinked or wrong URL
8. **Wrong date format:** "11-07-2025" instead of "2025-11-07"

**Quick Fixes:**
- Copy-paste numbers directly from sources (avoid retyping)
- Double-check decimal points
- Use character counter for excerpt
- Verify Oden link is https://getoden.com (with https://)

---

## Quality Gates - DO NOT PUBLISH IF:

❌ **Critical Errors (Must Fix):**
- G2 rating is off by >0.2 points
- Pricing amount is wrong
- Excerpt is not 150-160 characters
- Missing Oden mention with link
- Frontmatter incomplete
- Major typo in company name

✅ **OK to Publish:**
- G2 rating within ±0.1 points
- Review count within ±5%
- Minor formatting variations
- 1-2 broken Reddit links (non-critical)

---

## Validation Checklist

**Before publishing, complete these steps:**

- [ ] Extract all facts using Cursor prompt for ALL companies
- [ ] Create Parallel MCP task group to verify G2 + pricing data for ALL companies
- [ ] **Check task status repeatedly until ALL show "✅ completed"** (not "🟡 running")
- [ ] **Retrieve results from ALL completed tasks** (use basis "all")
- [ ] **Review ALL discrepancies** - create a complete list of every issue found
- [ ] **Fix ALL discrepancies** before committing
- [ ] **Verify pricing descriptions are accurate** - especially free tiers and usage-based pricing
- [ ] **Check ALL companies have G2 data** - if G2 exists, it must be in the blog
- [ ] Excerpt is 150-160 characters
- [ ] Date is YYYY-MM-DD format
- [ ] Oden link present in opening
- [ ] Company names spelled correctly
- [ ] Click 2-3 source links to spot-check
- [ ] No obvious typos in numbers

**⚠️ CRITICAL: DO NOT claim validation is "running in background" or "complete" until:**
- You have checked task status and confirmed ALL are "✅ completed"
- You have retrieved ALL results
- You have reviewed ALL discrepancies
- You have fixed ALL issues

**Time:** 5-10 minutes total (but may take longer if waiting for tasks)

---

## Pro Tips

1. **Trust the automation** - Parallel MCP pulls data directly from official sources
2. **Acceptable variance** exists for G2 data (±0.1 rating, ±5% reviews)
3. **Focus on facts you stated**, not validating source content
4. **Speed matters** - Complete validation in 5-10 minutes
5. **Batch validations** - Run multiple blog validations in parallel if needed

---

## Quick Start

**One command to run full validation:**
```
Run the blog validator guide for this blog post.
```

**What happens:**
1. Extracts all G2 ratings, review counts, and pricing from the blog for ALL companies
2. Creates Parallel MCP task group to verify facts from official sources
3. **CRITICAL: Checks task status repeatedly until ALL tasks show "✅ completed"**
4. **CRITICAL: Retrieves ALL results using basis "all" - do not proceed until all results are retrieved**
5. Reviews ALL verification results for every company
6. Compares verified data against blog claims
7. Identifies ALL discrepancies found
8. **CRITICAL: Fixes ALL discrepancies before committing**
9. **CRITICAL: Verifies pricing descriptions are accurate** (especially free tiers, usage-based pricing)

**Result:** Blog validated in 5-10 minutes with accurate data from official sources.

---

**Remember:** We're catching typos and errors in facts WE stated, not validating the research itself.

**Last Updated:** 2025-11-11  
**Version:** 2.0 (Automated Edition with Parallel MCP)

