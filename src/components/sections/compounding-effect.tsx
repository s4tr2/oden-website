'use client'

import { FadeIn, siteShellClassName } from "./layout-helpers";

const phases = [
    {
        label: "01",
        metric: "The foundation gets richer",
        points: [
            "Every call, doc, product update, and competitor move adds more context to the same PMM foundation.",
            "The source trail grows with the story, so teams can see what changed and why.",
        ],
    },
    {
        label: "02",
        metric: "The canon gets sharper",
        points: [
            "PMM keeps refining claims, proof, positioning, and comparisons in one governed place.",
            "Last quarter's work becomes this quarter's starting point, not another cleanup project.",
        ],
    },
    {
        label: "03",
        metric: "Every output stays current",
        points: [
            "Sales decks, battle cards, talk tracks, launch copy, and internal answers all flow from the same truth.",
            "The story gets sharper every week instead of staler.",
        ],
    },
];

export function CompoundingEffect() {
    return (
        <section className="relative w-full overflow-hidden py-24 md:py-32">
            <div
                className="absolute inset-x-0 top-0 h-px bg-border-sand"
                aria-hidden="true"
            />
            <div className={`${siteShellClassName} relative z-10`}>
                <FadeIn>
                    <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
                        <div className="md:col-span-8">
                        <p
                            className="text-[13px] uppercase text-subtle-graphite mb-5"
                            style={{ letterSpacing: '1.2px' }}
                        >
                            Why it compounds
                        </p>
                        <h2 className="text-balance">
                            Generic AI starts from a prompt.{' '}
                            <span className="text-placeholder-gray">Oden starts from your company.</span>
                        </h2>
                        </div>
                        <p
                            className="max-w-md text-mid-gray leading-[1.65] text-pretty md:col-span-4 md:justify-self-end"
                            style={{ fontSize: '16px', letterSpacing: '-0.16px' }}
                        >
                            The more your team runs product marketing through Oden, the more useful the foundation becomes. Context, judgment, and proof keep accumulating.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-4 right-4 top-8 hidden h-px bg-border-sand md:block" aria-hidden="true" />
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {phases.map((phase, index) => (
                            <div
                                key={phase.label}
                                className="relative rounded border border-border-sand/70 bg-white/85 p-8 shadow-xl shadow-stone-300/30"
                            >
                                <div className="mb-7 flex items-center gap-3">
                                    <span className="flex size-4 items-center justify-center rounded-full border border-border-sand bg-headline-black">
                                        <span className="size-1.5 rounded-full bg-canvas-beige" />
                                    </span>
                                    <span className="text-[12px] text-placeholder-gray tabular-nums">0{index + 1}</span>
                                </div>
                                <p
                                    className="text-[11px] uppercase text-placeholder-gray mb-5 tabular-nums"
                                    style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
                                >
                                    Step {phase.label}
                                </p>
                                <p className="mb-6 text-[28px] leading-[1.08] text-headline-black text-balance">
                                    {phase.metric}
                                </p>
                                <div className="space-y-5">
                                    {phase.points.map((point) => (
                                        <p
                                            key={point}
                                            className="text-mid-gray leading-[1.7] text-pretty"
                                            style={{ fontSize: '15px', letterSpacing: '-0.16px' }}
                                        >
                                            {point}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className="mt-12 border-t border-border-sand/80 pt-8">
                        <blockquote
                            className="max-w-4xl text-headline-black leading-[1.6] text-pretty"
                            style={{ fontSize: '20px', letterSpacing: '-0.16px' }}
                        >
                            &ldquo;It has all the rules. I keep refining them.&rdquo;
                        </blockquote>
                        <p
                            className="mt-4 text-mid-gray"
                            style={{ fontSize: '14px', letterSpacing: '-0.16px' }}
                        >
                            David Held · Director of Product Marketing, DealHub
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
