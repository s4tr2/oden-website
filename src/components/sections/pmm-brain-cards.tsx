'use client'

import { Phone, Globe, DollarSign, FileText, Database, Swords, Presentation, UserSquare, Rocket, Megaphone } from 'lucide-react'
import { FadeIn } from "./layout-helpers";

const inputs = [
    { icon: Phone, source: 'Sales call · Acme Corp', title: 'New buyer signal' },
    { icon: DollarSign, source: 'Stripe pricing page', title: 'Pricing change detected' },
    { icon: Globe, source: 'Linear homepage', title: 'Positioning shift' },
    { icon: Database, source: 'HubSpot · 14 deals', title: 'Win/loss patterns' },
    { icon: FileText, source: 'Notion · Internal doc', title: 'Roadmap update' },
]

const outputs = [
    { icon: Swords, title: 'Battle Card', subtitle: 'GPT-5 Enterprise' },
    { icon: Presentation, title: 'Sales Deck', subtitle: 'Enterprise tier' },
    { icon: UserSquare, title: 'Buyer Persona', subtitle: 'VP of Sales' },
    { icon: Rocket, title: 'Launch Plan', subtitle: 'Q3 · Audit Logs' },
    { icon: Megaphone, title: 'Positioning Brief', subtitle: 'Mid-market' },
]

export function PmmBrainCards() {
    return (
        <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <p
                            className="text-[13px] uppercase text-subtle-graphite mb-5"
                            style={{ letterSpacing: '1.2px' }}
                        >
                            How it compounds
                        </p>
                        <h2 className="mb-6">
                            One model.{' '}
                            <span className="text-placeholder-gray">Sharper every week.</span>
                        </h2>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="bg-white rounded border border-border-sand/60 p-6 md:p-12 mb-16 md:mb-20 relative overflow-hidden">

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 relative z-10">
                            {/* Inputs column */}
                            <div className="md:col-span-4">
                                <p
                                    className="text-[10px] uppercase text-placeholder-gray mb-4 hidden md:block"
                                    style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
                                >
                                    Inputs
                                </p>
                                <div className="space-y-2.5">
                                    {inputs.map((card) => {
                                        const Icon = card.icon
                                        return (
                                            <div
                                                key={card.title}
                                                className="bg-white rounded border border-border-sand/70 p-3.5"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-sm flex-shrink-0 flex items-center justify-center bg-surface-cream/70">
                                                        <Icon className="w-3 h-3 text-subtle-graphite" strokeWidth={1.8} />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p
                                                            className="text-[10px] uppercase text-placeholder-gray truncate mb-1"
                                                            style={{ letterSpacing: '0.7px', fontFamily: 'ui-monospace, monospace' }}
                                                        >
                                                            {card.source}
                                                        </p>
                                                        <p
                                                            className="text-[13px] text-headline-black leading-tight"
                                                            style={{ letterSpacing: '-0.16px' }}
                                                        >
                                                            {card.title}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Model panel (center) */}
                            <div className="md:col-span-4 relative flex items-center justify-center">
                                {/* Static guide lines, no animation */}
                                <svg
                                    className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
                                    viewBox="0 0 100 400"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <g stroke="#dedbd6" strokeWidth="0.4" fill="none" strokeDasharray="1.5 2.5" vectorEffect="non-scaling-stroke">
                                        <path d="M 0 80 Q 30 200, 50 200" />
                                        <path d="M 0 200 Q 30 200, 50 200" />
                                        <path d="M 0 320 Q 30 200, 50 200" />
                                        <path d="M 50 200 Q 70 200, 100 60" />
                                        <path d="M 50 200 Q 70 200, 100 140" />
                                        <path d="M 50 200 Q 70 200, 100 220" />
                                        <path d="M 50 200 Q 70 200, 100 300" />
                                        <path d="M 50 200 Q 70 200, 100 380" />
                                    </g>
                                </svg>

                                <div className="relative w-full max-w-[260px]">
                                    <div className="relative bg-headline-black text-white rounded overflow-hidden">
                                        <div className="px-5 pt-5 pb-3 border-b border-white/[0.08]">
                                            <span
                                                className="text-[10px] uppercase text-placeholder-gray"
                                                style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
                                            >
                                                Model
                                            </span>
                                        </div>
                                        <div className="px-5 py-6">
                                            <p className="text-[16px] text-white leading-tight mb-2" style={{ letterSpacing: '-0.16px' }}>
                                                One connected context graph
                                            </p>
                                            <p className="text-[12px] text-placeholder-gray leading-[1.5]" style={{ letterSpacing: '-0.16px' }}>
                                                Buyers, competitors, product, and messaging held in a structured model that every artifact reads from.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Outputs column */}
                            <div className="md:col-span-4">
                                <p
                                    className="text-[10px] uppercase text-placeholder-gray mb-4 hidden md:block text-right"
                                    style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
                                >
                                    Artifacts
                                </p>
                                <div className="space-y-2.5">
                                    {outputs.map((output) => {
                                        const Icon = output.icon
                                        return (
                                            <div
                                                key={output.title}
                                                className="bg-white rounded border border-border-sand/70 p-3.5"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-sm flex-shrink-0 flex items-center justify-center bg-surface-cream/70">
                                                        <Icon className="w-3 h-3 text-subtle-graphite" strokeWidth={1.8} />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[13px] text-headline-black leading-tight" style={{ letterSpacing: '-0.16px' }}>
                                                            {output.title}
                                                        </p>
                                                        <p className="text-[11px] text-mid-gray mt-0.5 leading-snug" style={{ letterSpacing: '-0.16px' }}>
                                                            {output.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-baseline justify-center gap-x-5 gap-y-2 mb-10 text-center">
                        <span
                            className="text-headline-black"
                            style={{ fontSize: '56px', letterSpacing: '-0.64px', lineHeight: '1' }}
                        >
                            5×
                        </span>
                        <span
                            className="text-mid-gray"
                            style={{ fontSize: '16px', letterSpacing: '-0.16px' }}
                        >
                            Signals captured per artifact, by Week 8
                        </span>
                    </div>
                </FadeIn>

                <FadeIn>
                    <p
                        className="max-w-3xl mx-auto text-center text-mid-gray leading-[1.7]"
                        style={{ fontSize: '17px', letterSpacing: '-0.16px' }}
                    >
                        New inputs flow in continuously. Every artifact your team creates writes back. Replaces the Klue dashboard, the Notion folder, and the chat tab.
                    </p>
                </FadeIn>

            </div>
        </section>
    );
}
