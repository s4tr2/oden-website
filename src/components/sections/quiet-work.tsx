'use client'

import { motion } from "framer-motion";
import { AlertCircle, Clock } from "lucide-react";
import { Section, FadeIn } from "./layout-helpers";
import { cn } from "@/lib/utils";

const inboxItems = [
    {
        id: "sarah",
        name: "Sarah Chen",
        initial: "S",
        age: "2m",
        title: "Gong launched AI Agents",
        body: "Sales needs updated battle cards before tomorrow's QBR. Can you prioritize?",
        avatarClass: "from-red-400 to-red-600",
        unread: true,
    },
    {
        id: "mike",
        name: "Mike Torres",
        initial: "M",
        age: "15m",
        title: "Win/loss analysis: Enterprise Q4",
        body: "Leadership wants insights on why we lost 3 deals to Clari last month.",
        avatarClass: "from-blue-400 to-blue-600",
        unread: true,
    },
    {
        id: "julia",
        name: "Julia Park",
        initial: "J",
        age: "1h",
        title: "Outreach positioning refresh",
        body: "Their new messaging overlaps with our value props. Need differentiation.",
        avatarClass: "from-emerald-400 to-emerald-600",
        unread: false,
    },
] as const;

export function QuietWork() {
    return (
        <Section className="py-16 md:py-20">
            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-2xl md:text-3xl text-zinc-900 text-balance">
                            The work nobody sees
                        </h2>
                        <p className="mt-4 text-base text-zinc-600 leading-relaxed text-pretty max-w-xl">
                            You were hired to launch products, not maintain them. Instead, you are buried in manual updates, scouring pricing pages, and scrubbing Gong calls for a single insight.
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 rounded-lg border border-red-100 bg-red-50/70 px-3 py-2 text-sm font-medium text-zinc-700">
                                <AlertCircle className="size-4 text-red-500" />
                                <span>High context switching</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg border border-amber-100 bg-amber-50/70 px-3 py-2 text-sm font-medium text-zinc-700">
                                <Clock className="size-4 text-amber-500" />
                                <span>Hours lost weekly</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 relative">
                        <div className="absolute -inset-4 bg-zinc-100/70 blur-2xl -z-10" />

                        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_14px_32px_-26px_rgba(24,24,27,0.35)] font-sans">
                            <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200 bg-zinc-50/80">
                                <div className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-primary" />
                                    <span className="text-sm font-medium text-zinc-700">Inbox</span>
                                    <span className="rounded-full bg-zinc-200/70 px-2.5 py-0.5 text-sm font-medium text-zinc-500">12</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="size-3 rounded-full bg-zinc-300/80" />
                                    <span className="size-3 rounded-full bg-zinc-300/80" />
                                    <span className="size-3 rounded-full bg-zinc-300/80" />
                                </div>
                            </div>

                            <div className="divide-y divide-zinc-200/90">
                                {inboxItems.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.15 }}
                                        viewport={{ once: true }}
                                        className={cn(
                                            "px-4 py-3.5 transition-colors hover:bg-zinc-50/70 cursor-pointer",
                                            item.unread ? "bg-primary/[0.02] border-l-[3px] border-l-primary" : "border-l-[3px] border-l-transparent"
                                        )}
                                    >
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <div className="flex items-center gap-3">
                                                <span className={cn("size-8 rounded-full bg-gradient-to-br flex items-center justify-center text-sm font-semibold text-white", item.avatarClass)}>
                                                    {item.initial}
                                                </span>
                                                <span className={cn("text-sm font-semibold", item.unread ? "text-zinc-800" : "text-zinc-500")}>
                                                    {item.name}
                                                </span>
                                            </div>
                                        <span className="text-sm text-zinc-400">{item.age}</span>
                                        </div>
                                        <p className={cn("text-base leading-snug mb-1.5", item.unread ? "font-semibold text-zinc-900" : "font-medium text-zinc-600")}>
                                            {item.title}
                                        </p>
                                        <p className={cn("text-sm leading-relaxed", item.unread ? "text-zinc-600" : "text-zinc-400")}>
                                            {item.body}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
