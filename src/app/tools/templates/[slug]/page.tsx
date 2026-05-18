import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getTemplateBySlug, getAllTemplates } from "@/lib/templates";
import { TemplateDownloadCTA } from "@/components/template-download-cta";
import { slugify } from "@/lib/utils";
import React from "react";

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

interface TemplatePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const templates = getAllTemplates();
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    return {
      title: "Template Not Found",
    };
  }

  return {
    title: template.title,
    description: template.excerpt,
    alternates: {
      canonical: `https://getoden.com/tools/templates/${slug}`,
    },
    openGraph: {
      title: `${template.title} | Oden`,
      description: template.excerpt,
      type: "article",
      url: `https://getoden.com/tools/templates/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${template.title} | Oden`,
      description: template.excerpt,
    },
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  return (
    <div className="bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-20 lg:px-0 lg:py-28">
        <header className="space-y-6 mb-12">
          <p className="text-sm uppercase tracking-[0.5em] text-gray-500">
            Tools / Templates
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {template.title}
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl">
              {template.excerpt}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {template.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-gray max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => {
                const id = slugify(extractTextFromChildren(children));
                return (
                  <h1 id={id} className="text-3xl font-bold text-gray-900 mt-12 mb-6 leading-tight scroll-mt-24">{children}</h1>
                );
              },
              h2: ({ children }) => {
                const id = slugify(extractTextFromChildren(children));
                return (
                  <h2 id={id} className="text-2xl font-bold text-gray-900 mt-10 mb-5 leading-tight scroll-mt-24">{children}</h2>
                );
              },
              h3: ({ children }) => {
                const id = slugify(extractTextFromChildren(children));
                return (
                  <h3 id={id} className="text-xl font-semibold text-gray-900 mt-8 mb-4 leading-snug scroll-mt-24">{children}</h3>
                );
              },
              h4: ({ children }) => {
                const id = slugify(extractTextFromChildren(children));
                return (
                  <h4 id={id} className="text-lg font-semibold text-gray-900 mt-6 mb-3 leading-snug scroll-mt-24">{children}</h4>
                );
              },
              p: ({ children }) => (
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6 space-y-2 pl-4">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-gray-700 text-lg leading-relaxed mb-6 space-y-2 pl-4">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-700">{children}</li>
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
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-900">{children}</strong>
              ),
            }}
          >
            {template.content || ""}
          </ReactMarkdown>
        </div>

        {/* Download CTA at bottom */}
        <div className="mt-12">
          <TemplateDownloadCTA
            templateFile={template.templateFile}
            templateTitle={template.title.replace(' Template', '')}
            templateSlug={slug}
          />
        </div>
      </div>
    </div>
  );
}

