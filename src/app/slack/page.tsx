import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Slack Integration",
  description: "Connect Oden to Slack and get AI-powered product marketing intelligence directly in your workspace.",
  alternates: {
    canonical: "https://getoden.com/slack",
  },
};

export default function SlackPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Oden for Slack
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get AI-powered product marketing intelligence directly in Slack. Ask about competitors, analyze sales calls, and research market trends without leaving your workspace.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What you can do</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3"><span className="text-gray-400">•</span>Ask about competitor positioning, pricing, and recent updates</li>
              <li className="flex gap-3"><span className="text-gray-400">•</span>Get insights from sales calls-pain points, objections, and quotes</li>
              <li className="flex gap-3"><span className="text-gray-400">•</span>Research market trends and industry news</li>
              <li className="flex gap-3"><span className="text-gray-400">•</span>Generate summaries and analysis on demand</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">How to install</h2>
            <ol className="space-y-4 text-gray-600">
              <li className="flex gap-3"><span className="font-medium text-gray-900">1.</span><span>Sign up or log in at <a href="https://app.getoden.com" className="text-primary-600 hover:text-primary-700 underline">app.getoden.com</a></span></li>
              <li className="flex gap-3"><span className="font-medium text-gray-900">2.</span><span>Go to Settings → Integrations</span></li>
              <li className="flex gap-3"><span className="font-medium text-gray-900">3.</span><span>Click &quot;Connect Slack&quot; and authorize the app</span></li>
              <li className="flex gap-3"><span className="font-medium text-gray-900">4.</span><span>Start chatting with Oden in Slack</span></li>
            </ol>
          </section>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.getoden.com/signup" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800">Get started free</a>
            <a href="https://app.getoden.com/login" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">Log in to connect</a>
          </div>

          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
            <div className="space-y-2 text-gray-600">
              <p><Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</Link></p>
              <p><Link href="/support" className="text-primary-600 hover:text-primary-700 underline">Support</Link></p>
              <p><Link href="/terms-of-service" className="text-primary-600 hover:text-primary-700 underline">Terms of Service</Link></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
