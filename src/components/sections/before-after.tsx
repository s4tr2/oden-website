'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { siteShellClassName, Eyebrow } from './layout-helpers'

// ─── Cycling step hook ────────────────────────────────────────────────────────
// Advances through a sequence of phases, each held for its own duration
function usePhasedCycle(phases: { show: number; duration: number }[]) {
    const [idx, setIdx] = useState(0)
    useEffect(() => {
        const t = setTimeout(
            () => setIdx(i => (i + 1) % phases.length),
            phases[idx].duration,
        )
        return () => clearTimeout(t)
    }, [idx]) // eslint-disable-line react-hooks/exhaustive-deps
    return phases[idx].show
}

// ─── BEFORE illustrations ─────────────────────────────────────────────────────

/** Card 1 — A search bar cycling through frantic lookups */
function ScavengerIllustration() {
    const queries = [
        'Gong call · March 12…',
        'Notion positioning doc…',
        'Slack thread on pricing…',
        'G2 review summary…',
        'Email from AE last week…',
    ]
    const visible = usePhasedCycle(
        queries.map((_, i) => ({ show: i, duration: i === queries.length - 1 ? 600 : 1600 })),
    )

    return (
        <div className="mb-5 flex h-[168px] items-center justify-center overflow-hidden rounded-xl px-5"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, #FDECC8 0%, transparent 65%), linear-gradient(145deg, #FBF4E9 0%, #EDD9B8 100%)' }}>
            <div className="w-full overflow-hidden rounded-xl border bg-white px-4 py-3 shadow-sm"
                style={{ borderColor: '#E6D4B0' }}>
                <p className="mb-1.5 text-[10px] uppercase tracking-widest" style={{ color: '#C4933F' }}>
                    Searching…
                </p>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={visible}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.25 }}
                        className="truncate text-[13px]"
                        style={{ color: '#6B5539' }}
                    >
                        {queries[visible]}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    )
}

/** Card 2 — Slack-style chat: rep sends stale deck, prospect corrects them */
const CHAT_PHASES = [
    { show: 0, duration: 600 },
    { show: 1, duration: 1600 },
    { show: 2, duration: 1800 },
    { show: 3, duration: 2400 },
    { show: 3, duration: 900 }, // hold before reset
]

function ChatIllustration() {
    const visible = usePhasedCycle(CHAT_PHASES)

    return (
        <div className="mb-5 flex h-[168px] flex-col justify-end gap-1.5 overflow-hidden rounded-xl px-4 pb-4 pt-3"
            style={{ background: 'radial-gradient(ellipse at 80% 20%, #F5D9B8 0%, transparent 60%), linear-gradient(160deg, #F8EFE4 0%, #E8D5BC 100%)' }}>
            <AnimatePresence>
                {visible >= 1 && (
                    <motion.div
                        key="msg1"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-end"
                    >
                        <div className="max-w-[78%] rounded-xl rounded-br-sm px-3 py-1.5 text-[11.5px] leading-[1.4] text-white"
                            style={{ background: '#3D2B18' }}>
                            Here's our deck — pricing from $499/mo
                        </div>
                    </motion.div>
                )}
                {visible >= 2 && (
                    <motion.div
                        key="msg2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                    >
                        <div className="max-w-[78%] rounded-xl rounded-bl-sm border bg-white px-3 py-1.5 text-[11.5px] leading-[1.4] shadow-sm"
                            style={{ borderColor: '#E6D4B0', color: '#5C4030' }}>
                            Wait — their site says $399 now?
                        </div>
                    </motion.div>
                )}
                {visible >= 3 && (
                    <motion.div
                        key="msg3"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-end"
                    >
                        <div className="max-w-[78%] rounded-xl rounded-br-sm px-3 py-1.5 text-[11.5px] leading-[1.4]"
                            style={{ background: '#E8D5BC', color: '#8C6A44' }}>
                            …let me check 😬
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

/** Card 3 — Tool name pills scattered, no clear path */
const TOOLS = ['Gong', 'G2', 'Notion', 'Slack', 'ChatGPT', 'Docs', 'Figma', 'Airtable']
const OFFSETS: { rotate: number; opacity: number }[] = [
    { rotate: -2, opacity: 1 },
    { rotate: 1.5, opacity: 0.9 },
    { rotate: -1, opacity: 1 },
    { rotate: 2.5, opacity: 0.85 },
    { rotate: -3, opacity: 0.95 },
    { rotate: 1, opacity: 0.8 },
    { rotate: -1.5, opacity: 0.9 },
    { rotate: 2, opacity: 0.85 },
]

const PILL_COLORS = [
    { bg: '#FEF0E4', border: '#F5D5B0', text: '#A0520A' }, // amber — Gong
    { bg: '#FDE8E8', border: '#F5C5C5', text: '#A02020' }, // rose — G2
    { bg: '#F0EBF8', border: '#D5C5EC', text: '#5E3A9A' }, // lavender — Notion
    { bg: '#E8F0FE', border: '#C5D5F5', text: '#2A5DB0' }, // blue — Slack
    { bg: '#E8F5EE', border: '#C0DEC8', text: '#1A7A42' }, // green — ChatGPT
    { bg: '#FEF9E4', border: '#F0DDA0', text: '#8A6A00' }, // yellow — Docs
    { bg: '#FDE8F4', border: '#F0C0DC', text: '#9A2068' }, // pink — Figma
    { bg: '#E8F5F5', border: '#B8DCDC', text: '#1A6A6A' }, // teal — Airtable
]

function ChaosIllustration() {
    return (
        <div className="mb-5 flex h-[168px] flex-wrap content-center items-center justify-center gap-1.5 overflow-hidden rounded-xl px-4"
            style={{ background: 'radial-gradient(ellipse at 50% 110%, #F0D8A8 0%, transparent 55%), linear-gradient(170deg, #FAF3EC 0%, #EEE0C8 100%)' }}>
            {TOOLS.map((tool, i) => (
                <span
                    key={tool}
                    className="rounded-lg border px-2.5 py-1 text-[11px] font-medium"
                    style={{
                        transform: `rotate(${OFFSETS[i].rotate}deg)`,
                        opacity: OFFSETS[i].opacity,
                        background: PILL_COLORS[i].bg,
                        borderColor: PILL_COLORS[i].border,
                        color: PILL_COLORS[i].text,
                    }}
                >
                    {tool}
                </span>
            ))}
            <span className="w-full text-center text-[10px]" style={{ color: '#C4933F' }}>
                ← nothing connects →
            </span>
        </div>
    )
}

// ─── AFTER illustrations ──────────────────────────────────────────────────────

/** Card 1 — Signals flowing into a single inbox */
const SIGNAL_SOURCES = ['Call', 'G2', 'Slack', 'Docs', 'Gong']

function SignalFlowIllustration() {
    const [active, setActive] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setActive(a => (a + 1) % SIGNAL_SOURCES.length), 900)
        return () => clearInterval(t)
    }, [])

    return (
        <div className="mb-5 flex h-[168px] items-center justify-between overflow-hidden rounded-xl px-6"
            style={{ background: 'radial-gradient(ellipse at 85% 50%, #C8C4FF 0%, transparent 55%), linear-gradient(145deg, #F2F1FF 0%, #E2DFFF 100%)' }}>
            {/* Sources */}
            <div className="flex flex-col gap-1.5">
                {SIGNAL_SOURCES.map((s, i) => (
                    <motion.span
                        key={s}
                        animate={{
                            opacity: active === i ? 1 : 0.3,
                            x: active === i ? 2 : 0,
                            background: active === i ? '#EAE8FF' : '#ffffff',
                            borderColor: active === i ? '#9B96F5' : '#DDD9FF',
                        }}
                        className="rounded-md border px-2 py-0.5 text-[10px] font-medium shadow-sm"
                        style={{ color: '#0007cb' }}
                    >
                        {s}
                    </motion.span>
                ))}
            </div>

            {/* Animated dot flowing right */}
            <div className="relative mx-3 h-px flex-1" style={{ background: '#C5C2F8' }}>
                <AnimatePresence>
                    <motion.div
                        key={active}
                        className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full"
                        style={{ background: '#0007cb' }}
                        initial={{ left: '0%', opacity: 1 }}
                        animate={{ left: '100%', opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeIn' }}
                    />
                </AnimatePresence>
            </div>

            {/* Inbox */}
            <div className="flex size-10 items-center justify-center rounded-xl shadow-md"
                style={{ background: '#0007cb' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 10l2-6h8l2 6H2z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
                    <path d="M2 10h3l1 2h4l1-2h3" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

/** Card 2 — A battle card that auto-updates after a competitor changes price */
const UPDATE_PHASES = [
    { show: 0, duration: 2000 }, // stale state
    { show: 1, duration: 800 },  // updating pulse
    { show: 2, duration: 2400 }, // updated — hold
]

function LiveUpdateIllustration() {
    const visible = usePhasedCycle(UPDATE_PHASES)

    return (
        <div className="mb-5 flex h-[168px] items-center justify-center overflow-hidden rounded-xl px-5"
            style={{ background: 'radial-gradient(ellipse at 50% -20%, #C0BCFF 0%, transparent 60%), linear-gradient(160deg, #F2F1FF 0%, #DDDAFF 100%)' }}>
            <div className="w-full rounded-xl border bg-white p-4 shadow-sm"
                style={{ borderColor: '#D0CEFF' }}>
                <div className="mb-2 flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-widest" style={{ color: '#0007cb', opacity: 0.5 }}>
                        Battle card
                    </p>
                    <AnimatePresence mode="wait">
                        {visible === 0 && (
                            <motion.span key="stale" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="rounded-full px-2 py-0.5 text-[9px]"
                                style={{ background: '#FEF3C7', color: '#92400E' }}>
                                3 days old
                            </motion.span>
                        )}
                        {visible === 1 && (
                            <motion.span key="syncing" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.5, 1] }} exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, repeat: 1 }}
                                className="rounded-full px-2 py-0.5 text-[9px]"
                                style={{ background: '#ECEAFF', color: '#0007cb' }}>
                                syncing…
                            </motion.span>
                        )}
                        {visible === 2 && (
                            <motion.span key="live" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                                className="rounded-full px-2 py-0.5 text-[9px]"
                                style={{ background: '#D1FAE5', color: '#065F46' }}>
                                ✓ just now
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={visible}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[12px] leading-[1.4]"
                        style={{ color: '#1A1A4A' }}
                    >
                        {visible < 2
                            ? 'Competitor pricing: $499/mo (Enterprise tier)'
                            : 'Competitor pricing: $399/mo — dropped Tuesday ↓'}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    )
}

/** Card 3 — Clean hub: one source feeds everything */
const SPOKES = ['Deck', 'Battle card', 'Web copy', 'Talk track', 'Onboarding']

function HubIllustration() {
    const [lit, setLit] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setLit(l => (l + 1) % SPOKES.length), 800)
        return () => clearInterval(t)
    }, [])

    return (
        <div className="mb-5 flex h-[168px] items-center justify-between overflow-hidden rounded-xl px-5"
            style={{ background: 'radial-gradient(ellipse at 15% 50%, #C8C4FF 0%, transparent 55%), linear-gradient(145deg, #F2F1FF 0%, #E2DFFF 100%)' }}>
            {/* Hub */}
            <div className="flex size-[42px] shrink-0 items-center justify-center rounded-xl text-[10px] font-semibold text-white shadow-md"
                style={{ background: '#0007cb' }}>
                Oden
            </div>

            {/* Line */}
            <div className="relative mx-3 h-px flex-1" style={{ background: '#C5C2F8' }} />

            {/* Outputs */}
            <div className="flex flex-col gap-1">
                {SPOKES.map((s, i) => (
                    <motion.span
                        key={s}
                        animate={{
                            opacity: lit === i ? 1 : 0.3,
                            x: lit === i ? 2 : 0,
                            background: lit === i ? '#ECEAFF' : '#ffffff',
                            borderColor: lit === i ? '#9B96F5' : '#DDD9FF',
                        }}
                        className="rounded-md border px-2 py-0.5 text-[10px] font-medium"
                        style={{ color: '#0007cb' }}
                    >
                        {s}
                    </motion.span>
                ))}
            </div>
        </div>
    )
}

// ─── Panels ───────────────────────────────────────────────────────────────────

function BeforePanel() {
    const illustrations = [ScavengerIllustration, ChatIllustration, ChaosIllustration]
    const cards = [
        {
            eyebrow: 'Narrative drift',
            title: 'Five teams. Five versions of the story.',
            body: 'Sales adapts the pitch. Enablement rewrites the deck. Regions localize the claim. AI generates a sixth version. No one governs which one is true.',
        },
        {
            eyebrow: 'Revenue leakage',
            title: 'Reps improvise in live deals. Managers coach different versions.',
            body: 'Inconsistent value articulation in openers, discovery, and objection handling. It\'s not a content problem — it\'s avoidable leakage in active pipeline.',
        },
        {
            eyebrow: 'Post-launch decay',
            title: 'Launches produce activity. Not adoption.',
            body: 'Deck downloads don\'t mean the field carries the story. Without manager reinforcement and inspection, messaging reverts within weeks.',
        },
    ]

    return (
        <div className="w-full bg-white py-16 md:py-20">
            <div className={siteShellClassName}>
                <div className="mb-7">
                    <Eyebrow variant="muted">The real cost of ungoverned messaging</Eyebrow>
                </div>
                <h2
                    className="mb-10 max-w-2xl text-balance"
                    style={{ fontWeight: 500 }}
                >
                    <span style={{
                        display: 'block',
                        background: 'linear-gradient(to bottom, #5F5F5F 0%, #191818 95%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Your messaging doesn&apos;t fail at launch. It fails every day after.
                    </span>
                </h2>
                <div className="grid gap-5 md:grid-cols-3">
                    {cards.map((card, i) => {
                        const Illustration = illustrations[i]
                        return (
                            <div
                                key={card.eyebrow}
                                className="rounded-xl border border-[#E8E4DF] bg-white p-5"
                                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)' }}
                            >
                                <Illustration />
                                <p className="mb-3 text-[11px] uppercase tracking-[1.3px] text-[#B0ABA5]">
                                    {card.eyebrow}
                                </p>
                                <p className="mb-3 text-[18px] font-semibold leading-[1.25] text-[#1A1A1A]">
                                    {card.title}
                                </p>
                                <p className="text-[15px] leading-[1.7] text-[#6E6B65]">
                                    {card.body}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function AfterPanel() {
    const illustrations = [SignalFlowIllustration, LiveUpdateIllustration, HubIllustration]
    const cards = [
        {
            eyebrow: 'Governed inputs',
            title: 'Every signal. One governed truth.',
            body: 'Calls, competitor moves, reviews, and market signals flow in continuously. Oden synthesizes them into defensible claims — not just raw context.',
        },
        {
            eyebrow: 'Live artifacts',
            title: 'Outputs update when the world does',
            body: 'A competitor changes pricing on Tuesday. Sales has the updated battle card by Wednesday morning.',
        },
        {
            eyebrow: 'Controlled distribution',
            title: 'Adapt without drift.',
            body: 'Battle cards, decks, talk tracks, and web copy all draw from the same governed narrative. Teams localize examples — not the core claim.',
        },
    ]

    return (
        <div className="w-full bg-white py-20 md:py-24">
            <div className={siteShellClassName}>
                <div className="mb-7">
                    <Eyebrow>The future of product marketing</Eyebrow>
                </div>
                <h2
                    className="mb-12 max-w-3xl text-balance"
                    style={{
                        fontWeight: 600,
                        fontSize: 'clamp(28px, 3.6vw, 48px)',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                    }}
                >
                    <span style={{
                        display: 'block',
                        background: 'linear-gradient(to bottom, #5F5F5F 0%, #191818 95%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        One governed source for what your company is allowed to say.
                    </span>
                </h2>
                <div className="grid gap-5 md:grid-cols-3">
                    {cards.map((card, i) => {
                        const Illustration = illustrations[i]
                        return (
                            <div
                                key={card.eyebrow}
                                className="rounded-xl border border-[#E8E5E0] bg-white p-5"
                                style={{
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)',
                                }}
                            >
                                <Illustration />
                                <p className="mb-3 text-[11px] uppercase tracking-[1.3px] text-[#1A1A1A]/40">
                                    {card.eyebrow}
                                </p>
                                <p className="mb-3 text-[18px] font-semibold leading-[1.25] text-[#0D0D0D]">
                                    {card.title}
                                </p>
                                <p className="text-[15px] leading-[1.7] text-[#6E6B65]">
                                    {card.body}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function BeforeAfter() {
    return (
        <div className="relative" style={{ height: '320vh' }}>
            <div className="sticky top-[72px] z-[1]">
                <BeforePanel />
            </div>
            <div className="sticky top-[72px] z-[2]" style={{ marginTop: '100vh' }}>
                <AfterPanel />
            </div>
        </div>
    )
}
