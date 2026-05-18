export interface GlossaryTerm {
  id: string
  term: string
  definition: string
  relatedTerms?: string[]
}

export const productMarketingGlossaryTerms: GlossaryTerm[] = [
  // A
  {
    id: 'ab-testing',
    term: 'A/B Testing',
    definition:
      'A method of comparing two versions of a webpage, app, or marketing material to determine which one performs better based on user behavior and statistical significance.',
    relatedTerms: ['Conversion Rate', 'Hypothesis Testing'],
  },
  {
    id: 'acquisition',
    term: 'Acquisition',
    definition:
      'The process of obtaining new customers through marketing and sales strategies. Often measured by Customer Acquisition Cost (CAC).',
    relatedTerms: ['Customer Acquisition Cost', 'Lead Generation'],
  },
  {
    id: 'advocacy-program',
    term: 'Advocacy Program',
    definition:
      'A marketing strategy where satisfied customers are encouraged to become spokespeople for your product or brand and recommend them to other prospective customers.',
    relatedTerms: ['Net Promoter Score', 'Customer Marketing'],
  },
  {
    id: 'analyst-relations',
    term: 'Analyst Relations',
    definition:
      'A strategy where product marketers work alongside external or internal analyst teams (like Gartner or Forrester) to gain insights and influence industry perception.',
    relatedTerms: ['Thought Leadership', 'Market Research'],
  },
  {
    id: 'annual-recurring-revenue',
    term: 'Annual Recurring Revenue (ARR)',
    definition:
      'A metric showing the amount of predictable revenue that comes in each year from subscriptions, memberships, contracts, and other recurring purchases.',
    relatedTerms: ['Monthly Recurring Revenue', 'Churn Rate'],
  },

  // B
  {
    id: 'battle-card',
    term: 'Battle Card',
    definition:
      'A concise, internal sales document that provides competitive intelligence, objection handling, and key differentiators to help sales reps win deals against specific competitors.',
    relatedTerms: ['Competitive Intelligence', 'Sales Enablement'],
  },
  {
    id: 'benchmarking',
    term: 'Benchmarking',
    definition:
      'The practice of comparing your company\'s performance, processes, or products against competitors or industry standards to identify gaps and opportunities.',
    relatedTerms: ['Competitive Analysis', 'Market Research'],
  },
  {
    id: 'beta-program',
    term: 'Beta Program',
    definition:
      'A pre-release testing phase where select customers use new features and provide feedback before general availability, validating product-market fit.',
    relatedTerms: ['Product Launch', 'Early Adopter'],
  },
  {
    id: 'bofu',
    term: 'Bottom of Funnel (BoFU)',
    definition:
      'The final stage of the customer journey funnel focused on converting qualified leads into customers through demos, trials, and purchase decisions.',
    relatedTerms: ['Sales Funnel', 'Middle of Funnel', 'Top of Funnel'],
  },
  {
    id: 'brand-identity',
    term: 'Brand Identity',
    definition:
      'The visible elements of a brand including design, logo, color palette, tone of voice, and messaging that distinguish it in consumers\' minds.',
    relatedTerms: ['Brand Positioning', 'Messaging Framework'],
  },
  {
    id: 'brand-positioning',
    term: 'Brand Positioning',
    definition:
      'The process of defining how a brand is perceived in the minds of customers relative to its competitors, establishing a unique place in the market.',
    relatedTerms: ['Positioning', 'Value Proposition'],
  },
  {
    id: 'buyer-persona',
    term: 'Buyer Persona',
    definition:
      'A semi-fictional representation of an ideal customer based on market research and data, including demographics, goals, challenges, and buying behaviors.',
    relatedTerms: ['Ideal Customer Profile', 'Customer Journey'],
  },
  {
    id: 'b2b',
    term: 'Business to Business (B2B)',
    definition:
      'A business model and marketing strategy focused on selling products or services to other businesses rather than individual consumers.',
    relatedTerms: ['Business to Consumer', 'Enterprise Sales'],
  },
  {
    id: 'b2c',
    term: 'Business to Consumer (B2C)',
    definition:
      'A business model and marketing strategy focused on selling products or services directly to individual end consumers.',
    relatedTerms: ['Business to Business', 'Consumer Psychology'],
  },

  // C
  {
    id: 'case-study',
    term: 'Case Study',
    definition:
      'A detailed account of how a customer used a product to solve a problem and achieve measurable results, used as social proof in marketing and sales.',
    relatedTerms: ['Customer Story', 'Social Proof'],
  },
  {
    id: 'churn-rate',
    term: 'Churn Rate',
    definition:
      'A metric measuring the percentage of customers who stop using your product or cancel their subscription over a specific time period.',
    relatedTerms: ['Customer Retention', 'Customer Lifetime Value'],
  },
  {
    id: 'competitive-analysis',
    term: 'Competitive Analysis',
    definition:
      'The process of identifying and evaluating competitors to understand their strengths, weaknesses, products, and market strategies.',
    relatedTerms: ['Competitive Intelligence', 'SWOT Analysis'],
  },
  {
    id: 'competitive-intelligence',
    term: 'Competitive Intelligence',
    definition:
      'The systematic collection and analysis of information about competitors, including their products, pricing, positioning, and go-to-market strategies.',
    relatedTerms: ['Battle Card', 'Win/Loss Analysis'],
  },
  {
    id: 'content-marketing',
    term: 'Content Marketing',
    definition:
      'A strategic approach focused on creating and distributing valuable, relevant content to attract and retain a defined audience and drive profitable customer action.',
    relatedTerms: ['Demand Generation', 'Thought Leadership'],
  },
  {
    id: 'conversion-rate',
    term: 'Conversion Rate',
    definition:
      'The percentage of users who take a desired action, such as signing up, making a purchase, or completing a form, out of total visitors.',
    relatedTerms: ['A/B Testing', 'Sales Funnel'],
  },
  {
    id: 'customer-acquisition-cost',
    term: 'Customer Acquisition Cost (CAC)',
    definition:
      'The total cost associated with acquiring a new customer, including marketing, sales expenses, and overhead divided by number of new customers.',
    relatedTerms: ['Customer Lifetime Value', 'ROI'],
  },
  {
    id: 'customer-journey',
    term: 'Customer Journey',
    definition:
      'The complete experience a customer has with a company, from initial awareness through purchase and ongoing relationship, often mapped to identify touchpoints.',
    relatedTerms: ['Journey Mapping', 'Customer Touchpoint'],
  },
  {
    id: 'customer-lifetime-value',
    term: 'Customer Lifetime Value (CLV/LTV)',
    definition:
      'A metric that predicts the total revenue a business can expect from a single customer account throughout their entire relationship.',
    relatedTerms: ['Customer Acquisition Cost', 'Churn Rate'],
  },
  {
    id: 'customer-marketing',
    term: 'Customer Marketing',
    definition:
      'Marketing activities and campaigns aimed at existing customers to increase retention, upsells, cross-sells, and advocacy.',
    relatedTerms: ['Customer Retention', 'Advocacy Program'],
  },
  {
    id: 'customer-onboarding',
    term: 'Customer Onboarding',
    definition:
      'The process of helping new customers get started with your product, understand its value, and achieve their first success milestone.',
    relatedTerms: ['Time-to-Value', 'Customer Success'],
  },
  {
    id: 'customer-retention',
    term: 'Customer Retention',
    definition:
      'Strategies and tactics used to keep existing customers engaged, satisfied, and loyal to the product or brand over time.',
    relatedTerms: ['Churn Rate', 'Customer Lifetime Value'],
  },
  {
    id: 'customer-story',
    term: 'Customer Story',
    definition:
      'A narrative-driven piece of content highlighting a customer\'s experience and success with a product, often more emotional than a traditional case study.',
    relatedTerms: ['Case Study', 'Testimonial'],
  },

  // D
  {
    id: 'demand-generation',
    term: 'Demand Generation',
    definition:
      'Marketing programs and tactics designed to create awareness and interest in a product, driving qualified leads into the sales funnel.',
    relatedTerms: ['Lead Generation', 'Content Marketing'],
  },
  {
    id: 'differentiation',
    term: 'Differentiation',
    definition:
      'The distinct features, benefits, or characteristics that set a product apart from competitors and provide unique value to customers.',
    relatedTerms: ['Positioning', 'Unique Selling Proposition'],
  },
  {
    id: 'discovery-call',
    term: 'Discovery Call',
    definition:
      'An initial sales conversation focused on understanding a prospect\'s needs, pain points, goals, and buying process to qualify the opportunity.',
    relatedTerms: ['Sales Enablement', 'Talk Track'],
  },

  // E
  {
    id: 'early-adopter',
    term: 'Early Adopter',
    definition:
      'Customers who embrace new products before the majority of the market, often providing valuable feedback and serving as references.',
    relatedTerms: ['Beta Program', 'Product-Market Fit'],
  },
  {
    id: 'enterprise-sales',
    term: 'Enterprise Sales',
    definition:
      'The process of selling products or services to large organizations, typically involving longer sales cycles, multiple stakeholders, and higher contract values.',
    relatedTerms: ['B2B', 'Sales Cycle'],
  },

  // F
  {
    id: 'feature-benefit',
    term: 'Feature-Benefit Selling',
    definition:
      'A sales technique that connects product features to specific customer benefits, showing how capabilities solve problems or create value.',
    relatedTerms: ['Value Proposition', 'Sales Enablement'],
  },
  {
    id: 'feature-set',
    term: 'Feature Set',
    definition:
      'The collection of features and functionalities that make up a product, defining its capabilities and value proposition to customers.',
    relatedTerms: ['Product Differentiation', 'Product Roadmap'],
  },
  {
    id: 'funnel',
    term: 'Funnel',
    definition:
      'A model representing the customer journey stages from awareness to purchase, typically visualized as narrowing at each stage as prospects drop off.',
    relatedTerms: ['Top of Funnel', 'Bottom of Funnel', 'Sales Funnel'],
  },

  // G
  {
    id: 'gtm-strategy',
    term: 'Go-to-Market Strategy (GTM)',
    definition:
      'A comprehensive plan for launching a product or entering a market, including target audience, messaging, channels, pricing, and sales strategy.',
    relatedTerms: ['Product Launch', 'Market Segmentation'],
  },
  {
    id: 'growth-hacking',
    term: 'Growth Hacking',
    definition:
      'Innovative, low-cost marketing strategies aimed at achieving rapid growth, often using creative experimentation and data-driven tactics.',
    relatedTerms: ['Product-Led Growth', 'Viral Marketing'],
  },

  // H
  {
    id: 'hypothesis-testing',
    term: 'Hypothesis Testing',
    definition:
      'A method of testing assumptions about a product\'s market fit, features, or marketing strategies through controlled experiments and data analysis.',
    relatedTerms: ['A/B Testing', 'Market Research'],
  },

  // I
  {
    id: 'ideal-customer-profile',
    term: 'Ideal Customer Profile (ICP)',
    definition:
      'A description of the company or account type that would benefit most from your product, including firmographic attributes like industry, size, and technology stack.',
    relatedTerms: ['Buyer Persona', 'Target Market'],
  },
  {
    id: 'influencer-marketing',
    term: 'Influencer Marketing',
    definition:
      'Leveraging individuals with influence over a target audience (industry experts, social media personalities) to promote a product or service.',
    relatedTerms: ['Thought Leadership', 'Brand Awareness'],
  },

  // J
  {
    id: 'journey-mapping',
    term: 'Journey Mapping',
    definition:
      'Creating a visual representation of the customer\'s experience with a product or service, highlighting key touchpoints, pain points, and opportunities.',
    relatedTerms: ['Customer Journey', 'Customer Experience'],
  },

  // K
  {
    id: 'kpis',
    term: 'Key Performance Indicators (KPIs)',
    definition:
      'Specific, measurable metrics used to evaluate the success of a product, campaign, or marketing initiative against defined objectives.',
    relatedTerms: ['Metrics', 'ROI'],
  },

  // L
  {
    id: 'launch-tier',
    term: 'Launch Tier',
    definition:
      'A classification system (typically Tier 1, 2, 3) that determines the level of marketing investment and activities based on the strategic importance of a product release.',
    relatedTerms: ['Product Launch', 'Go-to-Market Strategy'],
  },
  {
    id: 'lead-generation',
    term: 'Lead Generation',
    definition:
      'The process of attracting and converting prospects into potential customers through content, advertising, events, or other marketing tactics.',
    relatedTerms: ['Demand Generation', 'Marketing Qualified Lead'],
  },
  {
    id: 'lead-nurturing',
    term: 'Lead Nurturing',
    definition:
      'Building relationships with potential customers by providing relevant information and guiding them through the sales funnel until they\'re ready to buy.',
    relatedTerms: ['Lead Generation', 'Marketing Automation'],
  },

  // M
  {
    id: 'market-landscape',
    term: 'Market Landscape',
    definition:
      'A comprehensive view of all players in a market segment, including direct competitors, adjacent solutions, and emerging disruptors.',
    relatedTerms: ['Competitive Intelligence', 'Market Research'],
  },
  {
    id: 'market-research',
    term: 'Market Research',
    definition:
      'The systematic gathering, analysis, and interpretation of data about a market, including customer needs, preferences, and competitor activities.',
    relatedTerms: ['Customer Research', 'Competitive Analysis'],
  },
  {
    id: 'market-segmentation',
    term: 'Market Segmentation',
    definition:
      'Dividing a broad market into smaller, distinct groups based on shared characteristics like demographics, behaviors, needs, or firmographics.',
    relatedTerms: ['Target Market', 'Ideal Customer Profile'],
  },
  {
    id: 'market-share',
    term: 'Market Share',
    definition:
      'The percentage of total sales in a market captured by a particular company or product, indicating competitive position.',
    relatedTerms: ['Total Addressable Market', 'Competitive Analysis'],
  },
  {
    id: 'marketing-mix',
    term: 'Marketing Mix (4Ps)',
    definition:
      'The combination of Product, Price, Place, and Promotion used to market a product effectively and reach target customers.',
    relatedTerms: ['Go-to-Market Strategy', 'Pricing Strategy'],
  },
  {
    id: 'marketing-qualified-lead',
    term: 'Marketing Qualified Lead (MQL)',
    definition:
      'A prospect who has shown interest through marketing interactions and meets criteria indicating they\'re more likely to become a customer.',
    relatedTerms: ['Sales Qualified Lead', 'Lead Generation'],
  },
  {
    id: 'messaging-framework',
    term: 'Messaging Framework',
    definition:
      'A structured document defining key messages, value propositions, proof points, and tone for consistent communication across all channels.',
    relatedTerms: ['Positioning', 'Value Proposition'],
  },
  {
    id: 'mofu',
    term: 'Middle of Funnel (MoFU)',
    definition:
      'The consideration stage where prospects evaluate solutions, compare options, and engage with more detailed content like case studies and demos.',
    relatedTerms: ['Sales Funnel', 'Top of Funnel', 'Bottom of Funnel'],
  },
  {
    id: 'monthly-recurring-revenue',
    term: 'Monthly Recurring Revenue (MRR)',
    definition:
      'The predictable revenue a company expects to receive every month from subscriptions, used to track growth and forecast revenue.',
    relatedTerms: ['Annual Recurring Revenue', 'SaaS Metrics'],
  },

  // N
  {
    id: 'net-promoter-score',
    term: 'Net Promoter Score (NPS)',
    definition:
      'A metric measuring customer loyalty by asking how likely customers are to recommend a product on a 0-10 scale, categorizing them as promoters, passives, or detractors.',
    relatedTerms: ['Customer Satisfaction', 'Voice of Customer'],
  },

  // O
  {
    id: 'objection-handling',
    term: 'Objection Handling',
    definition:
      'Prepared responses and strategies for addressing common buyer concerns, doubts, or pushback during the sales process.',
    relatedTerms: ['Battle Card', 'Sales Enablement'],
  },
  {
    id: 'omnichannel-marketing',
    term: 'Omnichannel Marketing',
    definition:
      'Providing a seamless and integrated customer experience across multiple channels, including online, mobile, social, and in-person touchpoints.',
    relatedTerms: ['Customer Journey', 'Marketing Mix'],
  },

  // P
  {
    id: 'positioning',
    term: 'Positioning',
    definition:
      'The strategic process of defining how a product or brand occupies a distinct place in the minds of target customers relative to competitors.',
    relatedTerms: ['Value Proposition', 'Messaging Framework'],
  },
  {
    id: 'pricing-strategy',
    term: 'Pricing Strategy',
    definition:
      'The method used to set product prices, considering factors like costs, competition, perceived value, and market positioning.',
    relatedTerms: ['Value-Based Pricing', 'Marketing Mix'],
  },
  {
    id: 'product-announcement',
    term: 'Product Announcement',
    definition:
      'Official communication of new products, features, or updates through press releases, blog posts, emails, and social media to generate awareness.',
    relatedTerms: ['Product Launch', 'Release Notes'],
  },
  {
    id: 'product-launch',
    term: 'Product Launch',
    definition:
      'The coordinated effort to introduce a new product or feature to the market, including internal enablement, external communications, and demand generation.',
    relatedTerms: ['Go-to-Market Strategy', 'Launch Tier'],
  },
  {
    id: 'product-led-growth',
    term: 'Product-Led Growth (PLG)',
    definition:
      'A business methodology where the product itself drives customer acquisition, conversion, and expansion through self-service and viral features.',
    relatedTerms: ['Growth Hacking', 'Freemium'],
  },
  {
    id: 'product-lifecycle',
    term: 'Product Lifecycle',
    definition:
      'The stages a product goes through from development to decline: introduction, growth, maturity, and decline, each requiring different marketing strategies.',
    relatedTerms: ['Product Roadmap', 'Go-to-Market Strategy'],
  },
  {
    id: 'product-market-fit',
    term: 'Product-Market Fit',
    definition:
      'The degree to which a product satisfies strong market demand, indicated by organic growth, high retention, and enthusiastic customer feedback.',
    relatedTerms: ['Value Proposition', 'Customer Research'],
  },
  {
    id: 'product-roadmap',
    term: 'Product Roadmap',
    definition:
      'A strategic plan outlining the vision, direction, priorities, and timeline of product development, shared with internal teams and stakeholders.',
    relatedTerms: ['Product Lifecycle', 'Feature Set'],
  },

  // Q
  {
    id: 'qualitative-research',
    term: 'Qualitative Research',
    definition:
      'Research methods like interviews and focus groups that provide insights into customer behavior, motivations, attitudes, and the "why" behind decisions.',
    relatedTerms: ['Quantitative Research', 'Customer Research'],
  },
  {
    id: 'quantitative-research',
    term: 'Quantitative Research',
    definition:
      'Research methods involving numerical data from surveys, analytics, and experiments to measure and quantify customer behavior and preferences.',
    relatedTerms: ['Qualitative Research', 'Market Research'],
  },

  // R
  {
    id: 'release-notes',
    term: 'Release Notes',
    definition:
      'Documentation communicating new features, improvements, and bug fixes to customers, typically published alongside product updates.',
    relatedTerms: ['Product Announcement', 'Changelog'],
  },
  {
    id: 'retention-rate',
    term: 'Retention Rate',
    definition:
      'The percentage of customers who continue using a product or service over a specific period, indicating customer satisfaction and loyalty.',
    relatedTerms: ['Churn Rate', 'Customer Lifetime Value'],
  },
  {
    id: 'roi',
    term: 'Return on Investment (ROI)',
    definition:
      'A measure of the profitability of an investment or campaign, calculated as net profit divided by the cost of the investment.',
    relatedTerms: ['KPIs', 'Customer Acquisition Cost'],
  },

  // S
  {
    id: 'saas',
    term: 'Software as a Service (SaaS)',
    definition:
      'A software distribution model where applications are hosted in the cloud and accessed via subscription, rather than installed locally.',
    relatedTerms: ['Monthly Recurring Revenue', 'Annual Recurring Revenue'],
  },
  {
    id: 'sales-cycle',
    term: 'Sales Cycle',
    definition:
      'The process and timeline from first contact with a prospect to closing the deal, varying in length based on product complexity and deal size.',
    relatedTerms: ['Sales Funnel', 'Enterprise Sales'],
  },
  {
    id: 'sales-deck',
    term: 'Sales Deck',
    definition:
      'A presentation used by sales teams to introduce the company, explain product value, address objections, and guide prospects through the buying journey.',
    relatedTerms: ['Sales Enablement', 'Value Proposition'],
  },
  {
    id: 'sales-enablement',
    term: 'Sales Enablement',
    definition:
      'The process of providing sales teams with the content, tools, training, and information they need to effectively engage buyers and close deals.',
    relatedTerms: ['Battle Card', 'Sales Playbook'],
  },
  {
    id: 'sales-funnel',
    term: 'Sales Funnel',
    definition:
      'The journey potential customers go through from initial awareness to making a purchase, with stages like awareness, interest, decision, and action.',
    relatedTerms: ['Customer Journey', 'Conversion Rate'],
  },
  {
    id: 'sales-playbook',
    term: 'Sales Playbook',
    definition:
      'A comprehensive guide documenting sales processes, best practices, talk tracks, objection handling, and resources to standardize selling motions.',
    relatedTerms: ['Sales Enablement', 'Talk Track'],
  },
  {
    id: 'sales-qualified-lead',
    term: 'Sales Qualified Lead (SQL)',
    definition:
      'A prospect who has been vetted by both marketing and sales, demonstrating clear intent and readiness to have a sales conversation.',
    relatedTerms: ['Marketing Qualified Lead', 'Lead Generation'],
  },
  {
    id: 'segmentation',
    term: 'Segmentation',
    definition:
      'The process of dividing customers or markets into groups based on shared characteristics for more targeted and effective marketing.',
    relatedTerms: ['Market Segmentation', 'Target Audience'],
  },
  {
    id: 'social-proof',
    term: 'Social Proof',
    definition:
      'Evidence that others have purchased, used, and valued a product, including reviews, testimonials, logos, and user counts that influence buying decisions.',
    relatedTerms: ['Testimonial', 'Case Study'],
  },
  {
    id: 'swot-analysis',
    term: 'SWOT Analysis',
    definition:
      'A strategic planning framework identifying Strengths, Weaknesses, Opportunities, and Threats to evaluate competitive position and inform strategy.',
    relatedTerms: ['Competitive Analysis', 'Market Research'],
  },

  // T
  {
    id: 'talk-track',
    term: 'Talk Track',
    definition:
      'A scripted or semi-scripted conversation guide helping sales reps communicate value propositions and navigate discovery calls consistently.',
    relatedTerms: ['Sales Playbook', 'Objection Handling'],
  },
  {
    id: 'target-audience',
    term: 'Target Audience',
    definition:
      'The specific group of people a product or marketing campaign is designed to reach and appeal to, defined by demographics, behaviors, and needs.',
    relatedTerms: ['Buyer Persona', 'Market Segmentation'],
  },
  {
    id: 'testimonial',
    term: 'Testimonial',
    definition:
      'A quote or statement from a satisfied customer endorsing a product, used to build trust and credibility with prospects.',
    relatedTerms: ['Social Proof', 'Case Study'],
  },
  {
    id: 'thought-leadership',
    term: 'Thought Leadership',
    definition:
      'Content and activities that establish a person or company as an authority in their field by sharing unique insights, expertise, and forward-thinking perspectives.',
    relatedTerms: ['Content Marketing', 'Brand Positioning'],
  },
  {
    id: 'time-to-value',
    term: 'Time-to-Value',
    definition:
      'A metric measuring how quickly a new customer can realize the benefits and value from a product after purchase or signup.',
    relatedTerms: ['Customer Onboarding', 'Product-Led Growth'],
  },
  {
    id: 'tofu',
    term: 'Top of Funnel (ToFU)',
    definition:
      'The awareness stage of the customer journey focused on attracting prospects through educational content, brand awareness, and lead generation.',
    relatedTerms: ['Sales Funnel', 'Middle of Funnel', 'Demand Generation'],
  },
  {
    id: 'total-addressable-market',
    term: 'Total Addressable Market (TAM)',
    definition:
      'The total revenue opportunity available if a product achieved 100% market share, used to assess market size and growth potential.',
    relatedTerms: ['Serviceable Addressable Market', 'Market Share'],
  },

  // U
  {
    id: 'unique-selling-proposition',
    term: 'Unique Selling Proposition (USP)',
    definition:
      'The single most compelling reason why a product is different and better than competitors, forming the core of marketing communications.',
    relatedTerms: ['Value Proposition', 'Differentiation'],
  },
  {
    id: 'user-experience',
    term: 'User Experience (UX)',
    definition:
      'How a user experiences and interacts with a product, encompassing usability, accessibility, efficiency, and overall satisfaction.',
    relatedTerms: ['User Interface', 'Customer Journey'],
  },
  {
    id: 'user-interface',
    term: 'User Interface (UI)',
    definition:
      'The visual elements and interactive components through which a user interacts with a product, including screens, buttons, and navigation.',
    relatedTerms: ['User Experience', 'Product Design'],
  },

  // V
  {
    id: 'value-based-pricing',
    term: 'Value-Based Pricing',
    definition:
      'A pricing strategy that sets prices based on the perceived value to the customer rather than cost or competitor pricing.',
    relatedTerms: ['Pricing Strategy', 'Value Proposition'],
  },
  {
    id: 'value-proposition',
    term: 'Value Proposition',
    definition:
      'A clear statement explaining how a product solves customer problems, delivers benefits, and why customers should choose it over alternatives.',
    relatedTerms: ['Positioning', 'Unique Selling Proposition'],
  },
  {
    id: 'viral-marketing',
    term: 'Viral Marketing',
    definition:
      'Marketing techniques that use social networks and word-of-mouth to increase brand awareness rapidly through shareable, engaging content.',
    relatedTerms: ['Growth Hacking', 'Social Proof'],
  },
  {
    id: 'voice-of-customer',
    term: 'Voice of Customer (VoC)',
    definition:
      'The process of capturing customer feedback, expectations, preferences, and pain points to improve products and customer experience.',
    relatedTerms: ['Customer Research', 'Net Promoter Score'],
  },

  // W
  {
    id: 'white-paper',
    term: 'White Paper',
    definition:
      'An authoritative report or guide that informs readers about a complex issue, presents research, and helps them understand a problem or make a decision.',
    relatedTerms: ['Content Marketing', 'Thought Leadership'],
  },
  {
    id: 'win-loss-analysis',
    term: 'Win/Loss Analysis',
    definition:
      'A systematic review of closed deals (won and lost) to understand factors that influenced buying decisions and improve sales and marketing strategies.',
    relatedTerms: ['Competitive Intelligence', 'Sales Enablement'],
  },

  // Y
  {
    id: 'yield-management',
    term: 'Yield Management',
    definition:
      'Strategies to maximize revenue by dynamically adjusting pricing and inventory based on demand, commonly used in industries with fixed capacity.',
    relatedTerms: ['Pricing Strategy', 'Revenue Optimization'],
  },

  // Z
  {
    id: 'zmot',
    term: 'Zero Moment of Truth (ZMOT)',
    definition:
      'The stage in the buying cycle where customers research products online before making a purchase decision, heavily influencing their final choice.',
    relatedTerms: ['Customer Journey', 'Content Marketing'],
  },
]

