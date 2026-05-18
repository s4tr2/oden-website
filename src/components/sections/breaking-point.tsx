'use client'

import { motion } from "framer-motion";
import { Section, FadeIn } from "./layout-helpers";

export function BreakingPoint() {
    return (
        <Section className="py-32" id="manifesto">
            <FadeIn>
                <div className="border border-zinc-200 bg-white p-12 md:p-20 text-center mx-auto relative overflow-hidden">
                    {/* Animated gradient line - expands from center, fades at edges */}
                    <motion.div
                        className="absolute top-0 left-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                        initial={{ width: 0, x: "-50%" }}
                        whileInView={{ width: "100%", x: "-50%" }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    <h2 className="leading-tight mb-8 text-zinc-900">
                        You were hired to tell the <span className=" text-primary">product story</span>.
                    </h2>

                    <div className="flex items-center justify-center gap-6 py-6 opacity-30">
                        <div className="h-px bg-zinc-900 w-24"></div>
                        <span className="text-xs uppercase tracking-[0.2em] text-zinc-900 font-semibold">Reality Check</span>
                        <div className="h-px bg-zinc-900 w-24"></div>
                    </div>

                    <div className="mt-8 relative inline-block">
                        <span className="font-sans text-xl md:text-2xl text-zinc-600 tracking-tight">
                            Instead, you became a librarian.
                        </span>
                    </div>

                    <div className="mt-16 text-xs text-zinc-400 font-semibold tracking-[0.2em] uppercase">
                        Built for Product Marketing Managers
                    </div>
                </div>
            </FadeIn>
        </Section>
    )
}
