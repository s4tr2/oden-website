export interface BlogPost {
  slug: string
  title: string
  metaTitle?: string
  excerpt: string
  content?: string
  date: string
  tags: string[]
  category: string  // Blog category (e.g., "Comparison") - different from tags
  featured?: boolean
  thumbnail?: string  // Optional path to blog thumbnail image (e.g., "/blog/thumbnails/post-name.jpg")
}

export interface Template {
  slug: string
  title: string
  excerpt: string
  content?: string
  date: string
  tags: string[]
  templateFile: string  // Path to downloadable file (e.g., "/templates/win-loss-analysis.xlsx")
}

export interface PricingPlan {
  name: string
  price: number
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

export interface Feature {
  title: string
  description: string
  icon: string
  benefits: string[]
}
