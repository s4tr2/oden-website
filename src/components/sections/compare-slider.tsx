'use client'

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal, Check, AlertCircle, FileText, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const AfterContent = () => (
    <div className="w-full h-full max-w-md mx-auto flex flex-col justify-center items-center text-center">
        <div className="mb-6 md:mb-8 p-3 md:p-4 rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
            <Check className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <h3 className="text-2xl md:text-3xl text-zinc-900 mb-2">Instant Clarity</h3>
        <p className="text-zinc-500 mb-6 md:mb-8 max-w-xs text-sm md:text-base">One verified answer, cited directly from your source of truth.</p>

        <div className="w-full bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-zinc-100 p-4 md:p-6 text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>

            {/* Question */}
            <div className="flex items-start gap-3 mb-4 border-b border-zinc-50 pb-4">
                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                    <span className=" font-bold text-zinc-500 text-xs">Q</span>
                </div>
                <div>
                    <p className="text-sm font-medium text-zinc-900">How do we position against Acme Corp?</p>
                </div>
            </div>

            {/* Answer */}
            <div className="space-y-3">
                <p className="text-sm text-zinc-600 leading-relaxed">
                    We win on <span className="font-semibold text-zinc-900">speed</span>. Acme takes 24h to sync, while we are real-time. Emphasize our <span className="font-semibold text-zinc-900">SOC2 compliance</span> for enterprise deals.
                </p>

                {/* Source */}
                <div className="flex items-center gap-2 mt-2">
                    <div className="text-xs uppercase tracking-wide text-zinc-400 font-medium">Source:</div>
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-orange-50/50 border border-orange-100 rounded text-xs text-zinc-900 hover:bg-orange-50 transition-colors cursor-pointer group">
                        <div className="w-3 h-3 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold">O</div>
                        <span className="font-medium group-hover:underline decoration-primary/30 underline-offset-2">Battlecard: Acme Corp</span>
                    </div>
                </div>
            </div>

            {/* Verification Badge */}
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-green-700 bg-green-50 inline-flex px-2 py-1 rounded-full border border-green-100">
                <Check className="w-3 h-3" />
                <span>Verified by Product Marketing</span>
            </div>
        </div>
    </div>
);

const BeforeContent = () => (
    <div className="w-full h-full max-w-md mx-auto flex flex-col justify-center items-center text-center min-w-[320px]">
        <div className="mb-6 md:mb-8 p-3 md:p-4 rounded-full bg-zinc-200 text-zinc-500">
            <Search className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <h3 className="text-2xl md:text-3xl text-zinc-400 mb-2">Endless Searching</h3>
        <p className="text-zinc-400 mb-6 md:mb-8 max-w-xs text-sm md:text-base">Digging through folders, pinging coworkers, and guessing.</p>

        <div className="w-full space-y-3 opacity-60 relative">
            {/* Chaotic scattered cards */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200/50 transform -rotate-2 translate-x-4">
                <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                    <span className="text-sm text-zinc-600">"Is this the v2 or v3 deck?"</span>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200/50 transform rotate-1 -translate-x-2 z-10">
                <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-red-400" />
                    <span className="text-sm text-zinc-600">Pricing_Final_FINAL.pdf</span>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-200/50 transform -rotate-1 translate-x-2">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-500">?</div>
                    <span className="text-sm text-zinc-600">"Hey, do you have that link?"</span>
                </div>
            </div>
        </div>
    </div>
);

export function CompareSlider() {
    const [isDragging, setIsDragging] = useState(false);
    const x = useMotionValue(50); // Start at 50%
    const widthPercentage = useTransform(x, (value) => `${value}%`);

    const updatePosition = (clientX: number, rect: DOMRect) => {
        const offsetX = clientX - rect.left;
        const percentage = (offsetX / rect.width) * 100;
        x.set(Math.min(Math.max(percentage, 0), 100));
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        updatePosition(e.clientX, rect);
    };

    const handleTouchStart = () => {
        setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length > 0) {
            const rect = e.currentTarget.getBoundingClientRect();
            updatePosition(e.touches[0].clientX, rect);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            className={cn(
                "relative w-full h-[520px] md:h-[500px] rounded-2xl overflow-hidden select-none shadow-2xl shadow-zinc-200/50 ring-1 ring-zinc-100",
                "cursor-col-resize"
            )}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* AFTER (Background Layer - The Solution) */}
            <div className="absolute inset-0 bg-white flex items-center justify-center p-4 pb-12 md:p-8">
                <AfterContent />
            </div>

            {/* BEFORE (Foreground Layer - The Problem) */}
            <motion.div
                className="absolute inset-0 bg-zinc-100 border-r border-white/20 overflow-hidden"
                style={{ width: widthPercentage }}
            >
                <div className="absolute inset-0 w-full h-full p-4 pb-12 md:p-8 flex items-center justify-center">
                    <BeforeContent />
                </div>
            </motion.div>

            {/* Slider Handle */}
            <motion.div
                className="absolute top-0 bottom-0 w-px bg-white z-20 cursor-col-resize"
                style={{ left: widthPercentage }}
            >
                <div className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-zinc-100 transition-transform",
                    isDragging && "scale-110"
                )}>
                    <MoveHorizontal className="w-5 h-5 md:w-4 md:h-4 text-zinc-900" />
                </div>
            </motion.div>

            {/* Labels */}
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-8 text-xs font-bold text-zinc-400 uppercase tracking-widest pointer-events-none">
                The Old Way
            </div>
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-8 text-xs font-bold text-zinc-900 uppercase tracking-widest pointer-events-none">
                With Oden
            </div>
        </div>
    );
}
