'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Section, FadeIn } from "../layout-helpers";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "How quickly do you detect changes?",
        answer: "We check competitor pages every few hours for high-priority competitors, and daily for others. Significant changes (pricing, major features) trigger immediate Slack or email alerts."
    },
    {
        question: "What sources do you monitor?",
        answer: "We track competitor websites (pricing, product, features), press releases, job postings, G2/Capterra reviews, LinkedIn company pages, and public SEC filings for public companies."
    },
    {
        question: "How many competitors can I track?",
        answer: "There's no limit. Track 5 or 50 competitors. The agent prioritizes based on deal frequency and competitive threat level you define."
    }
];

export function CompetitorFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <Section className="py-24" id="faq">
            <FadeIn>
                <h2 className="text-2xl md:text-3xl text-center mb-16 text-zinc-900">Common Questions</h2>
                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-zinc-100"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between text-left py-6 group"
                            >
                                <span className="text-base md:text-lg font-medium text-zinc-900 leading-tight">
                                    {faq.question}
                                </span>
                                <span className="flex items-center flex-shrink-0 ml-4">
                                    <ChevronDown
                                        className={cn(
                                            "h-4 w-4 text-zinc-400 transition-transform duration-300",
                                            openIndex === index && "rotate-180"
                                        )}
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
                                        <p className="pb-6 text-base md:text-base leading-relaxed text-zinc-500 max-w-4xl">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </Section>
    )
}
