import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getPostBySlug, getAllPosts, extractHeadings } from "@/lib/blog";
import { TableOfContents } from "@/components/table-of-contents";
import { MetadataAccordion } from "@/components/metadata-accordion";
import { MetadataAccordionDesktop } from "@/components/metadata-accordion-desktop";
import { slugify } from "@/lib/utils";
import { CopyableCodeBlock } from "@/components/copyable-code-block";
import { TrackedLink } from "@/components/tracked-link";
import React from "react";

// Helper function to convert CSS style string to React style object
function parseStyleString(styleString: string): React.CSSProperties {
  if (!styleString || typeof styleString !== 'string') {
    return {};
  }

  const styles: Record<string, string> = {};
  const declarations = styleString.split(';').filter(decl => decl.trim());

  for (const declaration of declarations) {
    const [property, value] = declaration.split(':').map(s => s.trim());
    if (property && value) {
      // Convert kebab-case to camelCase
      const camelProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styles[camelProperty] = value;
    }
  }

  return styles as React.CSSProperties;
}

// Helper function to extract text from React children
function extractTextFromChildren(children: React.ReactNode): string {
  if (typeof children === 'string') {
    return children;
  }
  if (typeof children === 'number') {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join('');
  }
  if (React.isValidElement(children)) {
    const props = children.props as { children?: React.ReactNode };
    return extractTextFromChildren(props.children);
  }
  return '';
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Blog Media Features Documentation
 * 
 * This blog system supports both images and YouTube video embedding through standard markdown.
 * 
 * --- IMAGES ---
 * 1. Place your image in: /public/blog/images/your-image.jpg
 * 2. Reference in markdown: ![Alt text describing image](/blog/images/your-image.jpg)
 * 
 * Images will automatically be displayed with:
 * - Responsive sizing (full width)
 * - Rounded corners with shadow
 * - Lazy loading for performance
 * - Caption below (from alt text)
 * 
 * Example in markdown:
 * ![Dashboard showing analytics](/blog/images/dashboard-screenshot.png)
 * 
 * --- YOUTUBE VIDEOS ---
 * Simply paste the YouTube URL on its own line (with blank lines before/after).
 * 
 * Supported formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * 
 * Example in markdown:
 * 
 * Check out this video:
 * 
 * https://www.youtube.com/watch?v=dQw4w9WgXcQ
 * 
 * More content here...
 * 
 * Videos will automatically embed as:
 * - Responsive iframe (16:9 aspect ratio)
 * - Rounded corners
 * - Full YouTube player functionality
 * 
 * --- THUMBNAILS (OPTIONAL) ---
 * Add a thumbnail to your blog post frontmatter:
 * ---
 * title: "Your Post Title"
 * thumbnail: "/blog/thumbnails/post-image.jpg"
 * ---
 */

// Helper function to detect YouTube URLs and extract video ID
function extractYouTubeId(url: string): string | null {
  // Match patterns:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - http://www.youtube.com/watch?v=VIDEO_ID
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

// Helper function to check if a string is a YouTube URL
function isYouTubeUrl(text: string): boolean {
  const trimmed = text.trim();
  return /^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)/.test(trimmed);
}

// ============================================
// BLOG POST SEO METADATA (DYNAMIC)
// ============================================
// Individual blog post metadata is automatically generated from:
// - Post title (from markdown frontmatter)
// - Post excerpt/description (from markdown frontmatter)
// - Post tags (from markdown frontmatter)
// - Post URL: /blog/[post-slug]
//
// To edit: Update the frontmatter in your .md file
// ============================================

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Page Not Found",
      robots: { index: false, follow: false },
    };
  }

  const seoTitle = post.metaTitle || post.title;

  return {
    title: seoTitle,
    description: post.excerpt,
    alternates: {
      canonical: `https://getoden.com/blog/${slug}`,
    },
    openGraph: {
      title: `${seoTitle} | Oden`,
      description: post.excerpt,
      type: "article",
      url: `https://getoden.com/blog/${slug}`,
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${seoTitle} | Oden`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content || "");

  // Structured data for Article with breadcrumbs
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://getoden.com/blog/${slug}#article`,
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "dateModified": post.date,
        "publisher": {
          "@type": "Organization",
          "name": "Oden",
          "url": "https://getoden.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://getoden.com/logo.png"
          }
        },
        "keywords": post.tags.join(", "),
        "articleSection": "Product Marketing",
        "inLanguage": "en-US",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://getoden.com/blog/${slug}`
        },
        "isPartOf": {
          "@type": "Blog",
          "@id": "https://getoden.com/blog#blog",
          "name": "Oden Blog"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://getoden.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://getoden.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://getoden.com/blog/${slug}`
          }
        ]
      }
    ]
  };

  // Format date like "2025.9.11"
  const formatDateDots = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      {/* Mobile: Stacked Layout */}
      <div className="lg:hidden max-w-6xl mx-auto px-6 md:px-12 py-8 sm:py-12">
        {/* Main Title */}
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            {post.title}
          </h1>
        </div>

        {/* Table of Contents */}
        <TableOfContents headings={headings} />

        {/* Metadata Section */}
        <MetadataAccordion
          date={post.date}
          formattedDate={formatDateDots(post.date)}
          tags={post.tags}
          slug={slug}
          title={post.title}
        />

        {/* Article Content */}
        <div>
          <h2 className="text-xs font-semibold text-gray-500 tracking-wide mb-3">/ Article</h2>
          <div className="border-b border-gray-200 mb-6"></div>

          <div className="prose prose-gray max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({ children }) => {
                  const id = slugify(extractTextFromChildren(children));
                  return (
                    <h1 id={id} className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 sm:mt-12 mb-5 sm:mb-6 leading-tight scroll-mt-24">{children}</h1>
                  );
                },
                h2: ({ children }) => {
                  const id = slugify(extractTextFromChildren(children));
                  return (
                    <h2 id={id} className="text-lg sm:text-xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-5 leading-tight scroll-mt-24">{children}</h2>
                  );
                },
                h3: ({ children }) => {
                  const id = slugify(extractTextFromChildren(children));
                  return (
                    <h3 id={id} className="text-base sm:text-lg font-semibold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4 leading-snug scroll-mt-24">{children}</h3>
                  );
                },
                h4: ({ children }) => {
                  const id = slugify(extractTextFromChildren(children));
                  return (
                    <h4 id={id} className="text-sm font-semibold text-gray-900 mt-5 sm:mt-6 mb-2 sm:mb-3 leading-snug scroll-mt-24">{children}</h4>
                  );
                },
                // Custom paragraph component that auto-embeds YouTube URLs
                p: ({ node, children }) => {
                  // Check if paragraph has a single child that's a link
                  if (node && node.children && node.children.length === 1) {
                    const child = node.children[0];
                    // Check if it's a link element
                    if (child.type === 'element' && child.tagName === 'a' && child.properties) {
                      const href = child.properties.href as string;
                      if (href && isYouTubeUrl(href)) {
                        const videoId = extractYouTubeId(href);
                        if (videoId) {
                          return (
                            <div className="relative w-full my-8" style={{ paddingBottom: '56.25%' }}>
                              <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          );
                        }
                      }
                    }
                  }

                  return <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">{children}</p>;
                },
                // Custom image component with responsive styling
                img: ({ src, alt }) => {
                  if (!src) return null;
                  return (
                    <span className="block my-8">
                      <img
                        src={src}
                        alt={alt || ''}
                        className="w-full h-auto rounded-lg shadow-md"
                        loading="lazy"
                      />
                      {alt && (
                        <span className="block text-center text-sm text-gray-500 mt-2">
                          {alt}
                        </span>
                      )}
                    </span>
                  );
                },
                ul: ({ children }) => (
                  <ul className="list-disc list-outside text-gray-700 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 space-y-2 pl-6">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-outside text-gray-700 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 space-y-2 pl-6">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-700">{children}</li>
                ),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                div: ({ node, children, ...props }: any) => {
                  // Allow div elements to render with their HTML attributes
                  if (node?.properties) {
                    const properties = { ...node.properties };
                    // Convert style string to React style object
                    if (typeof properties.style === 'string') {
                      properties.style = parseStyleString(properties.style);
                    }
                    // Convert class to className for React
                    if (properties.class && !properties.className) {
                      properties.className = properties.class;
                      delete properties.class;
                    }
                    return <div {...properties}>{children}</div>;
                  }
                  return <div {...props}>{children}</div>;
                },
                code: ({ node, children }) => {
                  const isBlock = node?.position && node.position.start.line !== node.position.end.line || (typeof children === 'string' && children.includes('\n'));
                  if (isBlock) {
                    return <code className="text-inherit bg-transparent p-0">{children}</code>;
                  }
                  return (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-sans text-gray-800">
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <CopyableCodeBlock>{children}</CopyableCodeBlock>
                ),
                a: ({ href, children }) => {
                  if (href?.includes('app.getoden.com/signup')) {
                    return (
                      <TrackedLink
                        href={href}
                        slug={slug}
                        className="text-primary-600 hover:text-primary-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </TrackedLink>
                    );
                  }
                  return (
                    <a
                      href={href}
                      className="text-primary-600 hover:text-primary-500 underline"
                      target={href?.startsWith('http') ? '_blank' : undefined}
                      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  );
                },
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary-200 pl-4 text-gray-600 my-6">
                    {children}
                  </blockquote>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto my-6 sm:my-8 -mx-4 sm:-mx-0">
                    <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                      <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
                        {children}
                      </table>
                    </div>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-gray-50">
                    {children}
                  </thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {children}
                  </tbody>
                ),
                tr: ({ children }) => (
                  <tr>
                    {children}
                  </tr>
                ),
                th: ({ children }) => (
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-900">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700">
                    {children}
                  </td>
                ),
              }}
            >
              {post.content || ""}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Desktop: Two-Column Layout */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-6xl px-6 md:px-12 py-16">
          {/* Main Title */}
          <div className="mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-medium tracking-tight text-gray-900">
              {post.title}
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-12">
            {/* Left Sidebar - Metadata */}
            <aside className="col-span-3">
              <div className="sticky top-24">
                <TableOfContents headings={headings} />

                <MetadataAccordionDesktop
                  date={post.date}
                  formattedDate={formatDateDots(post.date)}
                  tags={post.tags}
                  slug={slug}
                  title={post.title}
                  category={post.category}
                />
              </div>
            </aside>

            {/* Main Content Area - Article */}
            <main className="col-span-9">
              <article>
                <h2 className="text-xs font-semibold text-gray-500 tracking-wide mb-3">/ Article</h2>
                <div className="border-b border-gray-200 mb-6"></div>

                <div className="prose prose-gray max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      h1: ({ children }) => {
                        const id = slugify(extractTextFromChildren(children));
                        return (
                          <h1 id={id} className="text-2xl font-bold text-gray-900 mt-12 mb-6 leading-tight scroll-mt-24">{children}</h1>
                        );
                      },
                      h2: ({ children }) => {
                        const id = slugify(extractTextFromChildren(children));
                        return (
                          <h2 id={id} className="text-xl font-bold text-gray-900 mt-10 mb-5 leading-tight scroll-mt-24">{children}</h2>
                        );
                      },
                      h3: ({ children }) => {
                        const id = slugify(extractTextFromChildren(children));
                        return (
                          <h3 id={id} className="text-lg font-semibold text-gray-900 mt-8 mb-4 leading-snug scroll-mt-24">{children}</h3>
                        );
                      },
                      h4: ({ children }) => {
                        const id = slugify(extractTextFromChildren(children));
                        return (
                          <h4 id={id} className="text-base font-semibold text-gray-900 mt-6 mb-3 leading-snug scroll-mt-24">{children}</h4>
                        );
                      },
                      // Custom paragraph component that auto-embeds YouTube URLs
                      p: ({ node, children }) => {
                        // Check if paragraph has a single child that's a link
                        if (node && node.children && node.children.length === 1) {
                          const child = node.children[0];
                          // Check if it's a link element
                          if (child.type === 'element' && child.tagName === 'a' && child.properties) {
                            const href = child.properties.href as string;
                            if (href && isYouTubeUrl(href)) {
                              const videoId = extractYouTubeId(href);
                              if (videoId) {
                                return (
                                  <div className="relative w-full my-8" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                                      src={`https://www.youtube.com/embed/${videoId}`}
                                      title="YouTube video player"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    />
                                  </div>
                                );
                              }
                            }
                          }
                        }

                        return <p className="text-gray-700 text-base leading-relaxed mb-6">{children}</p>;
                      },
                      // Custom image component with responsive styling
                      img: ({ src, alt }) => {
                        if (!src) return null;
                        return (
                          <span className="block my-8">
                            <img
                              src={src}
                              alt={alt || ''}
                              className="w-full h-auto rounded-lg shadow-md"
                              loading="lazy"
                            />
                            {alt && (
                              <span className="block text-center text-sm text-gray-500 mt-2">
                                {alt}
                              </span>
                            )}
                          </span>
                        );
                      },
                      ul: ({ children }) => (
                        <ul className="list-disc list-outside text-gray-700 text-base leading-relaxed mb-6 space-y-2 pl-6">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-outside text-gray-700 text-base leading-relaxed mb-6 space-y-2 pl-6">{children}</ol>
                      ),
                      li: ({ children }) => (
                        <li className="text-gray-700">{children}</li>
                      ),
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      div: ({ node, children, ...props }: any) => {
                        // Allow div elements to render with their HTML attributes
                        if (node?.properties) {
                          const properties = { ...node.properties };
                          // Convert style string to React style object
                          if (typeof properties.style === 'string') {
                            properties.style = parseStyleString(properties.style);
                          }
                          // Convert class to className for React
                          if (properties.class && !properties.className) {
                            properties.className = properties.class;
                            delete properties.class;
                          }
                          return <div {...properties}>{children}</div>;
                        }
                        return <div {...props}>{children}</div>;
                      },
                      code: ({ children }) => (
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-sans text-gray-800">
                          {children}
                        </code>
                      ),
                      pre: ({ children }) => (
                        <CopyableCodeBlock>{children}</CopyableCodeBlock>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-primary-600 hover:text-primary-500 underline"
                          target={href?.startsWith('http') ? '_blank' : undefined}
                          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {children}
                        </a>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary-200 pl-4 text-gray-600 my-6">
                          {children}
                        </blockquote>
                      ),
                      table: ({ children }) => (
                        <div className="overflow-x-auto my-8">
                          <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
                            {children}
                          </table>
                        </div>
                      ),
                      tr: ({ children }) => (
                        <tr>
                          {children}
                        </tr>
                      ),
                      th: ({ children }) => (
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {children}
                        </td>
                      ),
                    }}
                  >
                    {post.content || ""}
                  </ReactMarkdown>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
