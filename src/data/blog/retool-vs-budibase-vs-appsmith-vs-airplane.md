---
title: "Retool vs Budibase vs Appsmith vs Airplane - Comparison"
excerpt: "Trying to pick between Retool, Budibase, Appsmith, and Airplane for internal tools? We break down pricing, features, and real user feedback to help you decide."
date: "2025-11-28"
tags: ["Internal Tools Platform", "Comparison"]
category: "Comparison"
---
We used [Oden](https://getoden.com?utm_source=oden) to analyze public product sites, pricing pages, docs, G2 reviews, GitHub repos, and Reddit discussions for Retool, Budibase, Appsmith, and Airplane. You’re likely here because your team is drowning in spreadsheet workflows and custom scripts, and you need an internal tools platform that won’t blow up your budget or stall on adoption. In this guide we’ll compare real-world ratings, costs, features, and trade-offs-plus how Airplane’s shutdown changes the landscape. All data is current as of late 2025 and based only on sources we can verify.

## Which internal tools platform has the best ratings?

Below we use G2 as a consistent benchmark for user ratings and review counts across Retool, Budibase, and Appsmith. Airplane.dev is now shut down and no longer actively rated.

| Platform/Tool | Rating (G2) | # Reviews (G2) | Notes |
| --- | --- | --- | --- |
| **Retool** | 4.6 / 5 | 346 | Mid‑2025 G2 score with 346 reviews; users frequently praise ease of use and integrations but mention some performance and learning-curve issues. *Source: [G2 – Retool](https://www.g2.com/products/retool/reviews?utm_source=oden)* |
| **Appsmith** | 4.7 / 5 | 65 | Slightly higher score but far fewer reviews than Retool; reviewers like the drag‑and‑drop UI, JS flexibility, and open‑source model, while noting performance lag on large apps. *Source: [G2 – Appsmith](https://www.g2.com/products/appsmith/reviews?utm_source=oden)* |
| **Budibase** | 4.5 / 5 | 68 | Solid rating with similar sample size to Appsmith; praised for ease of use and templates, but some users call the paid plans expensive and mobile UX limited. *Source: [G2 – Budibase](https://www.g2.com/products/budibase/reviews?utm_source=oden)* |
| **Airplane** | N/A (product sunset) | N/A | Airplane was acquired by Airtable in January 2024 and the product was shut down with an end‑of‑life date of March 1, 2024, so it isn’t a live option for new deployments. *Source: [CBInsights – Airplane company profile](https://www.cbinsights.com/company/airplane?utm_source=oden), [Our Incredible Journey – Airplane note](https://ourincrediblejourney.tumblr.com/page/2?utm_source=oden)* |

### Takeaways

- Retool has the most statistically meaningful dataset, with 300+ reviews and a 4.6/5 rating, giving more confidence that the score reflects a wide range of use cases. ([g2.com](https://www.g2.com/products/retool/reviews?utm_source=oden))
- Appsmith’s smaller but very positive review base (4.7/5 on 65 reviews) suggests high satisfaction among teams that adopt it, especially those leaning into its open‑source flexibility. ([g2.com](https://www.g2.com/products/appsmith/reviews?utm_source=oden))
- Budibase’s 4.5/5 rating with ~70 reviews indicates happy users overall but with recurring concerns around pricing and mobile experience. ([g2.com](https://www.g2.com/products/budibase/reviews?utm_source=oden))
- Airplane is best treated as a legacy platform: the acquisition and March 1, 2024 shutdown mean you should migrate rather than start new projects on it. ([airtable.com](https://www.airtable.com/newsroom/airplane-balsa-join-airtable?utm_source=oden))

## How much do internal tools platforms really cost?

Pricing changes frequently and varies by region, hosting model, and contract. The numbers below are illustrative entry points based on public pages, not quotes.

| Platform/Tool | Free/Trial tier | Main billing units | Example entry point |
| --- | --- | --- | --- |
| **Retool** | Free cloud plan with unlimited apps, up to 5 users, 500 workflow runs/month, and 5GB storage. *Source: [Retool pricing page](https://retool.com/en-IN/pricing?utm_source=oden)* | Per **standard user**, **end user**, and **external user** (different rates, discounts for annual and tiers for externals). *Source: [Retool billing usage docs](https://docs.retool.com/org-users/concepts/billing-usage?utm_source=oden)* | Indicative Business annual example from docs: 5 standard users at $50/user/month + 10 end users at $15/user/month ≈ $400/month ($4,800/year) before overages.  |
| **Budibase** | Free plan (cloud or self‑host) with unlimited apps, data sources, and automations, but capped users. *Source: [Budibase pricing](https://budibase.com/pricing?utm_source=oden)* | Per **app creator** and **app user**, with separate Premium and Enterprise tiers; self‑hosting allowed at all tiers.  | Premium plan from $50 per app creator/month and $5 per app user/month (annual), higher on monthly billing; Enterprise is by quote.  |
| **Appsmith** | Free tier for individuals/small teams (up to 5 cloud users, Git versioning for 3 repos, public apps). *Source: [Appsmith pricing overview](https://www.appsmith.com/blog/usage-based-pricing?utm_source=oden)* | Flat **per-user** pricing (no distinction between editors and end users) plus an Enterprise flat fee option.  | Business plan at $15/user/month, and Enterprise at $2,500/month for 100 users (effectively ~$25/user) per public pricing.  |
| **Airplane** | Product discontinued; no current free tier. Historical offers included a free developer tier, but signups were closed as of January 2024 and the platform shut down March 1, 2024. *Source: [Glide – Airplane Alternative blog](https://www.glideapps.com/blog/airplane-alternative?utm_source=oden)* | N/A – not sold anymore. | N/A – any “pricing” you see now is purely historical and not usable for new projects. |

### What this means in practice

- Retool’s split between standard, end, and external users gives fine‑grained control but makes cost modeling more complex; you must estimate how many builders vs. consumers you’ll have, and how many external stakeholders you’ll expose apps to. ([retool.com](https://retool.com/en-IN/pricing?utm_source=oden))
- Budibase and Appsmith both offer generous free/self‑host options, which can be attractive if you have DevOps capacity and want to minimize recurring SaaS costs. ([budibase.com](https://budibase.com/pricing?utm_source=oden))
- Budibase’s per‑creator + per‑user model can get pricey as you scale both builders and app users, which several G2 reviewers highlight. ([g2.com](https://www.g2.com/products/budibase/reviews?utm_source=oden))
- Appsmith’s “single per-user price” is simpler to reason about but can be less cost‑efficient if you have a small group of builders and a very large set of read‑only users. ([appsmith.com](https://www.appsmith.com/blog/usage-based-pricing?utm_source=oden))
- Airplane’s shutdown means any TCO comparison is about migration cost, not subscription cost-you’re budgeting time and engineering effort to move off it. ([cbinsights.com](https://www.cbinsights.com/company/airplane?utm_source=oden))

Always double-check current prices with each vendor's calculator or sales team.

## What are the key features of each platform?

### Retool

*Core positioning:* *A developer‑focused, AI‑native platform for building internal apps, agents, and workflows on top of your existing data and APIs.* ([retool.com](https://retool.com/?utm_source=oden))

**Key Features:**

- Drag‑and‑drop AppGen canvas with ready‑made components for tables, forms, modals, and dashboards, plus an IDE view for custom JavaScript. *Source: [Retool homepage](https://retool.com/?utm_source=oden)*
- Connectors for databases, APIs, vector stores, and LLMs, enabling complex internal tools that mix operational data and AI. *Source: [Retool homepage](https://retool.com/?utm_source=oden)*
- Built‑in workflows with scheduled and webhook triggers, plus quotas (e.g., 500 runs/month on Free, 5,000 on Team) to orchestrate backend jobs. *Source: [Retool pricing page](https://retool.com/en-IN/pricing?utm_source=oden)*
- AI “Agents” feature to run LLM‑powered tasks with observability, evaluations, and tuning controls. *Source: [Retool billing & agents docs](https://docs.retool.com/org-users/concepts/billing-usage?utm_source=oden)*
- Enterprise features across higher tiers: audit logging, granular permissions, SAML/OIDC SSO, multiple environments, and external user pricing. *Source: [Retool pricing page](https://retool.com/en-IN/pricing?utm_source=oden)*

**Best For:**

- Product and data teams that are comfortable writing SQL/JS and want to move very fast on internal tools. ([g2.com](https://www.g2.com/products/retool/reviews?utm_source=oden))
- Mid‑market and enterprise orgs needing strict RBAC, SSO, and audit trails. ([retool.com](https://retool.com/en-IN/pricing?utm_source=oden))
- Companies exploring AI‑enhanced internal tools (agents, copilots, content workflows) on top of existing data sources. ([retool.com](https://retool.com/?utm_source=oden))

### Budibase

*Core positioning:* *An open‑source workflow and internal tools platform that lets engineers build and self‑host business apps in minutes.* ([budibase.com](https://budibase.com/?utm_source=oden))

**Key Features:**

- Visual app builder with 40+ pre‑built components and templates for management apps, portals, forms, admin panels, and approval flows. *Source: [Budibase homepage](https://budibase.com/?utm_source=oden)*
- Connectors for PostgreSQL, MySQL, MSSQL, MongoDB, REST APIs, CSV import, and a built‑in database; supports large‑scale use cases like 100k+ users. *Source: [Budibase homepage](https://budibase.com/?utm_source=oden), [Budibase GitHub](https://github.com/Budibase/budibase?utm_source=oden)*
- Automation engine for triggers, email/Slack integrations, and workflow orchestration. *Source: [Budibase homepage](https://budibase.com/?utm_source=oden)*
- Open‑source, self‑hostable via Docker, Kubernetes, and other environments, giving you full infrastructure control. *Source: [Budibase docs](https://docs.budibase.com/?utm_source=oden), [Budibase GitHub](https://github.com/Budibase/budibase?utm_source=oden)*
- ISO 27001 certification and enterprise‑grade features like SSO, SAML, audit logs, environment variables, and air‑gapped deployment in higher tiers. *Source: [Budibase homepage](https://budibase.com/?utm_source=oden)*

**Best For:**

- Teams that want a fully open‑source stack with the option to self‑host and customize deeply. ([docs.budibase.com](https://docs.budibase.com/?utm_source=oden))
- Organizations (including public sector) that must keep data on‑prem or in tightly controlled environments. ([reddit.com](https://www.reddit.com//r/nocode/comments/1j3tn7y?utm_source=oden))
- Builders who value rich templates and no‑code friendliness but still want escape hatches via JavaScript and plugins. ([budibase.com](https://budibase.com/?utm_source=oden))

### Appsmith

*Core positioning:* *An open‑source low‑code framework for building internal apps-dashboards, admin panels, CRUD tools-on top of any database or API.* ([github.com](https://github.com/appsmithorg/appsmith?utm_source=oden))

**Key Features:**

- Drag‑and‑drop UI builder with dozens of widgets (tables, forms, charts, etc.), optimized for internal dashboards and admin tools. *Source: [Appsmith use cases](https://www.appsmith.com/use-cases?utm_source=oden)*
- Connects securely to SQL databases, REST and GraphQL APIs, and other data sources, with a query editor and bindings. *Source: [Appsmith docs – Introduction](https://docs.appsmith.com/?utm_source=oden)*
- First‑class JavaScript support for business logic-write JS directly in widget props and queries, plus a JS editor for reusable functions. *Source: [Appsmith GitHub](https://github.com/appsmithorg/appsmith?utm_source=oden)*
- Git‑based version control (branches, rollback), multiple environments, and collaborative development workflows. *Source: [Appsmith docs – Git integration](https://docs.appsmith.com/advanced-concepts/version-control-with-git/guides/setup-github?utm_source=oden)*
- Cloud and self‑host deployment options (Docker, Kubernetes, AWS AMI), with the same core platform across both. *Source: [Appsmith GitHub](https://github.com/appsmithorg/appsmith?utm_source=oden)*

**Best For:**

- Dev teams that want open‑source control plus a modern low‑code UI builder and strong JS extensibility. ([github.com](https://github.com/appsmithorg/appsmith?utm_source=oden))
- Orgs standardizing on Git‑based workflows and CI/CD for internal tools. ([docs.appsmith.com](https://docs.appsmith.com/advanced-concepts/version-control-with-git/guides/setup-github?utm_source=oden))
- Cost‑sensitive teams that like predictable per‑user pricing and free self‑hosting. ([appsmith.com](https://www.appsmith.com/blog/usage-based-pricing?utm_source=oden))

### Airplane

*Core positioning:* *A (now‑sunset) code‑first developer platform for turning scripts, queries, and APIs into internal UIs, tasks, and runbooks.* ([alejandrocremades.com](https://alejandrocremades.com/ravi-parikh/?utm_source=oden))

**Key Features (when active):**

- Code‑first model where tasks were defined as scripts/queries and exposed as internal UIs or runbooks. ([blog.quastor.org](https://blog.quastor.org/p/stripe-rate-limiting?utm_source=oden))
- “Tasks” and “Views” for building React‑based dashboards and operational tools on top of existing code. ([bytes.dev](https://bytes.dev/archives/195?utm_source=oden))
- Self‑hosted agents and self‑hosted storage so jobs, logs, and outputs could run fully inside your VPC. ([reddit.com](https://www.reddit.com/r/alphaandbetausers/comments/12zo9h6?utm_source=oden))
- Focus on operations and SRE workflows (on‑call runbooks, long‑running jobs, support tools) more than generic CRUD apps. ([blog.quastor.org](https://blog.quastor.org/p/stripe-rate-limiting?utm_source=oden))

**Best For (historically):**

- Engineering‑heavy teams that preferred everything “as code” and wanted internal tools tightly integrated into their existing repo. ([alejandrocremades.com](https://alejandrocremades.com/ravi-parikh/?utm_source=oden))
- Orgs that needed strong network isolation via agents running in their own VPC. ([reddit.com](https://www.reddit.com/r/alphaandbetausers/comments/12zo9h6?utm_source=oden))
- Today, existing Airplane users who must understand the original model in order to plan a migration to another platform. ([yolken.net](https://yolken.net/blog/end-of-airplanedev?utm_source=oden))

## What are the strengths and weaknesses of each platform?

### Retool

**Strengths:**

- Highly rated by users (4.6/5 on G2 across 300+ reviews), especially for ease of use, integrations, and speed of building internal tools. ([g2.com](https://www.g2.com/products/retool/reviews?utm_source=oden))
- Strong enterprise feature set (RBAC, SSO, multiple environments, audit logging) and deployment options, making it suitable for regulated industries. ([retool.com](https://retool.com/en-IN/pricing?utm_source=oden))
- Rich component library and visual editor that still give developers full access to JavaScript and SQL when needed. ([retool.com](https://retool.com/?utm_source=oden))
- AI‑native roadmap, including Agents and AppGen workflows, which can reduce boilerplate and speed up new app creation. ([retool.com](https://retool.com/?utm_source=oden))

**Weaknesses:**

- Pricing model (per standard, end, and external user) is often cited as complex and potentially expensive at scale, especially when many business users need access. ([docs.retool.com](https://docs.retool.com/org-users/concepts/billing-usage?utm_source=oden))
- Some reviewers and third‑party analyses mention performance issues on very large or complex apps (slow UIs or query execution). ([g2.com](https://www.g2.com/products/retool/reviews?utm_source=oden))
- Not ideal for non‑technical builders-the reliance on SQL and JS creates a learning curve for teams without developer support. ([g2.com](https://www.g2.com/products/retool/reviews?utm_source=oden))

### Budibase

**Strengths:**

- Open‑source and self‑hostable, giving organizations full control over infrastructure and data residency. ([docs.budibase.com](https://docs.budibase.com/?utm_source=oden))
- Good balance of no‑code friendliness (drag‑and‑drop UI, templates) and extensibility (plugins, JavaScript). ([budibase.com](https://budibase.com/?utm_source=oden))
- Strong support for a wide range of data sources, including major SQL/NoSQL databases, REST APIs, and built‑in tables. ([budibase.com](https://budibase.com/?utm_source=oden))
- Frequently recommended in self‑hosting and public‑sector contexts where local deployment is mandatory. ([reddit.com](https://www.reddit.com//r/nocode/comments/1j3tn7y?utm_source=oden))

**Weaknesses:**

- Several G2 reviewers flag Budibase’s paid plans as expensive relative to other no‑code/low‑code options, especially for smaller teams. ([g2.com](https://www.g2.com/products/budibase/reviews?utm_source=oden))
- Multiple reviews mention that the mobile experience is more limited and less pleasant than desktop, with some features not fully available on mobile. ([g2.com](https://www.g2.com/products/budibase/reviews?utm_source=oden))
- Enterprise users may find community‑driven support insufficient without formal support packages or SLAs, according to some G2 feedback. ([g2.com](https://www.g2.com/products/budibase/reviews?utm_source=oden))

### Appsmith

**Strengths:**

- Open‑source with an active GitHub community and frequent updates, giving engineering teams transparency and influence over the roadmap. ([github.com](https://github.com/appsmithorg/appsmith?utm_source=oden))
- Very flexible JavaScript model; you can write full JS anywhere (in queries, widget props, reusable functions), enabling complex logic without leaving the platform. ([github.com](https://github.com/appsmithorg/appsmith?utm_source=oden))
- Git‑centric workflows (branching, rollbacks, multi‑environment) are built in, aligning well with modern DevOps practices. ([docs.appsmith.com](https://docs.appsmith.com/advanced-concepts/version-control-with-git/guides/setup-github?utm_source=oden))
- High user satisfaction on G2 (4.7/5) with praise for ease of building internal tools, strong integrations, and responsive support/community. ([g2.com](https://www.g2.com/products/appsmith/reviews?utm_source=oden))

**Weaknesses:**

- G2 reviewers commonly cite performance issues and laggy UIs when handling large datasets or very complex apps. ([g2.com](https://www.g2.com/products/appsmith/reviews?utm_source=oden))
- UI customization is more constrained than hand‑coded frontends; some teams hit limits when trying to build highly polished, bespoke experiences. ([g2.com](https://www.g2.com/products/appsmith/reviews?utm_source=oden))
- While the per‑user model is simple, it can be less cost‑efficient if you have a large pool of occasional users who just need read‑only access. ([appsmith.com](https://www.appsmith.com/blog/usage-based-pricing?utm_source=oden))

### Airplane

**Strengths (historical):**

- Popular among developers for its code‑first approach: define tasks and views in code, then expose them as internal tools, runbooks, and dashboards. ([alejandrocremades.com](https://alejandrocremades.com/ravi-parikh/?utm_source=oden))
- Deep integration with existing scripts and services, making it easy to wrap existing operational workflows in a usable UI. ([blog.quastor.org](https://blog.quastor.org/p/stripe-rate-limiting?utm_source=oden))
- Strong security and isolation story via self‑hosted agents and later self‑hosted storage so logs and outputs never had to leave your VPC. ([reddit.com](https://www.reddit.com/r/alphaandbetausers/comments/12zo9h6?utm_source=oden))

**Weaknesses (today):**

- Product was effectively acqui‑hired by Airtable; an internal note and multiple reports confirm the Airplane platform was sunset March 1, 2024. ([ourincrediblejourney.tumblr.com](https://ourincrediblejourney.tumblr.com/page/2?utm_source=oden))
- Customers had to migrate critical internal workflows in a short window, which several accounts describe as disruptive and stressful. ([yolken.net](https://yolken.net/blog/end-of-airplanedev?utm_source=oden))
- As a result, Airplane is now a migration problem rather than a vendor option; any remaining deployments face increasing risk over time. ([cbinsights.com](https://www.cbinsights.com/company/airplane?utm_source=oden))

## How do these platforms position themselves?

**Retool** markets itself as “software that starts with a sentence” and “the AppGen platform for every use case,” emphasizing AI‑powered generation of internal apps, agents, and workflows on top of your own data and systems. It clearly targets professional developers and data/operations teams at startups through Fortune 500 enterprises who want to build internal software faster without giving up code‑level control. ([retool.com](https://retool.com/?utm_source=oden))

**Budibase** pitches “save weeks building internal tools and automating workflows” and calls itself an “open‑source workflow platform” for management apps, portals, and approval flows, with a big emphasis on open‑source, self‑hosting, and enterprise‑grade security. The messaging leans toward engineering and IT teams who want to consolidate internal tools on a flexible, self‑hostable platform. ([budibase.com](https://budibase.com/?utm_source=oden))

**Appsmith** describes itself as an “open‑source developer tool” and “platform to build admin panels, internal tools, and dashboards,” highlighting developer productivity (drag‑and‑drop + JS) and breadth of integrations. The target audience is explicitly developers and technical teams who want to standardize how they build internal tools while retaining backend and JS control. ([github.com](https://github.com/appsmithorg/appsmith?utm_source=oden))

**Airplane** consistently branded itself as “the developer platform for internal tools,” focusing on turning scripts and queries into internal apps, tasks, and views with everything defined in code and integrated into your existing repo and CI. Its positioning was squarely developer‑first and ops‑oriented (on‑call runbooks, SRE workflows, operational dashboards) rather than citizen‑developer friendly. ([alejandrocremades.com](https://alejandrocremades.com/ravi-parikh/?utm_source=oden))

## Which platform should you choose?

### Choose retool if:

1. **Your internal tools are mission‑critical and you need enterprise‑grade security, RBAC, and SSO from day one**, not as add‑ons or community plugins. ([retool.com](https://retool.com/en-IN/pricing?utm_source=oden))
2. **You have developers comfortable with SQL and JavaScript** who will benefit from Retool’s blend of visual building and code, and can handle the learning curve. ([g2.com](https://www.g2.com/products/retool/reviews?utm_source=oden))
3. **You expect to build many apps and workflows across data, operations, and support teams**, and want a single AI‑enabled platform to orchestrate them. ([retool.com](https://retool.com/?utm_source=oden))
4. **Your org can justify higher per‑user pricing in exchange for faster time‑to‑market and centralized governance**, especially if you’ll leverage external user pricing for portals. ([retool.com](https://retool.com/en-IN/pricing?utm_source=oden))
5. **You’re interested in AI‑driven internal tools (agents, copilots, document workflows)** and want those capabilities natively supported rather than bolted on. ([retool.com](https://retool.com/?utm_source=oden))

### Choose budibase if:

1. **Self‑hosting and open‑source are non‑negotiable** due to security, compliance, or cost reasons, and you want to own the full stack. ([docs.budibase.com](https://docs.budibase.com/?utm_source=oden))
2. **You need to build a wide range of workflow apps and portals quickly**, and you’re happy leveraging Budibase’s templates and drag‑and‑drop components. ([budibase.com](https://budibase.com/?utm_source=oden))
3. **Your team spans both technical and non‑technical builders**, and you want something that’s approachable for non‑coders but still extensible via JS and plugins. ([budibase.com](https://budibase.com/?utm_source=oden))
4. **You’re okay paying higher cloud prices in exchange for the flexibility of per‑creator + per‑user licensing and strong self‑hosting options.** ([budibase.com](https://budibase.com/pricing?utm_source=oden))
5. **You operate in public sector or similar environments where local hosting and data sovereignty are key**, and Budibase’s track record there matters. ([reddit.com](https://www.reddit.com//r/nocode/comments/1j3tn7y?utm_source=oden))

### Choose appsmith if:

1. **You want an open‑source, JavaScript‑centric platform** where developers can write real JS almost anywhere and treat the tool as an extension of their existing codebase. ([github.com](https://github.com/appsmithorg/appsmith?utm_source=oden))
2. **Your workflow already revolves around Git and branch‑based collaboration**, and you want version control, reviews, and CI/CD to apply to internal tools too. ([docs.appsmith.com](https://docs.appsmith.com/advanced-concepts/version-control-with-git/guides/setup-github?utm_source=oden))
3. **You need predictable, simple per‑user pricing** (plus a free self‑host option) and don’t want to juggle multiple user types or external user tiers. ([appsmith.com](https://www.appsmith.com/blog/usage-based-pricing?utm_source=oden))
4. **Your team is comfortable tuning performance and optimizing queries** to mitigate the performance issues that some users see on very large apps. ([g2.com](https://www.g2.com/products/appsmith/reviews?utm_source=oden))
5. **You prioritize community, extensibility, and long‑term control over vendor lock‑in**, and are willing to invest a bit more engineering effort up front. ([github.com](https://github.com/appsmithorg/appsmith?utm_source=oden))

### Choose airplane if:

1. **You shouldn’t choose Airplane for new projects.** The product has been sunset since March 1, 2024; any new build on it would be betting on a dead platform. ([airtable.com](https://www.airtable.com/newsroom/airplane-balsa-join-airtable?utm_source=oden))
2. **You currently run critical workflows on Airplane and need to understand its model to migrate**, in which case study how tasks, views, and agents map to your target platform. ([alejandrocremades.com](https://alejandrocremades.com/ravi-parikh/?utm_source=oden))
3. **You value code‑first internal tooling and want something similar**, so you’re evaluating Retool, Budibase, Appsmith, or other alternatives like Windmill or UI Bakery as successors. ([bytes.dev](https://bytes.dev/archives/195?utm_source=oden))
4. **You’re doing a post‑mortem on platform risk**, using Airplane as a cautionary example of what happens when a popular internal tools vendor gets acqui‑hired and shuts down. ([yolken.net](https://yolken.net/blog/end-of-airplanedev?utm_source=oden))

## Sources & links

### Company websites

- [Retool – Build internal software better, with AI](https://retool.com/?utm_source=oden)
- [Budibase – Build internal tools in minutes, the easy way](https://budibase.com/?utm_source=oden)
- [Appsmith – Low-code internal tools builder](https://www.appsmith.com/use-cases?utm_source=oden)
- [CBInsights – Airplane company profile](https://www.cbinsights.com/company/airplane?utm_source=oden)

### Pricing pages

- [Retool – Billing and usage docs](https://docs.retool.com/org-users/concepts/billing-usage?utm_source=oden)
- [Budibase – Pricing](https://budibase.com/pricing?utm_source=oden)
- [Appsmith – Usage-based pricing](https://www.appsmith.com/blog/usage-based-pricing?utm_source=oden)
- [Glide – Airplane Alternative](https://www.glideapps.com/blog/airplane-alternative?utm_source=oden)

### Documentation

- [Retool Docs](https://docs.retool.com/?utm_source=oden)
- [Budibase documentation](https://docs.budibase.com/?utm_source=oden)
- [Appsmith – Introduction](https://docs.appsmith.com/?utm_source=oden)
- [The end of Airplane.dev](https://yolken.net/blog/end-of-airplanedev?utm_source=oden)

### G2 review pages

- [G2 – Retool](https://www.g2.com/products/retool/reviews?utm_source=oden)
- [G2 – Budibase](https://www.g2.com/products/budibase/reviews?utm_source=oden)
- [G2 – Appsmith](https://www.g2.com/products/appsmith/reviews?utm_source=oden)

### Reddit discussions

- [Reddit – No code locally hosted?](https://www.reddit.com/r/nocode/comments/1j3tn7y/no_code_locally_hosted/?utm_source=oden)
- [Reddit – Budibase & Appsmith discussion](https://www.reddit.com/r/kubernetes/comments/qwooi1/budibase_an_opensource_low_code_platform_for/?utm_source=oden)
- [Reddit – Have you ever used Retool?](https://www.reddit.com/r/developer/comments/1gen8ej/have_you_ever_used_retool/?utm_source=oden)
- [Reddit – Self-hosted storage for internal tools](https://www.reddit.com/r/alphaandbetausers/comments/12zo9h6/web_beta_selfhosted_storage_for_internal_tools/?utm_source=oden)

### Additional resources

- [Retool Blog – Introducing pricing, v2](https://retool.com/blog/pricing-v2?utm_source=oden)
- [Budibase blog – Open-source low-code platforms](https://budibase.com/blog/open-source-low-code-platforms/?utm_source=oden)
- [Airtable – Airplane and Balsa join Airtable](https://www.airtable.com/newsroom/airplane-balsa-join-airtable?utm_source=oden)
- [Bytes – Airplane is the developer platform for internal tools](https://bytes.dev/archives/195?utm_source=oden)
