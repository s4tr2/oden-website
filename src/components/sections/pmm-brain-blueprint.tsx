'use client'

import { useEffect, useState } from 'react'
import { Brain, GitBranch, RefreshCw } from 'lucide-react'
import { FadeIn } from "./layout-helpers";

const inputs = [
    { label: 'Sales calls',     x: 80  },
    { label: 'Competitor sites', x: 260 },
    { label: 'Pricing changes',  x: 460 },
    { label: 'Internal docs',    x: 660 },
    { label: 'CRM signals',      x: 860 },
]

const outputs = [
    { label: 'Battle cards',       x: 80  },
    { label: 'Sales decks',        x: 260 },
    { label: 'Buyer personas',     x: 460 },
    { label: 'Launch plans',       x: 660 },
    { label: 'Positioning briefs', x: 860 },
]

const benefits = [
    {
        icon: GitBranch,
        title: "It learns from everything",
        description: "Every sales call, competitor move, and internal doc feeds a connected knowledge graph, building richer context over time.",
    },
    {
        icon: RefreshCw,
        title: "It stays current automatically",
        description: "When pricing changes or a competitor launches, the graph updates. No manual refreshes. No stale intel.",
    },
    {
        icon: Brain,
        title: "It powers every output",
        description: "One source of truth generates and continuously updates every asset: battle cards, decks, briefs, personas, launches.",
    },
]

const HUB_X = 470
const HUB_Y = 290

const inputDelays = [0, 0.7, 1.4, 0.4, 1.1]
const outputDelays = [0.5, 1.2, 0.2, 0.9, 1.6]
const TRAVEL = 2.6

const getInputPath = (x: number) => `M ${x} 110 C ${x} 195, ${HUB_X} 175, ${HUB_X} ${HUB_Y - 95}`
const getOutputPath = (x: number) => `M ${HUB_X} ${HUB_Y + 95} C ${HUB_X} 405, ${x} 405, ${x} 470`

export function PmmBrainBlueprint() {
    const [signalCount, setSignalCount] = useState(12847)

    useEffect(() => {
        const interval = setInterval(() => {
            setSignalCount((prev) => prev + Math.floor(Math.random() * 3) + 1)
        }, 1800)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="w-full bg-surface-cream py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <p
                            className="text-[13px] uppercase text-subtle-graphite mb-5"
                            style={{ letterSpacing: '1.2px' }}
                        >
                            The Engine
                        </p>
                        <h2 className="mb-6">
                            Your company&apos;s{' '}
                            <span className=" font-light">PMM brain.</span>
                        </h2>
                        <p
                            className="text-mid-gray leading-[1.6] max-w-xl mx-auto"
                            style={{ fontSize: '17px', letterSpacing: '-0.16px' }}
                        >
                            Behind every Oden output is a living context graph, connecting your buyers, competitors, messaging, and product into one always-current knowledge layer.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="bg-white rounded border border-border-sand/60 p-6 md:p-10 mb-16 md:mb-20 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
                            backgroundImage: `linear-gradient(var(--color-headline-black) 1px, transparent 1px),
                                              linear-gradient(90deg, var(--color-headline-black) 1px, transparent 1px)`,
                            backgroundSize: '32px 32px',
                        }} />

                        <svg
                            viewBox="0 0 940 620"
                            className="w-full h-auto relative z-10"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            style={{ fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}
                        >
                            <defs>
                                <radialGradient id="bpHubGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#0007cb" stopOpacity="0.12" />
                                    <stop offset="100%" stopColor="#0007cb" stopOpacity="0" />
                                </radialGradient>

                                {inputs.map((input, i) => (
                                    <path key={`p-in-${i}`} id={`bpInPath-${i}`} d={getInputPath(input.x)} fill="none" />
                                ))}
                                {outputs.map((output, i) => (
                                    <path key={`p-out-${i}`} id={`bpOutPath-${i}`} d={getOutputPath(output.x)} fill="none" />
                                ))}
                            </defs>

                            {/* Top ruler */}
                            <g stroke="#dedbd6" strokeWidth="1">
                                <line x1="0" y1="20" x2="940" y2="20" />
                                {Array.from({ length: 19 }).map((_, i) => {
                                    const x = i * 50
                                    const isMajor = i % 4 === 0
                                    return (
                                        <line key={`tt-${i}`} x1={x} y1="20" x2={x} y2={isMajor ? 28 : 24} />
                                    )
                                })}
                            </g>
                            {/* Left ruler */}
                            <g stroke="#dedbd6" strokeWidth="1">
                                <line x1="20" y1="0" x2="20" y2="620" />
                                {Array.from({ length: 13 }).map((_, i) => {
                                    const y = i * 50
                                    const isMajor = i % 4 === 0
                                    return (
                                        <line key={`lt-${i}`} x1="20" y1={y} x2={isMajor ? 28 : 24} y2={y} />
                                    )
                                })}
                            </g>

                            {/* Title block */}
                            <text x="40" y="14" fontSize="10" fill="#888888" letterSpacing="1.2">
                                FIG. 01 · ODEN CONTEXT GRAPH
                            </text>
                            <text x="940" y="14" fontSize="10" fill="#888888" letterSpacing="1.2" textAnchor="end">
                                v.2026.05
                            </text>

                            {/* Section labels */}
                            <text x="40" y="48" fontSize="10" fill="#a0a0a0" letterSpacing="1.2">
                                §01 · INPUTS
                            </text>
                            <text x="40" y="608" fontSize="10" fill="#a0a0a0" letterSpacing="1.2">
                                §03 · OUTPUTS
                            </text>
                            <text x="940" y="48" fontSize="10" fill="#a0a0a0" letterSpacing="1.2" textAnchor="end">
                                §02 · SYNTHESIS
                            </text>

                            {/* Visible connecting traces (hairlines) */}
                            {inputs.map((input, i) => (
                                <use
                                    key={`vis-in-${i}`}
                                    href={`#bpInPath-${i}`}
                                    stroke="#dedbd6"
                                    strokeWidth="0.75"
                                />
                            ))}
                            {outputs.map((output, i) => (
                                <use
                                    key={`vis-out-${i}`}
                                    href={`#bpOutPath-${i}`}
                                    stroke="#dedbd6"
                                    strokeWidth="0.75"
                                />
                            ))}

                            {/* Animated signal pulses (squares) along input traces */}
                            {inputs.map((input, i) => (
                                <rect key={`sig-in-${i}`} width="6" height="6" x="-3" y="-3" fill="#0007cb" opacity="0">
                                    <animateMotion
                                        dur={`${TRAVEL}s`}
                                        repeatCount="indefinite"
                                        begin={`${inputDelays[i]}s`}
                                    >
                                        <mpath href={`#bpInPath-${i}`} />
                                    </animateMotion>
                                    <animate
                                        attributeName="opacity"
                                        values="0;1;1;0"
                                        keyTimes="0;0.1;0.85;1"
                                        dur={`${TRAVEL}s`}
                                        repeatCount="indefinite"
                                        begin={`${inputDelays[i]}s`}
                                    />
                                </rect>
                            ))}
                            {outputs.map((output, i) => (
                                <rect key={`sig-out-${i}`} width="6" height="6" x="-3" y="-3" fill="#0007cb" opacity="0">
                                    <animateMotion
                                        dur={`${TRAVEL}s`}
                                        repeatCount="indefinite"
                                        begin={`${outputDelays[i]}s`}
                                    >
                                        <mpath href={`#bpOutPath-${i}`} />
                                    </animateMotion>
                                    <animate
                                        attributeName="opacity"
                                        values="0;1;1;0"
                                        keyTimes="0;0.1;0.85;1"
                                        dur={`${TRAVEL}s`}
                                        repeatCount="indefinite"
                                        begin={`${outputDelays[i]}s`}
                                    />
                                </rect>
                            ))}

                            {/* Input nodes (squares) */}
                            {inputs.map((input, i) => (
                                <g key={`inode-${i}`}>
                                    <rect
                                        x={input.x - 4}
                                        y="106"
                                        width="8"
                                        height="8"
                                        fill="#ffffff"
                                        stroke="#414141"
                                        strokeWidth="1"
                                    />
                                    <text
                                        x={input.x}
                                        y="84"
                                        textAnchor="middle"
                                        fontSize="13"
                                        fill="#111111"
                                        fontFamily="system-ui, -apple-system, sans-serif"
                                        letterSpacing="-0.16"
                                    >
                                        {input.label}
                                    </text>
                                </g>
                            ))}

                            {/* Hub gradient defs */}
                            <defs>
                                <radialGradient id="bpHubBody" cx="32%" cy="28%" r="85%">
                                    <stop offset="0%" stopColor="#2c2c2c" />
                                    <stop offset="55%" stopColor="#161616" />
                                    <stop offset="100%" stopColor="#080808" />
                                </radialGradient>
                                <radialGradient id="bpHubAurora" cx="50%" cy="35%" r="60%">
                                    <stop offset="0%" stopColor="#0007cb" stopOpacity="0.35" />
                                    <stop offset="60%" stopColor="#0007cb" stopOpacity="0.08" />
                                    <stop offset="100%" stopColor="#0007cb" stopOpacity="0" />
                                </radialGradient>
                                <radialGradient id="bpHubSpotlight" cx="50%" cy="50%" r="40%">
                                    <stop offset="0%" stopColor="#000000" stopOpacity="0.7" />
                                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                                </radialGradient>
                                <clipPath id="bpHubClip">
                                    <circle cx={HUB_X} cy={HUB_Y} r="95" />
                                </clipPath>
                            </defs>

                            {/* Hub: outer pulsing glow */}
                            <circle cx={HUB_X} cy={HUB_Y} r="150" fill="url(#bpHubGlow)">
                                <animate attributeName="r" values="135;160;135" dur="5s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite" />
                            </circle>

                            {/* Cardinal index ticks outside the hub */}
                            <g stroke="#414141" strokeWidth="0.75">
                                <line x1={HUB_X} y1={HUB_Y - 122} x2={HUB_X} y2={HUB_Y - 114} />
                                <line x1={HUB_X} y1={HUB_Y + 114} x2={HUB_X} y2={HUB_Y + 122} />
                                <line x1={HUB_X - 122} y1={HUB_Y} x2={HUB_X - 114} y2={HUB_Y} />
                                <line x1={HUB_X + 114} y1={HUB_Y} x2={HUB_X + 122} y2={HUB_Y} />
                            </g>

                            {/* Slow rotating dashed orbit ring */}
                            <circle cx={HUB_X} cy={HUB_Y} r="108" fill="none" stroke="#dedbd6" strokeWidth="0.75" strokeDasharray="2 6">
                                <animateTransform attributeName="transform" type="rotate" from={`0 ${HUB_X} ${HUB_Y}`} to={`360 ${HUB_X} ${HUB_Y}`} dur="60s" repeatCount="indefinite" />
                            </circle>

                            {/* Hub main body */}
                            <circle cx={HUB_X} cy={HUB_Y} r="95" fill="url(#bpHubBody)" />

                            {/* Inner aurora glow */}
                            <circle cx={HUB_X} cy={HUB_Y} r="95" fill="url(#bpHubAurora)" />

                            {/* Living network inside the hub (clipped to circle) */}
                            <g clipPath="url(#bpHubClip)" opacity="0.7">
                                <g>
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        from={`0 ${HUB_X} ${HUB_Y}`}
                                        to={`360 ${HUB_X} ${HUB_Y}`}
                                        dur="180s"
                                        repeatCount="indefinite"
                                    />
                                    {/* Edges */}
                                    <g stroke="#0007cb" strokeWidth="0.6" fill="none">
                                        <line x1={HUB_X - 60} y1={HUB_Y - 45} x2={HUB_X - 20} y2={HUB_Y - 18} strokeOpacity="0.45" />
                                        <line x1={HUB_X - 20} y1={HUB_Y - 18} x2={HUB_X + 35} y2={HUB_Y - 50} strokeOpacity="0.5" />
                                        <line x1={HUB_X + 35} y1={HUB_Y - 50} x2={HUB_X + 60} y2={HUB_Y + 5} strokeOpacity="0.4" />
                                        <line x1={HUB_X - 20} y1={HUB_Y - 18} x2={HUB_X + 15} y2={HUB_Y + 30} strokeOpacity="0.55" />
                                        <line x1={HUB_X + 15} y1={HUB_Y + 30} x2={HUB_X - 35} y2={HUB_Y + 50} strokeOpacity="0.4" />
                                        <line x1={HUB_X - 35} y1={HUB_Y + 50} x2={HUB_X - 60} y2={HUB_Y - 45} strokeOpacity="0.35" />
                                        <line x1={HUB_X + 15} y1={HUB_Y + 30} x2={HUB_X + 60} y2={HUB_Y + 5} strokeOpacity="0.5" />
                                        <line x1={HUB_X + 35} y1={HUB_Y - 50} x2={HUB_X - 60} y2={HUB_Y - 45} strokeOpacity="0.3" />
                                        <line x1={HUB_X - 35} y1={HUB_Y + 50} x2={HUB_X - 20} y2={HUB_Y - 18} strokeOpacity="0.35" />
                                    </g>
                                    {/* Nodes */}
                                    {[
                                        { x: HUB_X - 60, y: HUB_Y - 45, delay: 0 },
                                        { x: HUB_X - 20, y: HUB_Y - 18, delay: 0.6 },
                                        { x: HUB_X + 35, y: HUB_Y - 50, delay: 1.2 },
                                        { x: HUB_X + 60, y: HUB_Y + 5, delay: 0.3 },
                                        { x: HUB_X + 15, y: HUB_Y + 30, delay: 0.9 },
                                        { x: HUB_X - 35, y: HUB_Y + 50, delay: 1.5 },
                                    ].map((n, i) => (
                                        <g key={`inn-${i}`}>
                                            <circle cx={n.x} cy={n.y} r="2.5" fill="#ffffff" opacity="0.9">
                                                <animate
                                                    attributeName="opacity"
                                                    values="0.9;0.3;0.9"
                                                    dur="2.8s"
                                                    repeatCount="indefinite"
                                                    begin={`${n.delay}s`}
                                                />
                                            </circle>
                                            <circle cx={n.x} cy={n.y} r="5" fill="#0007cb" opacity="0">
                                                <animate
                                                    attributeName="opacity"
                                                    values="0;0.3;0"
                                                    dur="2.8s"
                                                    repeatCount="indefinite"
                                                    begin={`${n.delay}s`}
                                                />
                                            </circle>
                                        </g>
                                    ))}
                                </g>
                            </g>

                            {/* Spotlight under wordmark for legibility */}
                            <circle cx={HUB_X} cy={HUB_Y} r="55" fill="url(#bpHubSpotlight)" />

                            {/* Hub edge rings */}
                            <circle cx={HUB_X} cy={HUB_Y} r="95" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
                            <circle cx={HUB_X} cy={HUB_Y} r="95" fill="none" stroke="#0007cb" strokeOpacity="0.5" strokeWidth="1" />
                            <circle cx={HUB_X} cy={HUB_Y} r="88" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />

                            {/* Wordmark */}
                            <text
                                x={HUB_X}
                                y={HUB_Y - 2}
                                textAnchor="middle"
                                fontSize="28"
                                fill="#ffffff"
                                fontFamily="system-ui, -apple-system, sans-serif"
                                letterSpacing="-0.6"
                                fontWeight="300"
                            >
                                Oden
                            </text>

                            {/* Divider */}
                            <line
                                x1={HUB_X - 18}
                                y1={HUB_Y + 11}
                                x2={HUB_X + 18}
                                y2={HUB_Y + 11}
                                stroke="#ffffff"
                                strokeOpacity="0.2"
                                strokeWidth="0.75"
                            />

                            {/* Caption */}
                            <text
                                x={HUB_X}
                                y={HUB_Y + 25}
                                textAnchor="middle"
                                fontSize="8"
                                fill="#a0a0a0"
                                letterSpacing="1.2"
                            >
                                CONTEXT GRAPH
                            </text>

                            {/* Live signal counter */}
                            <text
                                x={HUB_X}
                                y={HUB_Y + 42}
                                textAnchor="middle"
                                fontSize="9"
                                fill="#0007cb"
                                fillOpacity="0.85"
                                letterSpacing="0.7"
                            >
                                {signalCount.toLocaleString()} signals
                            </text>

                            {/* Output nodes */}
                            {outputs.map((output, i) => (
                                <g key={`onode-${i}`}>
                                    <rect
                                        x={output.x - 4}
                                        y="466"
                                        width="8"
                                        height="8"
                                        fill="#ffffff"
                                        stroke="#0007cb"
                                        strokeWidth="1"
                                        strokeOpacity="0.6"
                                    />
                                    <rect
                                        x={output.x - 2}
                                        y="468"
                                        width="4"
                                        height="4"
                                        fill="#0007cb"
                                    />
                                    <text
                                        x={output.x}
                                        y="498"
                                        textAnchor="middle"
                                        fontSize="13"
                                        fill="#111111"
                                        fontFamily="system-ui, -apple-system, sans-serif"
                                        letterSpacing="-0.16"
                                    >
                                        {output.label}
                                    </text>
                                </g>
                            ))}

                        </svg>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <FadeIn key={benefit.title} delay={index * 100}>
                                <div className="p-8">
                                    <div className="w-10 h-10 rounded bg-white border border-border-sand/60 flex items-center justify-center mb-6">
                                        <Icon className="w-[18px] h-[18px] text-headline-black" strokeWidth={1.5} />
                                    </div>
                                    <h5 className="mb-3">{benefit.title}</h5>
                                    <p
                                        className="text-mid-gray leading-[1.6]"
                                        style={{ fontSize: '15px', letterSpacing: '-0.16px' }}
                                    >
                                        {benefit.description}
                                    </p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
