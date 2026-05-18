import type { Metadata } from "next";
import { PricingSection } from "@/components/sections/pricing";
export const metadata: Metadata = {
  title: "Pricing & Plans",
  description: "Pricing for Oden, the operating system for product marketing. Every signal in, PMM-authored truth on top, every output current and sourced.",
  alternates: {
    canonical: 'https://getoden.com/pricing',
  },
  openGraph: {
    title: "Pricing & Plans | Oden",
    description: "Pricing for Oden, the operating system for product marketing. Every signal in, PMM-authored truth on top, every output current and sourced.",
    url: 'https://getoden.com/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pricing & Plans | Oden",
    description: "Pricing for Oden, the operating system for product marketing. Every signal in, PMM-authored truth on top, every output current and sourced.",
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingSection />
    </>
  );
}
