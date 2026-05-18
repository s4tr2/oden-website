'use client'

import { FadeIn } from "./layout-helpers";

const comparisons = [
    {
        genericTitle: "Starts from zero every time",
        genericBody: "Every prompt is a blank slate. No memory of your market, your buyers, or last week's work.",
        odenTitle: "Builds on what your team learns",
        odenBody: "Every call, competitor change, and doc makes the work better. Week 12 is better than Week 1.",
    },
    {
        genericTitle: "No guardrails. Things drift.",
        genericBody: "Messaging shifts from prompt to prompt. Tone changes. Positioning wanders. No one trusts it for the final version.",
        odenTitle: "Your messaging stays consistent",
        odenBody: "Your messaging, brand rules, and positioning stay intact. Outputs stay tied to the strategy your team approved.",
    },
    {
        genericTitle: "Content anyone could write",
        genericBody: "It sounds plausible, but it could be about anyone in your category. Nothing specific. Nothing earned.",
        odenTitle: "Content your company could stand behind",
        odenBody: "Built from your buyer conversations, competitor landscape, and win/loss data. Backed by sources. Specific to your company.",
    },
];

export function ComparisonSection() {
    return (
        <section className="w-full bg-white py-24 md:py-32">
            <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                <FadeIn>
                    <div className="max-w-3xl mb-16">
                        <p
                            className="text-[13px] uppercase text-subtle-graphite mb-5"
                            style={{ letterSpacing: '1.2px' }}
                        >
                            The difference
                        </p>
                        <h2>
                            This is not another{' '}
                            <span className="text-placeholder-gray">AI writing tool.</span>
                        </h2>
                        <p
                            className="mt-6 text-mid-gray leading-[1.6] max-w-3xl text-pretty"
                            style={{ fontSize: '17px', letterSpacing: '-0.16px' }}
                        >
                            You&apos;ve tried the generic tools. You know the pattern: paste in context, get something usable, then rewrite half of it. Here&apos;s what&apos;s different.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {comparisons.map((item) => (
                            <div key={item.genericTitle} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white border border-border-sand/60 rounded p-7">
                                    <p
                                        className="text-[11px] uppercase text-placeholder-gray mb-4"
                                        style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
                                    >
                                        Generic AI
                                    </p>
                                    <h5 className="mb-3 text-balance">{item.genericTitle}</h5>
                                    <p
                                        className="text-mid-gray leading-[1.6] text-pretty"
                                        style={{ fontSize: '15px', letterSpacing: '-0.16px' }}
                                    >
                                        {item.genericBody}
                                    </p>
                                </div>

                                <div className="bg-white border border-border-sand/60 rounded p-7">
                                    <p
                                        className="text-[11px] uppercase text-headline-black mb-4"
                                        style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
                                    >
                                        Oden
                                    </p>
                                    <h5 className="mb-3 text-balance">{item.odenTitle}</h5>
                                    <p
                                        className="text-mid-gray leading-[1.6] text-pretty"
                                        style={{ fontSize: '15px', letterSpacing: '-0.16px' }}
                                    >
                                        {item.odenBody}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <blockquote
                        className="mt-12 max-w-3xl text-headline-black leading-[1.6] text-pretty"
                        style={{ fontSize: '20px', letterSpacing: '-0.16px' }}
                    >
                        &ldquo;So many of these tools, the Jaspers of the world, it&apos;s all about the content. Either you get just generic crap.&rdquo;
                    </blockquote>
                    <p
                        className="mt-4 text-mid-gray"
                        style={{ fontSize: '14px', letterSpacing: '-0.16px' }}
                    >
                        David Held · Director of Product Marketing, DealHub
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
