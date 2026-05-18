'use client'

import { motion } from "framer-motion";
import { Clock, Users, Brain } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

const stats = [
    { label: "Clock", text: "Context-switching every 30 minutes", icon: Clock, color: "text-red-500", bg: "bg-red-50" },
    { label: "Users", text: "Roles you're expected to fill", icon: Users, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Brain", text: "Zero headspace for strategic work", icon: Brain, color: "text-zinc-500", bg: "bg-zinc-50" },
];

const slackRequests = [
    { from: "S", role: "Sales", text: "Need battle cards for Acme call in 2hrs", color: "bg-red-100/50 text-red-600 border-red-100" },
    { from: "P", role: "Product", text: "Launch messaging due EOD", color: "bg-amber-100/50 text-amber-600 border-amber-100" },
    { from: "M", role: "Marketing", text: "Where's the case study draft?", color: "bg-blue-100/50 text-blue-600 border-blue-100" },
    { from: "C", role: "CEO", text: "Can you join the investor call?", color: "bg-purple-100/50 text-purple-600 border-purple-100" },
];

export function FoundingPMMReality() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl text-zinc-900">
                            The founding PMM reality
                        </h2>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            No team. No budget. Infinite expectations. You're doing the work of five people while leadership asks why the launch deck isn't ready yet.
                        </p>

                        <div className="space-y-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full ${stat.bg} flex items-center justify-center`}>
                                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                    </div>
                                    <span className="text-sm font-medium text-zinc-600">{stat.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-zinc-100 rounded-3xl translate-x-4 translate-y-4 -z-10 border border-zinc-200/50" />
                        <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 p-8 space-y-6 relative overflow-hidden">
                            <div className="flex flex-col items-center text-center space-y-2 mb-4">
                                <div className="text-3xl">🫠</div>
                                <h3 className="font-semibold text-zinc-900">Your Slack right now</h3>
                            </div>

                            <div className="space-y-4">
                                {slackRequests.map((request, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`flex items-center gap-4 p-4 border rounded-xl ${request.color}`}
                                    >
                                        <div className="w-8 h-8 rounded flex items-center justify-center font-bold bg-current/10">
                                            {request.from}
                                        </div>
                                        <p className="text-sm font-medium">
                                            <span className="font-bold">{request.role}:</span> {request.text}
                                        </p>
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
