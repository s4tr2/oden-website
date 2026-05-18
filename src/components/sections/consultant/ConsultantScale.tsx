'use client'

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

const steps = [
    {
        number: "1",
        title: "Connect your clients",
        description: "Link their Google Drive, Notion, or Slack. Oden learns their context."
    },
    {
        number: "2",
        title: "Assign agents to tasks",
        description: '"Sales Enablement Agent: build battle cards for TechCorp vs. Competitor X"'
    },
    {
        number: "3",
        title: "Review & deliver",
        description: "Agents draft, you refine. Deliver polished work in a fraction of the time."
    }
];

export function ConsultantScale() {
    return (
        <Section className="py-24 space-y-32">
            <FadeIn>
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl text-zinc-900">
                        How consultants use Oden
                    </h2>
                    <p className="text-zinc-500">
                        From chaos to clarity in three steps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {steps.map((step, index) => (
                        <div key={index} className="space-y-4">
                            <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center mx-auto text-zinc-400">
                                {step.number}
                            </div>
                            <h3 className="text-zinc-900">{step.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </FadeIn>

            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl text-zinc-900 leading-tight">
                            Scale without hiring
                        </h2>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            Take on more clients without burning out. Each agent works like a junior PMM who never sleeps, never forgets, and always follows your playbook.
                        </p>

                        <div className="space-y-4">
                            {[
                                "3x your client capacity",
                                "Consistent quality across all deliverables",
                                "More time for high-value strategy work"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span className="text-zinc-600 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 p-10 space-y-8">
                        <div className="text-center space-y-2">
                            <div className="text-5xl text-[#111111]">3x</div>
                            <div className="text-sm font-medium text-zinc-400">Average capacity increase</div>
                        </div>

                        <div className="space-y-8 pt-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-semibold">
                                    <span className="text-zinc-400">Before Oden</span>
                                    <span className="text-zinc-900">3-4 clients</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "30%" }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="h-full bg-zinc-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-semibold">
                                    <span className="text-zinc-900">With Oden</span>
                                    <span className="text-[#111111]">10-12 clients</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                        className="h-full bg-[#111111]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
