'use client'

import { FadeIn, siteShellClassName } from "./layout-helpers";
import {
    Radio,
    ShieldCheck,
    Workflow,
} from "lucide-react";

const suiteItems = [
    {
        title: "Listen",
        description: "Every buyer call, support ticket, doc, Slack thread, competitor move, and product change lands in one place. PMM stops chasing context.",
        icon: Radio,
    },
    {
        title: "Govern",
        description: "Oden synthesizes raw signals into draft positioning, claims, and competitive comparisons. PMM reviews, refines, and locks in the truth, with every claim traceable back to the real signal that informed it.",
        detail: "Nothing outdated, off-brand, or made up makes its way into the canon.",
        icon: ShieldCheck,
    },
    {
        title: "Activate",
        description: "The governed narrative is pushed instantly to where your teams already work, updating sales decks, battle cards, talk tracks, and web copy.",
        detail: "Wherever your company's story shows up, it shows up current because it came from a single, governed source.",
        icon: Workflow,
    },
];

export function PainPoints() {
    return (
        <section className="relative w-full overflow-hidden pb-24 pt-10 md:pb-32 md:pt-16" id="what-it-does">
            <div className={`${siteShellClassName} relative z-10`}>
                <FadeIn>
                    <div className="mb-20 max-w-4xl">
                        <p className="mb-8 text-[20px] text-subtle-graphite">
                            What it does
                        </p>
                        <h2 className="text-headline-black text-balance">
                            Three jobs, running constantly
                        </h2>
                        <p className="mt-12 max-w-[620px] text-[20px] leading-[1.6] text-mid-gray text-pretty">
                            Oden keeps the company story current by listening to every signal, governing what becomes true, and activating that truth wherever teams work.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="grid overflow-hidden rounded border border-[#ddd7ce] bg-[#fffdf8]/80 shadow-sm md:grid-cols-3">
                        {suiteItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="min-h-[340px] border-b border-[#e4ded6] p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                                >
                                    <div className="mb-7 flex size-12 items-center justify-center rounded border border-[#ebe5df] bg-[#fffaf4] shadow-md shadow-stone-200/70">
                                        <Icon className="size-5 text-subtle-graphite" strokeWidth={1.8} />
                                    </div>
                                    <h3 className="text-[20px] leading-tight text-headline-black">
                                        {item.title}
                                    </h3>
                                    <p className="mt-5 max-w-[34ch] text-[16px] leading-[1.65] text-mid-gray text-pretty">
                                        {item.description}
                                    </p>
                                    {"detail" in item ? (
                                        <p className="mt-5 max-w-[34ch] text-[16px] leading-[1.65] text-mid-gray text-pretty">
                                            {item.detail}
                                        </p>
                                    ) : null}
                                </div>
                            )
                        })}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
