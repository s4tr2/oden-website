'use client'

import { Clock, Inbox } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function ContentProblem() {
    return (
        <Section className="py-24">
            <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column: The Problem */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl mb-4 text-zinc-900">
                                The backlog never shrinks.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Sales needs case studies. Product wants launch posts. Leadership requested thought leadership. You&apos;re one person with 47 requests and zero time to actually write.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <Clock className="w-4 h-4 text-red-500" />
                                </div>
                                <span className="text-zinc-600">2-3 weeks to produce a case study</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                                    <Inbox className="w-4 h-4 text-orange-500" />
                                </div>
                                <span className="text-zinc-600">Content requests outpace capacity 5:1</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Mock */}
                    <div className="relative">
                        {/* The Old Way Badge */}
                        <div className="absolute -top-3 right-4 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase z-20 shadow-sm border border-red-200">
                            The Old Way
                        </div>

                        <div className="relative bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm">
                            {/* Header */}
                            <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                                    </div>
                                    <div className="text-xs text-zinc-400">Content Request Queue</div>
                                </div>
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">28 pending</span>
                            </div>
                            
                            {/* Queue items */}
                            <div className="divide-y divide-zinc-100">
                                {[
                                    { text: "Case Study: Acme Corp", days: "12", priority: "high" },
                                    { text: "Blog: Feature Announcement", days: "8", priority: "high" },
                                    { text: "One-pager: Enterprise", days: "15", priority: "medium" },
                                    { text: "Sales Deck Update", days: "6", priority: "high" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${item.priority === 'high' ? 'bg-red-400' : 'bg-amber-400'}`} />
                                            <span className="text-sm text-zinc-700">{item.text}</span>
                                        </div>
                                        <span className="text-xs text-zinc-400">waiting {item.days}d</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="px-4 py-3 bg-zinc-50 border-t border-zinc-200">
                                <span className="text-xs text-zinc-400">+ 24 more requests waiting...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
