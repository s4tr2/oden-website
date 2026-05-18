# Oden Website

A modern, responsive website for Oden - the Product Marketing Platform that deploys specialized AI agents across Sales, Positioning, GTM, and Content. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring a design inspired by cursor.com in light mode.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by cursor.com in light mode
- **Responsive**: Fully responsive across all devices and screen sizes
- **SEO Optimized**: Comprehensive SEO with meta tags, structured data, sitemap, and robots.txt
- **Blog System**: Markdown-powered blog with dynamic routing
- **Performance**: Optimized for speed with code splitting and image optimization
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: WCAG compliant with proper focus management and semantic HTML

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages and dynamic routes
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap generation
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   └── ui/               # UI components
├── data/                 # Static data
│   └── blog/            # Markdown blog posts
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
└── styles/               # Additional styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Markdown**: react-markdown with remark-gfm
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## 📝 Blog System

The blog system supports:
- Markdown files with frontmatter
- Dynamic routing with `[slug]`
- SEO-optimized meta tags
- Tag system
- Featured posts
- Responsive design

### Adding Blog Posts

1. Create a new `.md` file in `src/data/blog/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Your Post Title"
   excerpt: "Brief description"
   date: "2024-01-15"
   author: "Author Name"
   tags: ["tag1", "tag2"]
   featured: true
   ---
   ```
3. Write your content in Markdown
4. The post will automatically appear in the blog

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9)
- **Secondary**: Gray (#64748b)
- **Accent**: Yellow (#facc15)
- **Background**: White (#ffffff)
- **Foreground**: Dark slate (#0f172a)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono
- **Responsive**: Scales appropriately across devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd agents-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

- **Homepage** (`/`): Hero section, features overview, pricing, CTA
- **Features** (`/features`): Detailed feature descriptions
- **Pricing** (`/pricing`): Pricing plans and tiers
- **Blog** (`/blog`): Blog listing page
- **Blog Post** (`/blog/[slug]`): Individual blog posts
- **Privacy Policy** (`/privacy`): Privacy policy and data handling
- **Terms of Service** (`/terms`): Legal terms and conditions

## 🔍 SEO Features

- **Meta Tags**: Dynamic meta tags for all pages
- **Structured Data**: JSON-LD structured data for better search visibility
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing

## ⚡ Performance

- **Code Splitting**: Automatic code splitting by Next.js
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Font Optimization**: Google Fonts with display=swap
- **Compression**: Gzip compression enabled
- **Caching**: Static asset caching headers

## 🎯 Programmatic SEO Ready

The website is structured to support programmatic SEO:
- Dynamic page generation
- Structured data implementation
- Scalable content management
- SEO-friendly URLs
- Meta tag automation

## 📄 License

This project is proprietary software for Oden.

## 🤝 Contributing

This is a private project. For internal development, follow the established patterns and maintain code quality standards.

## 📞 Support

For questions or support, contact the development team.
