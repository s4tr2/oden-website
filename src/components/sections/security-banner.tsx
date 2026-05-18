'use client'

import { KeyRound, Lock, Shield, Users } from "lucide-react";
import { FadeIn, siteShellClassName } from "./layout-helpers";

const trustItems = [
    {
        icon: Shield,
        title: "SOC 2 Type II in progress",
        description: "Strong controls and audit trails are already in place.",
    },
    {
        icon: Lock,
        title: "No training on your data",
        description: "Buyer calls, competitor notes, and internal docs are never used to train base models.",
    },
    {
        icon: KeyRound,
        title: "Disconnect anytime",
        description: "Revoke access and your data is deleted. No lock-in. No lingering copies.",
    },
    {
        icon: Users,
        title: "Unlimited seats",
        description: "No per-user pricing. Your whole team gets access.",
    },
];

export function SecurityBanner() {
    return (
        <section className="w-full py-24 md:py-32">
            <div className={siteShellClassName}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
                    <div className="md:col-span-5">
                        <FadeIn>
                            <p
                                className="text-[13px] uppercase text-subtle-graphite mb-5"
                                style={{ letterSpacing: '1.2px' }}
                            >
                                Trust & security
                            </p>
                            <h2>
                                Your data stays{' '}
                                <span className=" font-light">yours.</span>
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="md:col-span-7">
                        <FadeIn>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {trustItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.title}
                                            className="bg-white p-6 rounded border border-border-sand/60"
                                        >
                                            <div className="w-9 h-9 rounded bg-surface-cream flex items-center justify-center mb-4">
                                                <Icon className="w-[16px] h-[16px] text-subtle-graphite" strokeWidth={1.5} />
                                            </div>
                                            <p
                                                className="text-[14px] text-headline-black mb-1.5"
                                                style={{ letterSpacing: '-0.16px' }}
                                            >
                                                {item.title}
                                            </p>
                                            <p
                                                className="text-[13px] text-mid-gray leading-[1.5] text-pretty"
                                                style={{ letterSpacing: '-0.16px' }}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
