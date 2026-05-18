'use client'

import { FadeIn, siteShellClassName } from './layout-helpers'
import {
    Home01Icon,
    ChartLineData02Icon,
    Layers01Icon,
    File01Icon,
    MessageMultiple01Icon,
    Settings01Icon,
    UserIcon,
    Add01Icon,
    Cancel01Icon,
    AttachmentIcon,
    ArrowUp01Icon,
    GridViewIcon,
    Rocket01Icon,
    BookOpen01Icon,
    Search01Icon,
    Building03Icon,
    PaintBrush04Icon,
    Folder01Icon,
    Target01Icon,
} from 'hugeicons-react'

// Stats data
const stats = [
    { label: 'CALLS', value: '03' },
    { label: 'BUYER PAIN POINTS', value: '03' },
    { label: 'SALES OBJECTIONS', value: '03' },
    { label: 'COMPETITORS', value: '07' },
]

// Muted 3-color palette based on count
const COLOR_HIGH = '#2DD4BF'    // Teal — high counts (3-4)
const COLOR_MED = '#FBBF24'     // Amber — medium counts (2)
const COLOR_LOW = '#A78BFA'     // Soft purple — low counts (1)

const getColor = (count: number) => count >= 3 ? COLOR_HIGH : count === 2 ? COLOR_MED : COLOR_LOW

// Pain points
const painPoints = [
    { text: 'Competitive Positioning and Market Share Loss', count: 4, width: '100%' },
    { text: 'Operational Inefficiencies and Cost Escalation', count: 4, width: '100%' },
    { text: 'Resource Allocation and Team Productivity Issues', count: 2, width: '50%' },
]

// Objections
const objections = [
    { text: 'Product Gap and Feature Objections', count: 4, width: '100%' },
    { text: 'Vendor Trust and Partnership Concerns', count: 2, width: '50%' },
    { text: 'Pricing and Value Justification Challenges', count: 1, width: '25%' },
]

// Feature requests
const featureRequests = [
    { text: 'Content Generation and Templating', count: 3, width: '75%' },
    { text: 'Data Management and Curation', count: 2, width: '50%' },
    { text: 'Permissions and Admin Controls', count: 2, width: '50%' },
    { text: 'Data Import and Integration', count: 1, width: '25%' },
    { text: 'Automation and Workflows', count: 1, width: '25%' },
]

// Desired benefits & outcomes
const benefits = [
    { text: 'Team Productivity and Enablement', count: 3, width: '100%' },
    { text: 'Operational Efficiency and Cost Reduction', count: 2, width: '66%' },
    { text: 'Risk Reduction and Compliance', count: 1, width: '33%' },
]

// Use cases
const useCases = [
    { text: 'Content Marketing and Generation Workflows', count: 2 },
    { text: 'Sales Intelligence and VoC Workflows', count: 2 },
    { text: 'Web Content and CMS Operations', count: 1 },
]


// Chat suggestions
const chatSuggestions = [
    ['Competitive intelligence', 'Generate battlecard'],
    ['Buyer intelligence', 'Win–loss analysis'],
    ['Analyze Reddit/G2 reviews', 'Create a case study'],
]

function DashboardMockup() {
    return (
        <div className="flex h-full w-full overflow-hidden rounded-[6px] bg-[#FAFAFA] text-[#1A1A1A]">
            {/* Left Sidebar */}
            <div className="hidden md:flex w-12 shrink-0 flex-col items-center gap-3 border-r border-[#EBEBEB] bg-white py-4">
                {/* Oden Logo */}
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#1A1A1A] text-white text-[14px] font-bold" style={{ fontFamily: 'var(--font-pixelify)' }}>O</div>
                
                {/* Main Nav */}
                <Home01Icon size={16} className="text-[#555]" />
                <Building03Icon size={16} className="text-[#C0C0C0]" />
                <PaintBrush04Icon size={16} className="text-[#C0C0C0]" />
                
                {/* Divider - Content */}
                <div className="my-1 h-px w-6 bg-[#EBEBEB]" />
                <File01Icon size={16} className="text-[#C0C0C0]" />
                <Folder01Icon size={16} className="text-[#C0C0C0]" />
                <div className="relative">
                    <BookOpen01Icon size={16} className="text-[#C0C0C0]" />
                    <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[#EF4444]" />
                </div>
                
                {/* Divider - Research */}
                <div className="my-1 h-px w-6 bg-[#EBEBEB]" />
                <Layers01Icon size={16} className="text-[#C0C0C0]" />
                <Target01Icon size={16} className="text-[#C0C0C0]" />
                <div className="flex h-7 w-7 items-center justify-center rounded-md border border-[#E5E5E5] bg-[#FAFAFA]">
                    <MessageMultiple01Icon size={15} className="text-[#1A1A1A]" />
                </div>
                <ChartLineData02Icon size={16} className="text-[#C0C0C0]" />
                
                {/* Bottom Icons */}
                <div className="mt-auto flex flex-col items-center gap-3">
                    <Settings01Icon size={16} className="text-[#C0C0C0]" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-[#EBEBEB] bg-white px-4 py-2.5">
                    <span className="text-[14px] font-semibold">Call insights</span>
                    <div className="flex gap-1.5">
                        <span className="rounded-md bg-[#1A1A1A] px-2.5 py-1 text-[11px] font-medium text-white">Sales (3)</span>
                        <span className="rounded-md bg-[#F5F5F5] px-2.5 py-1 text-[11px] text-[#888]">CS (1)</span>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-4 border-b border-[#EBEBEB] bg-white px-4 py-4">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-[10px] uppercase tracking-wider text-[#999] mb-1">{stat.label}</p>
                            <p className="text-[28px] font-semibold tabular-nums leading-none">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="flex-1 overflow-hidden p-4">
                    <div className="grid grid-cols-2 gap-4">
                        {/* Buyer Pain Points */}
                        <div className="rounded-lg border border-[#EBEBEB] bg-white p-4">
                            <p className="mb-4 text-[13px] font-semibold">Buyer pain points (3)</p>
                            <div className="space-y-3">
                                {painPoints.map((item) => (
                                    <div key={item.text} className="flex items-center justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <p className="truncate text-[11px] text-[#555] leading-tight">{item.text}</p>
                                            <div className="mt-1.5 h-[5px] rounded-full bg-[#F0F0F0]">
                                                <div className="h-full rounded-full" style={{ background: getColor(item.count), width: item.width }} />
                                            </div>
                                        </div>
                                        <span className="text-[12px] font-semibold tabular-nums">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sales Objections */}
                        <div className="rounded-lg border border-[#EBEBEB] bg-white p-4">
                            <p className="mb-4 text-[13px] font-semibold">Sales objections (3)</p>
                            <div className="space-y-3">
                                {objections.map((item) => (
                                    <div key={item.text} className="flex items-center justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <p className="truncate text-[11px] text-[#555] leading-tight">{item.text}</p>
                                            <div className="mt-1.5 h-[5px] rounded-full bg-[#F0F0F0]">
                                                <div className="h-full rounded-full" style={{ background: getColor(item.count), width: item.width }} />
                                            </div>
                                        </div>
                                        <span className="text-[12px] font-semibold tabular-nums">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Feature Requests */}
                        <div className="rounded-lg border border-[#EBEBEB] bg-white p-4">
                            <p className="mb-4 text-[13px] font-semibold">Feature requests (5)</p>
                            <div className="space-y-3">
                                {featureRequests.map((item) => (
                                    <div key={item.text} className="flex items-center justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <p className="truncate text-[11px] text-[#555] leading-tight">{item.text}</p>
                                            <div className="mt-1.5 h-[5px] rounded-full bg-[#F0F0F0]">
                                                <div className="h-full rounded-full" style={{ background: getColor(item.count), width: item.width }} />
                                            </div>
                                        </div>
                                        <span className="text-[12px] font-semibold tabular-nums">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Buyer Roles */}
                        <div className="rounded-lg border border-[#EBEBEB] bg-white p-4">
                            <p className="mb-4 text-[13px] font-semibold">Buyer roles (4)</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLOR_HIGH }} />
                                    <span className="flex-1 text-[11px] text-[#555]">VP of Marketing</span>
                                    <span className="text-[12px] font-semibold">35%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLOR_HIGH }} />
                                    <span className="flex-1 text-[11px] text-[#555]">Director, PMM</span>
                                    <span className="text-[12px] font-semibold">30%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLOR_MED }} />
                                    <span className="flex-1 text-[11px] text-[#555]">Head of Product Marketing</span>
                                    <span className="text-[12px] font-semibold">20%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLOR_LOW }} />
                                    <span className="flex-1 text-[11px] text-[#555]">Senior PMM</span>
                                    <span className="text-[12px] font-semibold">15%</span>
                                </div>
                            </div>
                        </div>

                        {/* Desired benefits & outcomes */}
                        <div className="rounded-lg border border-[#EBEBEB] bg-white p-4">
                            <p className="mb-4 text-[13px] font-semibold">Desired benefits & outcomes (3)</p>
                            <div className="space-y-3">
                                {benefits.map((item) => (
                                    <div key={item.text} className="flex items-center justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <p className="truncate text-[11px] text-[#555] leading-tight">{item.text}</p>
                                            <div className="mt-1.5 h-[5px] rounded-full bg-[#F0F0F0]">
                                                <div className="h-full rounded-full" style={{ background: getColor(item.count), width: item.width }} />
                                            </div>
                                        </div>
                                        <span className="text-[12px] font-semibold tabular-nums">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Use cases */}
                        <div className="rounded-lg border border-[#EBEBEB] bg-white p-4">
                            <p className="mb-4 text-[13px] font-semibold">Use cases (3)</p>
                            <div className="space-y-3">
                                {useCases.map((item) => (
                                    <div key={item.text} className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2 flex-1 min-w-0">
                                            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: getColor(item.count) }} />
                                            <p className="truncate text-[11px] text-[#555] leading-tight">{item.text}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-[5px] rounded-full bg-[#F0F0F0]">
                                                <div className="h-full rounded-full" style={{ background: getColor(item.count), width: item.count === 2 ? '100%' : '50%' }} />
                                            </div>
                                            <span className="text-[12px] font-semibold tabular-nums">{item.count}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Chat Panel - Made Bigger */}
            <div className="hidden lg:flex w-[280px] shrink-0 flex-col border-l border-[#EBEBEB] bg-white">
                <style>{`
                    @keyframes chat-fade-in {
                        from { opacity: 0; transform: translateY(8px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes typing-dots {
                        0%, 20% { opacity: 0.3; }
                        50% { opacity: 1; }
                        80%, 100% { opacity: 0.3; }
                    }
                    @keyframes progress-fill {
                        from { width: 0%; }
                        to { width: 100%; }
                    }
                    .chat-msg-1 { animation: chat-fade-in 0.4s ease-out 0.5s both; }
                    .chat-msg-2 { animation: chat-fade-in 0.4s ease-out 1.5s both; }
                    .chat-msg-3 { animation: chat-fade-in 0.4s ease-out 3s both; }
                    .chat-msg-4 { animation: chat-fade-in 0.4s ease-out 4.5s both; }
                    .typing-dot { animation: typing-dots 1.4s infinite; }
                    .typing-dot:nth-child(2) { animation-delay: 0.2s; }
                    .typing-dot:nth-child(3) { animation-delay: 0.4s; }
                    .progress-bar-fill { animation: progress-fill 1.5s ease-out 3.5s both; }
                `}</style>
                
                {/* Chat Header Tabs */}
                <div className="flex items-center justify-between border-b border-[#EBEBEB] px-3 py-2.5">
                    <div className="flex items-center gap-1.5">
                        <span className="flex items-center gap-1 rounded bg-[#1A1A1A] px-2 py-1 text-[10px] text-white">
                            Sales deck update
                            <Cancel01Icon size={10} className="text-white/60" />
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Add01Icon size={14} className="text-[#888]" />
                        <Settings01Icon size={14} className="text-[#888]" />
                    </div>
                </div>

                <div className="flex flex-1 flex-col p-3 overflow-y-auto">
                    {/* Chat Messages */}
                    <div className="space-y-3">
                        {/* User Message */}
                        <div className="chat-msg-1 flex justify-end">
                            <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[#1A1A1A] px-3 py-2 text-[11px] text-white leading-relaxed">
                                Update the sales objection deck with the latest call insights
                            </div>
                        </div>
                        
                        {/* AI Response */}
                        <div className="chat-msg-2 flex justify-start">
                            <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-[#F5F5F5] px-3 py-2">
                                <p className="text-[11px] text-[#1A1A1A] leading-relaxed">I&apos;ll update the sales objection deck with the 3 new objections from your recent calls.</p>
                            </div>
                        </div>
                        
                        {/* AI Response - Progress */}
                        <div className="chat-msg-3 flex justify-start">
                            <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-[#F5F5F5] px-3 py-2.5">
                                <p className="text-[10px] font-medium text-[#555] mb-2">Updating deck...</p>
                                <div className="space-y-1.5">
                                    <div className="flex items-center gap-2">
                                        <div className="h-1 flex-1 rounded-full bg-[#E0E0E0] overflow-hidden">
                                            <div className="progress-bar-fill h-full rounded-full bg-[#2DD4BF]" />
                                        </div>
                                    </div>
                                    <p className="text-[9px] text-[#888]">Adding: &quot;Product Gap and Feature Objections&quot;</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* AI Response - Done */}
                        <div className="chat-msg-4 flex justify-start">
                            <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-[#F0FDF4] border border-[#BBF7D0] px-3 py-2.5">
                                <div className="flex items-center gap-1.5 mb-1.5">
                                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#22C55E]">
                                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-[11px] font-medium text-[#166534]">Done!</span>
                                </div>
                                <p className="text-[10px] text-[#166534]/80 mb-2">Sales objection deck updated with 3 new objections.</p>
                                <a href="#" className="flex items-center gap-1.5 rounded-lg border border-[#22C55E]/30 bg-white px-2.5 py-1.5 text-[10px] font-medium text-[#166534] hover:bg-[#F0FDF4] transition-colors">
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Sales_Objection_Deck_v2.pdf
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input */}
                <div className="border-t border-[#EBEBEB] p-3">
                    <div className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] px-3 py-2.5">
                        <p className="mb-2 text-[11px] text-[#AAA]">Ask a follow-up...</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <AttachmentIcon size={14} className="text-[#888]" />
                            </div>
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#EBEBEB]">
                                <ArrowUp01Icon size={14} className="text-[#888]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ProductMedia() {
    return (
        <section className="relative w-full overflow-hidden pb-16 md:pb-20" id="how-it-does">
            <div className={`${siteShellClassName} relative z-10`}>
                <FadeIn>
                    <div className="mx-auto max-w-[1020px]">
                        <div className="rounded-xl border border-[#E3E3E3] bg-[#F0F0F0] p-2.5 shadow-[0_25px_70px_rgba(16,24,40,0.06)] md:p-3">
                            <div className="mb-2.5 flex items-center gap-2 md:mb-3">
                                <span className="size-3 rounded-full bg-[#FBC7C5]" />
                                <span className="size-3 rounded-full bg-[#F8E0BF]" />
                                <span className="size-3 rounded-full bg-[#C4E5C0]" />
                            </div>
                            <div className="relative aspect-[1093/673] overflow-hidden rounded-[10px] bg-white">
                                <DashboardMockup />
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
