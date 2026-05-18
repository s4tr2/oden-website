'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hash, Search, Bell, Info, Smile, Paperclip, Send, MoreHorizontal, Check, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function SlackSimulation() {
    const [step, setStep] = useState(0);

    // Animation sequence
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Reset and start animation sequence
                    setStep(0);

                    // Sequence timings
                    setTimeout(() => setStep(1), 1000); // Rep message
                    setTimeout(() => setStep(2), 2500); // Oden Thinking/Typing
                    setTimeout(() => setStep(3), 4000); // Oden Answer
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById("slack-demo");
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="slack-demo" className="w-full mx-auto bg-white rounded shadow-2xl overflow-hidden border border-zinc-200 font-sans text-sm md:text-base leading-relaxed">
            {/* Slack Header */}
            <div className="bg-[#350d36] h-10 flex items-center px-4 justify-between shrink-0">
                <div className="flex items-center gap-4 opacity-80">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                </div>
                {/* Search bar - hidden on mobile */}
                <div className="hidden md:block flex-1 text-center">
                    <div className="bg-white/10 text-white/90 text-xs px-4 py-1 rounded inline-flex items-center gap-2 border border-white/5">
                        <Search className="w-3 h-3 opacity-70" />
                        <span className="opacity-70">Search Acme Corp</span>
                    </div>
                </div>
                <div className="hidden md:block w-16"></div> {/* Spacer */}
            </div>

            <div className="flex h-[500px] md:h-[600px]">
                {/* Sidebar (Hidden on mobile for space) */}
                <div className="hidden md:flex flex-col w-[220px] bg-[#3f0e40] shrink-0 text-[#cfc3cf]">
                    <div className="p-4 flex items-center gap-2 border-b border-white/10 mb-2">
                        <span className="font-bold text-white truncate">Acme Corp</span>
                        <span className="ml-auto"><Bell className="w-3 h-3" /></span>
                    </div>
                    <div className="px-4 py-1 text-opacity-80 flex items-center gap-2 hover:bg-[#350d36] cursor-pointer">
                        <Hash className="w-3 h-3 opacity-70" />
                        <span>general</span>
                    </div>
                    <div className="px-4 py-1 bg-[#1164A3] text-white flex items-center gap-2 cursor-pointer">
                        <Hash className="w-3 h-3 opacity-70" />
                        <span className="font-medium">sales-enablement</span>
                    </div>
                    <div className="px-4 py-1 text-opacity-80 flex items-center gap-2 hover:bg-[#350d36] cursor-pointer">
                        <Hash className="w-3 h-3 opacity-70" />
                        <span>random</span>
                    </div>
                    <div className="mt-6 px-4 mb-2 text-xs font-semibold opacity-60 uppercase tracking-wide">Direct Messages</div>
                    <div className="px-4 py-1 text-opacity-80 flex items-center gap-2 hover:bg-[#350d36] cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Sarah (Sales)</span>
                    </div>
                    <div className="px-4 py-1 text-opacity-80 flex items-center gap-2 hover:bg-[#350d36] cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="font-bold text-white">Oden</span>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col bg-white min-w-0">
                    {/* Channel Header */}
                    <div className="h-12 border-b border-zinc-200 flex items-center justify-between px-4 shrink-0 bg-white">
                        <div className="flex items-center gap-1 overflow-hidden">
                            <Hash className="w-4 h-4 text-zinc-500 shrink-0" />
                            <span className="font-bold text-zinc-900 truncate">sales-enablement</span>
                        </div>
                        <div className="flex items-center gap-4 text-zinc-400">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded bg-zinc-200 border-2 border-white"></div>
                                <div className="w-6 h-6 rounded bg-zinc-300 border-2 border-white"></div>
                                <div className="w-6 h-6 rounded bg-zinc-400 border-2 border-white"></div>
                            </div>
                            <Info className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-white">

                        {/* Rep Message */}
                        <AnimatePresence>
                            {step >= 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-3 group"
                                >
                                    <div className="w-9 h-9 rounded bg-blue-100 flex items-center justify-center shrink-0">
                                        <span className="font-bold text-blue-700 text-xs">S</span>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-bold text-zinc-900">Sarah</span>
                                            <span className="text-xs text-zinc-500">10:42 AM</span>
                                        </div>
                                        <p className="text-zinc-800">
                                            <span className="bg-[#1d9bd1]/10 text-[#1264a3] rounded px-0.5 font-medium">@Oden</span> How do we position against Competitor X's new pricing?
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Oden Typing... */}
                        <AnimatePresence>
                            {step === 2 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex gap-3 ml-12"
                                >
                                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                                        Oden is thinking<span className="animate-pulse">...</span>
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>


                        {/* Oden Response */}
                        <AnimatePresence>
                            {step >= 3 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-3 group"
                                >
                                    <div className="w-9 h-9 rounded bg-black flex items-center justify-center shrink-0 text-white font-bold text-sm">
                                        O
                                    </div>
                                    <div className="min-w-0 w-full">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold text-zinc-900">Oden</span>
                                            <span className="text-xs bg-zinc-100 text-zinc-500 px-1 rounded uppercase tracking-wider font-medium border border-zinc-200">App</span>
                                            <span className="text-xs text-zinc-500">10:42 AM</span>
                                        </div>
                                        <div className="text-zinc-800 space-y-3">
                                            <p>
                                                We emphasize our <strong>unlimited seats</strong> vs their per-user model.
                                            </p>
                                            <p>
                                                Key talking point: <span className="bg-yellow-50 px-1">"Competitor X penalizes you for growth. We enable it."</span>
                                            </p>

                                            {/* Attachment */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 }}
                                                className="flex items-center gap-3 p-3 border border-zinc-200 rounded hover:bg-zinc-50 hover:border-zinc-300 transition-colors cursor-pointer group/file bg-white max-w-md relative overflow-hidden"
                                            >
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                                                <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center shrink-0 text-white font-bold text-xs">
                                                    O
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="font-medium text-zinc-900 text-sm truncate group-hover/file:text-primary transition-colors">Pricing Comparison: Competitor X</div>
                                                    <div className="text-xs text-zinc-500 flex items-center gap-1.5">
                                                        <span>Oden Platform</span>
                                                        <span className="w-0.5 h-0.5 rounded-full bg-zinc-300"></span>
                                                        <span>Updated today</span>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Source Verification */}
                                            <div className="flex items-center gap-2 mt-2">
                                                <div className="flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                                    <Check className="w-3 h-3" />
                                                    <span>Verified by Marketing Team (Yesterday)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Input Area (Visual Only) */}
                    <div className="p-4 pt-0">
                        <div className="border border-zinc-300 rounded overflow-hidden shadow-sm">
                            <div className="bg-zinc-50 px-2 py-1.5 flex gap-1 border-b border-zinc-200/50">
                                <div className="p-1 hover:bg-zinc-200 rounded text-zinc-500"><span className="font-bold">B</span></div>
                                <div className="p-1 hover:bg-zinc-200 rounded text-zinc-500"><span className="">I</span></div>
                                <div className="p-1 hover:bg-zinc-200 rounded text-zinc-500"><span className="line-through">S</span></div>
                            </div>
                            <div className="h-10 px-3 py-2 text-zinc-400 text-sm">Message #sales-enablement</div>
                            <div className="flex justify-between items-center px-2 py-1.5">
                                <div className="flex gap-2">
                                    <div className="p-1 hover:bg-zinc-100 rounded text-zinc-400"><Smile className="w-4 h-4" /></div>
                                    <div className="p-1 hover:bg-zinc-100 rounded text-zinc-400"><Paperclip className="w-4 h-4" /></div>
                                </div>
                                <div className="bg-zinc-300 text-white p-1.5 rounded opacity-50">
                                    <Send className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
