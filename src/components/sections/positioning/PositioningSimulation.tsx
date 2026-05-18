'use client'

import { Megaphone } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function PositioningSimulation() {
    return (
        <Section className="py-24 bg-white">
            <FadeIn>
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-zinc-400">
                        <div className="w-4 h-4 rounded border border-zinc-300 flex items-center justify-center">
                            <div className="w-2 h-0.5 bg-zinc-300" />
                            <div className="w-0.5 h-2 bg-zinc-300 -ml-2" />
                        </div>
                        <span className="text-sm font-medium">Example Interaction</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl text-zinc-900">
                        &quot;We need to reposition for enterprise.&quot;
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-zinc-100 shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-2 px-6 py-4 border-b border-zinc-50">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="p-8 md:p-10 space-y-8 bg-white min-h-[400px]">

                        {/* User Message - Right Aligned */}
                        <div className="flex justify-end">
                            <div className="flex gap-3 max-w-[80%] flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-zinc-200 shrink-0" />
                                <div className="bg-purple-600 text-white p-5 rounded-2xl rounded-tr-sm text-lg leading-relaxed shadow-sm">
                                    We&apos;re moving upmarket to enterprise. Our current messaging is too SMB-focused. Help me reposition.
                                </div>
                            </div>
                        </div>

                        {/* Agent Response */}
                        <div className="flex justify-start">
                            <div className="flex gap-4 max-w-[90%]">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600">
                                    <Megaphone className="w-6 h-6" />
                                </div>
                                <div className="space-y-4 w-full">
                                    <div className="bg-zinc-50 p-6 rounded-2xl rounded-tl-sm border border-zinc-100 text-zinc-600 text-lg leading-relaxed shadow-sm">
                                        <p className="mb-4">
                                            I&apos;ve analyzed your current messaging and 12 enterprise competitors. Here&apos;s your new positioning framework:
                                        </p>
                                        
                                        <div className="space-y-4 mt-4">
                                            <div className="bg-white p-4 rounded-xl border border-zinc-100">
                                                <div className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-2">New Positioning Statement</div>
                                                <p className="text-zinc-900 font-medium">&quot;The only competitive intelligence platform built for revenue teams at scale.&quot;</p>
                                            </div>
                                            
                                            <div className="bg-white p-4 rounded-xl border border-zinc-100">
                                                <div className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-2">Key Differentiator</div>
                                                <p className="text-zinc-700">Enterprise-grade security + real-time CI (competitors offer one or the other, not both)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            Generate Full Framework
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            Update Website Copy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
