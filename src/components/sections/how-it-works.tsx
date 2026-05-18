'use client'

import { BrainCircuit, FileText, PlugZap } from 'lucide-react'
import { FadeIn } from "./layout-helpers";

const steps = [
    {
        number: "1",
        title: "Connect your tools",
        description: "Connect Gong, Salesforce, Slack, G2, Google Drive, and more. No migration.",
        icon: PlugZap,
    },
    {
        number: "2",
        title: "Oden builds your context",
        description: "Oden pulls in calls, docs, reviews, and competitor changes, then maps buyers, market, and competitors.",
        icon: BrainCircuit,
    },
    {
        number: "3",
        title: "Your first asset is live in hours",
        description: "A battle card, message brief, or launch asset with sources attached.",
        icon: FileText,
    },
];

export function HowItWorks() {
    return (
        <section className="w-full bg-off-white py-24 md:py-32">
            <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                <FadeIn>
                    <div className="max-w-3xl mb-16">
                        <h2>
                            Live intelligence in{' '}
                            <span className="text-placeholder-gray">three steps.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    className="bg-white p-8 rounded border border-border-sand/60 h-full flex flex-col"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="size-10 rounded bg-surface-cream flex items-center justify-center">
                                            <Icon className="size-4 text-subtle-graphite" strokeWidth={1.8} />
                                        </div>
                                        <span
                                            className="text-[11px] uppercase text-placeholder-gray tabular-nums"
                                            style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
                                        >
                                            {step.number}
                                        </span>
                                    </div>
                                    <h5 className="mb-3 text-balance">{step.title}</h5>
                                    <p
                                        className="text-mid-gray leading-[1.6] text-pretty"
                                        style={{ fontSize: '15px', letterSpacing: '-0.16px' }}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
