import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Oden's leadership team and learn how we are building the operating system for product marketing.",
  alternates: {
    canonical: "https://getoden.com/about",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const principles = [
  "Compounding over resets: every signal and artifact should make the next PMM motion sharper.",
  "Authored truth over generic output: PMM owns the company's story, with every claim backed by sources.",
  "Current outputs over static docs: decks, battle cards, launch copy, and internal answers should flow from one living foundation.",
];

const leaders = [
  {
    name: "Shubham Bhatt",
    role: "Chief Executive Officer",
    summary:
      "Product and content-oriented operator focused on storytelling, distribution, and customer outcomes.",
    href: "https://www.linkedin.com/in/shubham-bhatt/",
  },
  {
    name: "Mohit Garg",
    role: "Chief Technology Officer",
    summary:
      "Product engineer focused on solving high-impact problems and turning complex workflows into reliable systems.",
    href: "https://www.linkedin.com/in/mohitgargai/",
  },
];

function LeaderCard({
  name,
  role,
  summary,
  href,
}: {
  name: string;
  role: string;
  summary: string;
  href: string;
}) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
      <p className="text-sm font-medium text-primary-600 mb-2">{role}</p>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-balance">{name}</h3>
      <p className="text-gray-700 leading-7 mb-6 text-pretty">{summary}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
      >
        View LinkedIn
        <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}

export default function AboutPage() {
  notFound();
  return (
    <div className="bg-white">
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary-600 mb-4">
              About Oden
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-balance">
              Building the operating system for product marketing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
              Oden helps PMM teams move from scattered research and one-off docs to one sourced foundation for positioning, GTM, sales enablement, and content.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-balance">How we build</h2>
              <ul className="space-y-3">
                {principles.map((principle) => (
                  <li key={principle} className="flex items-baseline gap-2 text-gray-700 leading-7">
                    <span className="text-primary-500 text-lg">•</span>
                    <span className="text-pretty">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership</h2>
            <div className="space-y-8">
              {leaders.map((leader) => (
                <LeaderCard key={leader.name} {...leader} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-balance">Want to work with us?</h2>
            <p className="text-gray-600 mb-6 text-pretty">
              If you are building GTM with a lean team, we would love to show how Oden fits your workflow.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
              >
                View pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:founders@getoden.com"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                founders@getoden.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
