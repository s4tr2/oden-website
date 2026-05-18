import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sub-processors",
  description: "List of third-party sub-processors used by Oden to deliver our services. We ensure all partners meet strict data protection standards.",
  alternates: {
    canonical: "https://getoden.com/subprocessors",
  },
};

export default function SubprocessorsPage() {
  return (
    <main className="min-h-dvh bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Sub-processors</h1>
        <p className="text-gray-600 mb-8">
          Last updated: January 2026
        </p>

        <p className="mb-6">
          Oden uses the following sub-processors to deliver our services.
          These third parties may process customer data on our behalf.
        </p>

        <table className="w-full border-collapse border border-gray-300 mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Sub-processor</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Anthropic</td>
              <td className="border border-gray-300 px-4 py-2">AI model provider</td>
              <td className="border border-gray-300 px-4 py-2">United States</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Google</td>
              <td className="border border-gray-300 px-4 py-2">AI model provider</td>
              <td className="border border-gray-300 px-4 py-2">United States</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">OpenAI</td>
              <td className="border border-gray-300 px-4 py-2">AI model provider</td>
              <td className="border border-gray-300 px-4 py-2">United States</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Amazon Web Services</td>
              <td className="border border-gray-300 px-4 py-2">Cloud infrastructure</td>
              <td className="border border-gray-300 px-4 py-2">United States</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Amazon RDS</td>
              <td className="border border-gray-300 px-4 py-2">Database hosting</td>
              <td className="border border-gray-300 px-4 py-2">United States</td>
            </tr>
          </tbody>
        </table>

        <p className="text-sm text-gray-600">
          For questions about our sub-processors, contact us at{" "}
          <a href="mailto:support@getoden.com" className="text-blue-600 hover:underline">
            support@getoden.com
          </a>
        </p>
      </div>
    </main>
  );
}
