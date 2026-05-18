'use client'

import { FileText, Quote } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function ContentSimulation() {
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
                        &quot;I need a case study by Friday.&quot;
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
                                <div className="bg-orange-600 text-white p-5 rounded-2xl rounded-tr-sm text-lg leading-relaxed shadow-sm">
                                    Create a case study for TechCorp. They reduced churn by 40% after implementing us. Need it by Friday.
                                </div>
                            </div>
                        </div>

                        {/* Agent Response */}
                        <div className="flex justify-start">
                            <div className="flex gap-4 max-w-[90%]">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-600">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div className="space-y-4 w-full">
                                    <div className="bg-zinc-50 p-6 rounded-2xl rounded-tl-sm border border-zinc-100 text-zinc-600 text-lg leading-relaxed shadow-sm">
                                        <p className="mb-4">
                                            I&apos;ve pulled data from your CRM and the customer interview from last month. Here&apos;s a draft:
                                        </p>
                                        
                                        <div className="bg-white p-5 rounded-xl border border-zinc-100 space-y-4">
                                            <div className="text-sm font-medium text-orange-600 uppercase tracking-wide">Case Study Preview</div>
                                            <h4 className="text-xl text-zinc-900">How TechCorp Reduced Churn 40% in 90 Days</h4>
                                            
                                            <div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
                                                <Quote className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
                                                <p className="text-sm text-zinc-600">&quot;We finally have visibility into at-risk accounts before they churn.&quot; - Sarah Chen, VP Customer Success</p>
                                            </div>
                                            
                                            <div className="grid grid-cols-3 gap-3 pt-2">
                                                <div className="text-center p-2 bg-orange-50 rounded">
                                                    <div className="text-2xl font-bold text-orange-600">40%</div>
                                                    <div className="text-xs text-zinc-500">Churn reduction</div>
                                                </div>
                                                <div className="text-center p-2 bg-orange-50 rounded">
                                                    <div className="text-2xl font-bold text-orange-600">90</div>
                                                    <div className="text-xs text-zinc-500">Days to value</div>
                                                </div>
                                                <div className="text-center p-2 bg-orange-50 rounded">
                                                    <div className="text-2xl font-bold text-orange-600">$2.1M</div>
                                                    <div className="text-xs text-zinc-500">Revenue saved</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            Edit Draft
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            Generate PDF
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
