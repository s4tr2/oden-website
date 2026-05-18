import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { BlogCategoryFilter } from "@/components/blog-category-filter";

// ============================================
// PAGE SEO METADATA
// ============================================
// Page Title: Shown in browser tab and search results
// Page Description: Shown in search results (150-160 characters recommended)
// Page URL: /blog
// ============================================

export const metadata: Metadata = {
  title: "Product Marketing Blog",
  description: "Expert guides on product marketing, competitive intelligence, GTM strategy, and PMM best practices. Comparisons and actionable insights.",
  alternates: {
    canonical: 'https://getoden.com/blog',
  },
  openGraph: {
    title: "Product Marketing Blog | Oden",
    description: "Expert guides on product marketing, competitive intelligence, GTM strategy, and PMM best practices. Comparisons and actionable insights.",
    url: 'https://getoden.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Product Marketing Blog | Oden",
    description: "Expert guides on product marketing, competitive intelligence, GTM strategy, and PMM best practices.",
  },
};

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const selectedCategory = params.category || null;

  const allPosts = getAllPosts();
  const categories = getAllCategories();

  // Filter posts by category if one is selected
  const posts = selectedCategory
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts;

  // Structured data for blog listing
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Oden Blog",
    "description": "Expert guides on product marketing, competitive intelligence, GTM strategy, and PMM best practices.",
    "url": "https://getoden.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Oden",
      "url": "https://getoden.com"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "url": `https://getoden.com/blog/${post.slug}`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://getoden.com/blog/${post.slug}`
      }
    }))
  };

  // Format date like "Nov 3, 2025"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />

      {/* Mobile: Stacked Layout */}
      <div className="lg:hidden px-4 sm:px-6 py-8 sm:py-12">
        {/* Blog Header */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-8">
          Blog
        </h1>

        {/* Category Filter */}
        <BlogCategoryFilter
          posts={allPosts}
          categories={categories}
          selectedCategory={selectedCategory}
        />

        {/* Blog List */}
        <div>
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group flex flex-col gap-2 py-5 hover:bg-gray-50 transition-colors px-4 -mx-4 ${index !== 0 ? 'border-t border-gray-100' : ''
                }`}
            >
              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h2>

              {/* Category chip and date */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                  {post.category}
                </span>
                <time
                  dateTime={post.date}
                  className="text-sm text-gray-500 font-sans"
                >
                  {formatDate(post.date)}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop: Two-Column Layout */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-8 py-16">
          {/* Blog Header */}
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900 mb-16">
            Blog
          </h1>

          <div className="grid grid-cols-12 gap-12">
            {/* Left Sidebar - Category Filter */}
            <aside className="col-span-3">
              <div className="sticky top-24">
                <BlogCategoryFilter
                  posts={allPosts}
                  categories={categories}
                  selectedCategory={selectedCategory}
                />
              </div>
            </aside>

            {/* Right Content - Blog List */}
            <main className="col-span-9">
              <h2 className="text-xs font-semibold text-gray-500 tracking-wide mb-3">/ Articles</h2>
              <div className="border-b border-gray-200 mb-6"></div>

              <div>
                {posts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`group flex items-baseline gap-6 py-5 hover:bg-gray-50 transition-colors px-4 sm:px-6 -mx-4 sm:-mx-6 ${index !== 0 ? 'border-t border-gray-100' : ''
                      }`}
                  >
                    {/* Date */}
                    <time
                      dateTime={post.date}
                      className="text-sm text-gray-500 flex-shrink-0 font-sans w-32"
                    >
                      {formatDate(post.date)}
                    </time>

                    {/* Title and Category */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1.5">
                        {post.title}
                      </h3>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
