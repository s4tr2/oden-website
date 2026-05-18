'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Section, FadeIn } from "../layout-helpers";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What data sources do you analyze?",
        answer: "We pull from your CRM (Salesforce, HubSpot), call recordings (Gong, Chorus, Clari), support tickets (Zendesk, Intercom), G2/Capterra reviews, and win/loss interviews. More data = better insights."
    },
    {
        question: "How does this differ from traditional market research?",
        answer: "Traditional research gives you a snapshot from a few months ago. Oden continuously analyzes live data-every call, every ticket, every review-so your buyer intelligence stays current."
    },
    {
        question: "Can it segment insights by persona or industry?",
        answer: "Yes. Filter insights by title, company size, industry, deal stage, or any custom field in your CRM. See what matters to CFOs vs. VPs vs. end users."
    }
];

export function BuyerFAQ() {
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
