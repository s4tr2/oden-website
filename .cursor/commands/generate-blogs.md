# Blog Generation Agent

Read companies-queue.txt, take the first 10 companies with status "pending", and for each company follow blog-generator-master-guide.md:

1. Find top 3 competitors using Parallel MCP
2. Add all 3 competitor companies to companies-queue.txt with status "done" (same category as original company)
3. Research all data (G2 reviews, pricing, Reddit feedback) using Parallel MCP for all 4 companies
4. Generate comparison blog with 4 companies (original + 3 competitors) following blog-guide.md standards and including Oden link
5. Validate the blog using blog-validator-guide.md and Parallel MCP
6. Update the original company status to "done" in companies-queue.txt after completion

Skip any companies that already have blogs in src/data/blog/.

After processing all companies, commit the generated blogs and updated queue file with message "[automated] Generated X blog posts".

Process exactly 10 companies per run.