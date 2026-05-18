'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Section, FadeIn } from "../layout-helpers";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Will my CEO think I'm using AI?",
        answer: "Oden acts as your research and drafting partner. The final output is always reviewed and refined by you, ensuring it maintains your strategic touch and the company's unique voice. It's about augmenting your capacity, not replacing your expertise."
    },
    {
        question: "How does it learn my company's context?",
        answer: "Oden integrates with your existing knowledge base-Slack, Google Drive, Notion, and more. It indexes your historical documentation, product specs, and messaging guides to understand your unique context automatically."
    },
    {
        question: "What if I need something specific that isn't covered?",
        answer: "Our agent library is constantly growing, and we offer custom agent configurations for specific team needs. Whether it's a niche industry report or a specialized sales tool, Oden can be tailored to your workflow."
    },
    {
        question: "Is my company data secure?",
        answer: "Data security is our top priority. We use isolated data silos for every customer, ensuring your proprietary information is never leaked or used to train public models. We are also ongoing SOC2 Type II compliance."
    }
];

export function FoundingPMMFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <Section className="py-24" id="faq">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl text-center mb-16 text-zinc-900">Questions from Founding PMMs</h2>
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
                                <span className="text-base md:text-lg text-zinc-900 group-hover:text-[#111111] transition-colors leading-tight">
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
    );
}
