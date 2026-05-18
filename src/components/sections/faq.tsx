'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FadeIn, Eyebrow } from "./layout-helpers";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string
  answer: string
}

export const defaultFaqItems: FaqItem[] = [
  {
    question: "What does Oden actually do?",
    answer: "Oden builds one connected model of your buyers, competitors, and product. Every call, competitor signal, and internal doc deepens it. Battle cards, decks, personas, and launch plans are generated from the model, and update as it does."
  },
  {
    question: "How is this different from Klue, Crayon, or ChatGPT?",
    answer: "Competitive intelligence tools give you a dashboard; someone still translates it into a battle card. General-purpose AI answers well but doesn't persist your product, your competitors, or last week's call. Oden holds all of it as one model that compounds, and generates the artifacts the rest of GTM consumes."
  },
  {
    question: "Does Oden train on my data?",
    answer: "No. Your data is isolated and used only to answer your team's questions. We do not use your proprietary information to train our base models."
  },
  {
    question: "Are you SOC 2 compliant?",
    answer: "We are undergoing SOC 2 Type II certification. Enterprise-grade security is built into every layer of the product."
  },
  {
    question: "Where is this going?",
    answer: "Today, Oden runs product marketing. Over time, the same model extends across the rest of GTM: sales, customer success, and product communication. The longer your company runs on it, the more it knows."
  }
]

/** Objection-style FAQs for the home page */
export const homeFaqItems: FaqItem[] = [
  {
    question: "Is this just ChatGPT for PMM?",
    answer: "No. ChatGPT, Claude, Copilot, and Perplexity start from a blank prompt every time. Oden starts from your real calls, your real docs, your real product context, with PMM holding the pen on what's true. Generic AI helps one person write faster. Oden runs the entire story."
  },
  {
    question: "Couldn't we use Claude or Copilot inside our existing tools?",
    answer: "Personal AI assistants don't share state. They don't have your buyer signal underneath them. They don't have a PMM owning what's true. They make things up. Oden is a shared foundation with a real signal base and an authored truth layer that everyone in the company can produce from."
  },
  {
    question: "Is this really broader than sales enablement?",
    answer: "Yes. Sales enablement is one place Oden's output shows up, and the most visible win. The same authored-truth layer powers positioning, launches, buyer research, content, and competitive intel."
  },
  {
    question: "Why not keep using Gong, Notion, Docs, and Claude?",
    answer: "Each stores a piece of the work. None gives PMM a place to author the company's story on top of every signal. None makes every output flow from a source that's always current. Oden is the layer that ties them together."
  },
  {
    question: "Couldn't a sharp ops team build this on a standard LLM?",
    answer: "A scrappy version, yes. But the moat isn't the AI, it's everything around it. Pulling from every signal source. Linking every claim to the source that informed it. Giving PMM a real authoring environment on top. Compounding the picture over years. That's not a side project. It's the product."
  }
]

export function FAQSection({
  className,
  items = defaultFaqItems
}: {
  className?: string
  items?: FaqItem[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={cn("w-full py-24 md:py-32", className)} id="faq">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <FadeIn>
          {/* Header */}
          <div className="mb-12">
            <div className="mb-7">
              <Eyebrow>FAQ</Eyebrow>
            </div>
            <h2
              className="max-w-2xl text-balance"
              style={{
                fontWeight: 500,
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{
                display: 'block',
                background: 'linear-gradient(to bottom, #5F5F5F 0%, #191818 95%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Common questions
              </span>
            </h2>
            <p className="mt-5 text-mid-gray text-[16px] leading-[1.6] max-w-xl">
              Can&apos;t find what you&apos;re looking for?{' '}
              <a href="mailto:support@getoden.com" className="text-headline-black hover:underline">
                Reach out
              </a>
            </p>
          </div>

          {/* FAQ accordion */}
          <div>
            {items.map((faq, index) => (
              <div
                key={faq.question}
                className={cn(
                  "border-border-sand",
                  index !== items.length - 1 && "border-b"
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left py-6 group"
                >
                  <span
                    className="text-[17px] font-medium text-headline-black leading-tight pr-4"
                  >
                    {faq.question}
                  </span>
                  <span className="flex items-center flex-shrink-0">
                    <Plus
                      className={cn(
                        "h-5 w-5 text-icon-gray transition-transform duration-300",
                        openIndex === index && "rotate-45"
                      )}
                      strokeWidth={1.5}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pb-6 text-[15px] leading-[1.7] text-mid-gray"
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
