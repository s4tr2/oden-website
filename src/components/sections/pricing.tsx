'use client'

import { Check } from 'lucide-react'
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Section, FadeIn } from "./layout-helpers";

const PricingCard = ({
  title,
  price,
  priceSuffix = "/month",
  buttonText,
  features,
  highlighted = false,
  description,
  ctaLink
}: {
  title: string;
  price: string;
  priceSuffix?: string;
  buttonText: string;
  features: string[];
  highlighted?: boolean;
  description?: string;
  ctaLink: string;
}) => {
  return (
    <div className={cn(
      "relative p-8 rounded-2xl border flex flex-col h-full transition-all duration-300",
      highlighted
        ? "bg-zinc-900 border-zinc-900 text-white shadow-xl scale-105 z-10"
        : "bg-white border-zinc-200 text-zinc-900 hover:border-zinc-300 hover:shadow-lg"
    )}>
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          MOST POPULAR
        </div>
      )}

      <div className="mb-8">
        <h3 className={cn("text-xs font-bold uppercase tracking-widest mb-4", highlighted ? "text-zinc-400" : "text-zinc-500")}>
          {title}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-medium tracking-tight">{price}</span>
          {price !== "Custom" && <span className={cn("text-sm", highlighted ? "text-zinc-400" : "text-zinc-500")}>{priceSuffix}</span>}
        </div>

      </div>

      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-full py-3 rounded-none text-sm font-medium transition-colors mb-2 uppercase tracking-wide block text-center",
          highlighted
            ? "bg-white text-zinc-900 hover:bg-zinc-100"
            : "bg-zinc-900 text-white hover:bg-zinc-800"
        )}>
        {buttonText}
      </a>

      {description && (
        <p className={cn("mt-1 text-sm mb-6", highlighted ? "text-zinc-400" : "text-zinc-500")}>{description}</p>
      )}

      <div className="mt-auto">
        <p className={cn("text-xs font-bold uppercase tracking-widest mb-4", highlighted ? "text-zinc-500" : "text-zinc-400")}>
          WHAT&apos;S INCLUDED:
        </p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <Check className={cn("w-4 h-4 shrink-0 mt-0.5", highlighted ? "text-green-400" : "text-green-600")} />
              <span className={highlighted ? "text-zinc-300" : "text-zinc-600"}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export function PricingSection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="py-12 sm:py-16 border-t border-zinc-100 w-full">
      <div className="flex-1 max-w-6xl mx-auto px-6 md:px-12 w-full pt-4 pb-20">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl text-zinc-900 mb-6">
              Start with the operating system for product marketing
            </h1>
            <p className="text-lg text-zinc-500">
              Simple pricing for one PMM foundation: every signal in, every output current and sourced.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <PricingCard
              title="Starter"
              price="Free"
              priceSuffix=""
              buttonText="Start Building"
              ctaLink="https://app.getoden.com/signup"
              description="No credit card required"
              features={[
                "500 credits",
                "Unlimited Seats",
                "14 days validity"
              ]}
            />
          </motion.div>

          {/* Business */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <PricingCard
              title="Growth"
              price="$89"
              buttonText="Start Building"
              ctaLink="https://app.getoden.com/signup"
              highlighted={true}
              features={[
                "2000 credits",
                "Unlimited Seats",
                "1-month credit rollover"
              ]}
            />
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full"
          >
            <PricingCard
              title="Business"
              price="$199"
              buttonText="Start Building" // Changed from Schedule a Call
              ctaLink="https://app.getoden.com/signup"
              features={[
                "5000 credits",
                "Unlimited Seats",
                "1-month credit rollover"
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
