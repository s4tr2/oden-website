'use client'

import { UserSearch, TrendingUp, AlertCircle } from "lucide-react";
import { Section, FadeIn } from "../layout-helpers";

export function BuyerSimulation() {
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
                        &quot;What do enterprise buyers care about?&quot;
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
                                <div className="bg-indigo-600 text-white p-5 rounded-2xl rounded-tr-sm text-lg leading-relaxed shadow-sm">
                                    We&apos;re moving upmarket. What do enterprise buyers actually care about when evaluating us?
                                </div>
                            </div>
                        </div>

                        {/* Agent Response */}
                        <div className="flex justify-start">
                            <div className="flex gap-4 max-w-[90%]">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
                                    <UserSearch className="w-6 h-6" />
                                </div>
                                <div className="space-y-4 w-full">
                                    <div className="bg-zinc-50 p-6 rounded-2xl rounded-tl-sm border border-zinc-100 text-zinc-600 text-lg leading-relaxed shadow-sm">
                                        <p className="mb-4">
                                            I analyzed 127 enterprise sales calls from the last quarter. Here are the top decision criteria:
                                        </p>
                                        
                                        <div className="space-y-3 mt-4">
                                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-100">
                                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">1</div>
                                                <div className="flex-1">
                                                    <span className="text-zinc-900 font-medium">Security & Compliance</span>
                                                    <p className="text-sm text-zinc-500">Mentioned in 89% of calls. SOC2 is table stakes.</p>
                                                </div>
                                                <TrendingUp className="w-4 h-4 text-green-500" />
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-100">
                                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">2</div>
                                                <div className="flex-1">
                                                    <span className="text-zinc-900 font-medium">Integration with existing stack</span>
                                                    <p className="text-sm text-zinc-500">Mentioned in 72% of calls. Salesforce is critical.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-100">
                                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">3</div>
                                                <div className="flex-1">
                                                    <span className="text-zinc-900 font-medium">Time to value</span>
                                                    <p className="text-sm text-zinc-500">58% ask about implementation timeline.</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-100 flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                            <p className="text-sm text-amber-800">
                                                <strong>Emerging trend:</strong> &quot;AI governance&quot; mentioned 3x more this quarter vs. last. Consider adding to messaging.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 flex-wrap">
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            Update Personas
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                                            Generate Report
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
