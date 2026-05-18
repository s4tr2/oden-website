'use client'

import { motion } from "framer-motion";
import { Check, Square } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

const stats = [
    { label: "5x", text: "Clients with overlapping deadlines", color: "text-[#111111]", bg: "bg-[#f5f5f5]" },
    { label: "12h", text: "Average workday just to keep up", color: "text-[#111111]", bg: "bg-[#f5f5f5]" },
    { label: "0", text: "Time for strategic thinking", color: "text-[#111111]", bg: "bg-[#f5f5f5]" },
];

const todoItems = [
    { text: "Acme positioning deck", status: "completed" },
    { text: "TechCorp battle cards (urgent)", status: "urgent" },
    { text: "StartupX GTM plan", status: "pending" },
    { text: "CloudCo case study", status: "pending" },
    { text: "DataInc lead gen copy (overdue)", status: "overdue" },
];

export function ConsultantDilemma() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl text-zinc-900">
                            The consultant's dilemma
                        </h2>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            You're juggling 5 clients. Each needs positioning, sales enablement, GTM planning, and content. You're the bottleneck-and the nights are getting longer.
                        </p>

                        <div className="space-y-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full ${stat.bg} flex items-center justify-center font-bold text-sm ${stat.color}`}>
                                        {stat.label}
                                    </div>
                                    <span className="text-sm font-medium text-zinc-600">{stat.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-zinc-100 rounded-3xl rotate-3 -z-10 border border-zinc-200" />
                        <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 p-8 space-y-6 relative">
                            <div className="flex flex-col items-center text-center space-y-2 mb-4">
                                <div className="text-3xl">😅</div>
                                <h3 className="font-semibold text-zinc-900">Today's to-do list</h3>
                            </div>

                            <div className="space-y-3">
                                {todoItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`flex items-center gap-3 p-4 border rounded-xl transition-all ${item.status === 'completed' ? 'bg-zinc-50/50 border-zinc-100' :
                                                item.status === 'urgent' ? 'bg-[#FFFBEB] border-[#FEF3C7]' :
                                                    item.status === 'overdue' ? 'bg-[#FFF1F2] border-[#FFE4E6]' :
                                                        'bg-zinc-50/50 border-zinc-100'
                                            }`}
                                    >
                                        <div className="flex-shrink-0">
                                            {item.status === 'completed' ? (
                                                <div className="w-5 h-5 bg-zinc-200 rounded flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-zinc-500" />
                                                </div>
                                            ) : (
                                                <div className={`w-5 h-5 border-2 rounded ${item.status === 'urgent' ? 'border-[#F59E0B]' :
                                                        item.status === 'overdue' ? 'border-[#EF4444]' :
                                                            'border-zinc-300'
                                                    }`} />
                                            )}
                                        </div>
                                        <span className={`text-sm font-medium ${item.status === 'completed' ? 'text-zinc-400 line-through' :
                                                item.status === 'urgent' ? 'text-[#92400E]' :
                                                    item.status === 'overdue' ? 'text-[#991B1B]' :
                                                        'text-zinc-600'
                                            }`}>
                                            {item.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
