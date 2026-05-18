'use client'

import { Shield, Lock, KeyRound } from "lucide-react";
import { FadeIn } from "./layout-helpers";

const badges = [
    { icon: Shield, label: "SOC 2 Type II" },
    { icon: Lock, label: "GDPR" },
    { icon: KeyRound, label: "SAML SSO" },
];

export function TrustStrip() {
    return (
        <section className="w-full border-t border-border-sand/60 bg-white py-10">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <FadeIn>
                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-[13px] text-center"
                        style={{ letterSpacing: '-0.16px' }}
                    >
                        <span className="text-headline-black">For enterprise product marketing teams.</span>

                        <div className="flex items-center gap-x-6 text-mid-gray">
                            {badges.map((badge) => {
                                const Icon = badge.icon;
                                return (
                                    <div key={badge.label} className="flex items-center gap-2">
                                        <Icon className="w-3.5 h-3.5 text-subtle-graphite" strokeWidth={1.8} />
                                        <span>{badge.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
