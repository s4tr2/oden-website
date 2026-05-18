'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Section, FadeIn } from '../layout-helpers';
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Can I white-label Oden for my agency?",
        answer: "Yes. You can invite your clients to their own dedicated workspaces with your branding. They see Oden as an extension of your agency's expertise, powered by our specialized AI team."
    },
    {
        question: "How do I manage multiple clients?",
        answer: "Oden is built for multi-tenancy. You can easily switch between client workspaces, each with its own isolated data, custom style guides, and specific agent configurations. Your context for each client stays perfectly segregated."
    },
    {
        question: "Is my clients' data secure?",
        answer: "Absolutely. We use enterprise-grade security with isolated data silos for every client. Your data is never used to train our base models, and we are ongoing SOC2 Type II compliance to ensure the highest standards of protection."
    },
    {
        question: "What integrations do you support?",
        answer: "Oden integrates with the tools your clients already use: Google Drive, Notion, Slack, Gong, Chorus, and more. This allows our agents to index existing documentation and learn the client's unique voice and history automatically."
    }
];

export function ConsultantFAQ() {
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
    );
}
