'use client'

import { FadeIn } from "./layout-helpers";

export function FeatureHighlight() {
    return (
        <section className="w-full bg-off-white py-24 md:py-32">
            <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
                    <div className="md:col-span-5">
                        <FadeIn>
                            <p
                                className="text-[13px] uppercase text-subtle-graphite mb-5"
                                style={{ letterSpacing: '1.2px' }}
                            >
                                The category
                            </p>
                            <h2>
                                Product marketing has tools.{' '}
                                <span className="text-placeholder-gray">None of them compound.</span>
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="md:col-span-7">
                        <FadeIn>
                            <p
                                className="text-headline-black leading-[1.7]"
                                style={{ fontSize: '17px', letterSpacing: '-0.16px' }}
                            >
                                Competitive trackers, content systems, sales enablement platforms. Each holds a slice. Each starts over every quarter. Oden is built so the work persists: every call, every competitor signal, and every doc deepens the model your artifacts come from. The longer the team uses it, the sharper the model gets, and the harder it becomes to go back.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
