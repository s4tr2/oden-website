import type { Metadata } from "next";
import { MapPin, Briefcase, ArrowRight, DollarSign } from "lucide-react";

const CAREERS_LAST_UPDATED = '2025-12-01'

function getValidThrough(postedDate: string): string {
  const date = new Date(postedDate)
  date.setDate(date.getDate() + 90)
  return date.toISOString().split('T')[0]
}

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Oden and help build the future of product marketing. We're a seed-stage startup in San Francisco hiring Founding Engineers and sales leaders.",
  alternates: {
    canonical: 'https://getoden.com/careers',
  },
  openGraph: {
    title: "Careers | Oden",
    description: "Join Oden and help build the future of product marketing. We're a seed-stage startup in San Francisco hiring Founding Engineers and sales leaders.",
    url: 'https://getoden.com/careers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Careers | Oden",
    description: "Join Oden and help build the future of product marketing. We're a seed-stage startup in San Francisco hiring Founding Engineers and sales leaders.",
  },
};

interface Role {
  title: string;
  location: string;
  type: string;
  salary: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
  emailSubject: string;
}

const roles: Role[] = [
  {
    title: "Founding Engineer",
    location: "San Francisco",
    type: "Full-time",
    salary: "$150k – $200k",
    salaryMin: 150000,
    salaryMax: 200000,
    description: "As a Founding Engineer, you'll shape the technical foundation of Oden from the ground up. You'll work directly with the founders to build AI-powered tools that transform how product marketers work.",
    responsibilities: [
      "Design and build core product features from conception to deployment",
      "Make foundational architecture decisions that scale with the company",
      "Develop AI/ML pipelines for content generation and buyer intelligence",
      "Own full-stack development across our web application",
      "Collaborate closely with founders on product direction and technical strategy",
    ],
    requirements: [
      "4+ years of full-stack software engineering experience",
      "Experience with AI/ML systems or eagerness to learn quickly",
      "Startup mentality: bias for action, comfort with ambiguity",
      "Excellent problem-solving skills and attention to detail",
    ],
    emailSubject: "Application: Founding Engineer",
  },
  {
    title: "Head of Sales",
    location: "San Francisco",
    type: "Full-time",
    salary: "$150k – $200k",
    salaryMin: 150000,
    salaryMax: 200000,
    description: "As Head of Sales, you'll build and lead our go-to-market motion from scratch. You'll be the voice of the customer, driving revenue while shaping how we position and sell Oden to product marketing teams.",
    responsibilities: [
      "Build the sales function from the ground up",
      "Develop and execute sales strategies to acquire early customers",
      "Own the full sales cycle from prospecting to close",
      "Establish sales processes, metrics, and playbooks",
      "Partner with founders on pricing, positioning, and product feedback",
    ],
    requirements: [
      "5+ years in B2B SaaS sales, with experience selling to marketing teams",
      "Track record of exceeding quota and building pipeline",
      "Experience at early-stage startups (Series A or earlier preferred)",
      "Strong understanding of product marketing workflows and pain points",
      "Exceptional communication and relationship-building skills",
    ],
    emailSubject: "Application: Head of Sales",
  },
];

function RoleCard({ role }: { role: Role }) {
  const mailtoLink = `mailto:founders@getoden.com?subject=${encodeURIComponent(role.emailSubject)}`;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{role.title}</h3>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          {role.location}
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
          <Briefcase className="h-4 w-4" />
          {role.type}
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
          <DollarSign className="h-4 w-4" />
          {role.salary}
        </span>
      </div>

      <p className="text-gray-700 leading-7 mb-6">
        {role.description}
      </p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">What you&apos;ll do</h4>
        <ul className="space-y-2">
          {role.responsibilities.map((item, index) => (
            <li key={index} className="flex items-baseline gap-2 text-gray-700 leading-7">
              <span className="text-primary-500 text-lg">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">What we&apos;re looking for</h4>
        <ul className="space-y-2">
          {role.requirements.map((item, index) => (
            <li key={index} className="flex items-baseline gap-2 text-gray-700 leading-7">
              <span className="text-primary-500 text-lg">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={mailtoLink}
        className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
      >
        Apply Now
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export default function CareersPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': roles.map((role) => ({
      '@type': 'JobPosting',
      title: role.title,
      description: `${role.description} Responsibilities: ${role.responsibilities.join('. ')}. Requirements: ${role.requirements.join('. ')}.`,
      datePosted: CAREERS_LAST_UPDATED,
      validThrough: getValidThrough(CAREERS_LAST_UPDATED),
      employmentType: 'FULL_TIME',
      hiringOrganization: {
        '@type': 'Organization',
        name: 'Oden',
        sameAs: 'https://getoden.com',
        logo: 'https://getoden.com/logo.png',
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'San Francisco',
          addressRegion: 'CA',
          addressCountry: 'US',
        },
      },
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: {
          '@type': 'QuantitativeValue',
          minValue: role.salaryMin,
          maxValue: role.salaryMax,
          unitText: 'YEAR',
        },
      },
      applicantLocationRequirements: {
        '@type': 'Country',
        name: 'United States',
      },
    })),
  }

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary-600 mb-4">
              We&apos;re hiring
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Build the future of product marketing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re a seed-stage startup in San Francisco building AI tools that help product marketers gather buyer intel, create personalized content, and enable their teams. Join us at the ground floor.
            </p>
          </div>
        </div>
      </div>

      {/* Open Roles Section */}
      <div className="pt-8 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Roles</h2>
            <div className="space-y-8">
              {roles.map((role) => (
                <RoleCard key={role.title} role={role} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Don&apos;t see a perfect fit?</h2>
            <p className="text-gray-600 mb-6">
              We&apos;re always looking for exceptional people. Drop us a line - we read every email.
            </p>
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
  );
}
