'use client'

import { Brain, GitBranch, RefreshCw } from 'lucide-react'
import { FadeIn } from "./layout-helpers";

const inputs = [
    { label: 'Sales calls', x: 80 },
    { label: 'Competitor sites', x: 260 },
    { label: 'Pricing changes', x: 460 },
    { label: 'Internal docs', x: 660 },
    { label: 'CRM signals', x: 860 },
]

const outputs = [
    { label: 'Battle cards', x: 80 },
    { label: 'Sales decks', x: 260 },
    { label: 'Buyer personas', x: 460 },
    { label: 'Launch plans', x: 660 },
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

const getInputPath = (x: number) => `M ${x} 110 C ${x} 220, ${HUB_X} 200, ${HUB_X} ${HUB_Y - 60}`
const getOutputPath = (x: number) => `M ${HUB_X} ${HUB_Y + 60} C ${HUB_X} 380, ${x} 360, ${x} 470`

// Stagger timing so signals feel organic / real-time
const inputDelays = [0, 0.7, 1.4, 0.4, 1.1]
const outputDelays = [0.5, 1.2, 0.2, 0.9, 1.6]
const TRAVEL = 2.6 // seconds per signal travel

export function PmmBrain() {
    return (
        <section className="w-full bg-surface-cream py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
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

                {/* Context graph visualization */}
                <FadeIn>
                    <div className="bg-white rounded border border-border-sand/60 p-6 md:p-10 mb-16 md:mb-20 relative overflow-hidden">
                        {/* Subtle background grid */}
                        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
                            backgroundImage: `linear-gradient(var(--color-headline-black) 1px, transparent 1px),
                                              linear-gradient(90deg, var(--color-headline-black) 1px, transparent 1px)`,
                            backgroundSize: '32px 32px',
                        }} />

                        {/* Status indicator */}
                        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-10 flex items-center gap-2">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-headline-black opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-headline-black" />
                            </span>
                            <span
                                className="text-[11px] uppercase text-subtle-graphite"
                                style={{ letterSpacing: '1.2px', fontFamily: 'ui-monospace, monospace' }}
                            >
                                Live
                            </span>
                        </div>

                        <svg
                            viewBox="0 0 940 580"
                            className="w-full h-auto relative z-10"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <defs>
                                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#0007cb" stopOpacity="0.18" />
                                    <stop offset="60%" stopColor="#0007cb" stopOpacity="0.05" />
                                    <stop offset="100%" stopColor="#0007cb" stopOpacity="0" />
                                </radialGradient>
                                <radialGradient id="hubFill" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#1a1a1a" />
                                    <stop offset="100%" stopColor="#111111" />
                                </radialGradient>

                                {/* Reusable paths for animations */}
                                {inputs.map((input, i) => (
                                    <path key={`p-in-${i}`} id={`inPath-${i}`} d={getInputPath(input.x)} fill="none" />
                                ))}
                                {outputs.map((output, i) => (
                                    <path key={`p-out-${i}`} id={`outPath-${i}`} d={getOutputPath(output.x)} fill="none" />
                                ))}
                            </defs>

                            {/* Section labels */}
                            <text x="20" y="40" fontSize="11" fill="#a0a0a0" fontFamily="ui-monospace, SFMono-Regular, monospace" letterSpacing="1.2">
                                INPUTS
                            </text>
                            <text x="20" y="552" fontSize="11" fill="#a0a0a0" fontFamily="ui-monospace, SFMono-Regular, monospace" letterSpacing="1.2">
                                OUTPUTS
                            </text>

                            {/* Visible connecting lines: inputs to hub */}
                            {inputs.map((input, i) => (
                                <use
                                    key={`vis-in-${i}`}
                                    href={`#inPath-${i}`}
                                    stroke="#dedbd6"
                                    strokeWidth="1"
                                    strokeDasharray="2 4"
                                />
                            ))}

                            {/* Visible connecting lines: hub to outputs */}
                            {outputs.map((output, i) => (
                                <use
                                    key={`vis-out-${i}`}
                                    href={`#outPath-${i}`}
                                    stroke="#dedbd6"
                                    strokeWidth="1"
                                    strokeDasharray="2 4"
                                />
                            ))}

                            {/* Animated signal dots traveling from inputs to hub */}
                            {inputs.map((input, i) => (
                                <g key={`sig-in-${i}`}>
                                    <circle r="4" fill="#0007cb" opacity="0">
                                        <animateMotion
                                            dur={`${TRAVEL}s`}
                                            repeatCount="indefinite"
                                            begin={`${inputDelays[i]}s`}
                                            rotate="auto"
                                        >
                                            <mpath href={`#inPath-${i}`} />
                                        </animateMotion>
                                        <animate
                                            attributeName="opacity"
                                            values="0;1;1;0"
                                            keyTimes="0;0.1;0.85;1"
                                            dur={`${TRAVEL}s`}
                                            repeatCount="indefinite"
                                            begin={`${inputDelays[i]}s`}
                                        />
                                        <animate
                                            attributeName="r"
                                            values="3;4;3"
                                            dur={`${TRAVEL}s`}
                                            repeatCount="indefinite"
                                            begin={`${inputDelays[i]}s`}
                                        />
                                    </circle>
                                    {/* Trail glow */}
                                    <circle r="8" fill="#0007cb" opacity="0">
                                        <animateMotion
                                            dur={`${TRAVEL}s`}
                                            repeatCount="indefinite"
                                            begin={`${inputDelays[i]}s`}
                                        >
                                            <mpath href={`#inPath-${i}`} />
                                        </animateMotion>
                                        <animate
                                            attributeName="opacity"
                                            values="0;0.2;0.2;0"
                                            keyTimes="0;0.1;0.85;1"
                                            dur={`${TRAVEL}s`}
                                            repeatCount="indefinite"
                                            begin={`${inputDelays[i]}s`}
                                        />
                                    </circle>
                                </g>
                            ))}

                            {/* Animated signal dots traveling from hub to outputs */}
                            {outputs.map((output, i) => (
                                <g key={`sig-out-${i}`}>
                                    <circle r="4" fill="#0007cb" opacity="0">
                                        <animateMotion
                                            dur={`${TRAVEL}s`}
                                            repeatCount="indefinite"
                                            begin={`${outputDelays[i]}s`}
                                            rotate="auto"
                                        >
                                            <mpath href={`#outPath-${i}`} />
                                        </animateMotion>
                                        <animate
                                            attributeName="opacity"
                                            values="0;1;1;0"
                                            keyTimes="0;0.1;0.85;1"
                                            dur={`${TRAVEL}s`}
                                            repeatCount="indefinite"
                                            begin={`${outputDelays[i]}s`}
                                        />
                                    </circle>
                                    <circle r="8" fill="#0007cb" opacity="0">
                                        <animateMotion
                                            dur={`${TRAVEL}s`}
                                            repeatCount="indefinite"
                                            begin={`${outputDelays[i]}s`}
                                        >
                                            <mpath href={`#outPath-${i}`} />
                                        </animateMotion>
                                        <animate
                                            attributeName="opacity"
                                            values="0;0.18;0.18;0"
                                            keyTimes="0;0.1;0.85;1"
                                            dur={`${TRAVEL}s`}
                                            repeatCount="indefinite"
                                            begin={`${outputDelays[i]}s`}
                                        />
                                    </circle>
                                </g>
                            ))}

                            {/* Input node markers */}
                            {inputs.map((input, i) => (
                                <g key={`inode-${i}`}>
                                    <circle cx={input.x} cy="110" r="6" fill="#ffffff" stroke="#dedbd6" strokeWidth="1.5" />
                                    <circle cx={input.x} cy="110" r="2.5" fill="#585858">
                                        <animate
                                            attributeName="opacity"
                                            values="1;0.4;1"
                                            dur="2s"
                                            repeatCount="indefinite"
                                            begin={`${inputDelays[i]}s`}
                                        />
                                    </circle>
                                    <text
                                        x={input.x}
                                        y="86"
                                        textAnchor="middle"
                                        fontSize="13"
                                        fill="#414141"
                                        fontFamily="system-ui, -apple-system, sans-serif"
                                        letterSpacing="-0.16"
                                    >
                                        {input.label}
                                    </text>
                                </g>
                            ))}

                            {/* Hub: pulsing outer glow rings */}
                            <circle cx={HUB_X} cy={HUB_Y} r="120" fill="url(#hubGlow)">
                                <animate
                                    attributeName="r"
                                    values="110;130;110"
                                    dur="3.5s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0.6;1;0.6"
                                    dur="3.5s"
                                    repeatCount="indefinite"
                                />
                            </circle>

                            {/* Sonar pulse rings */}
                            <circle cx={HUB_X} cy={HUB_Y} r="60" fill="none" stroke="#0007cb" strokeWidth="1" opacity="0">
                                <animate
                                    attributeName="r"
                                    values="60;110"
                                    dur="2.6s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0.4;0"
                                    dur="2.6s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <circle cx={HUB_X} cy={HUB_Y} r="60" fill="none" stroke="#0007cb" strokeWidth="1" opacity="0">
                                <animate
                                    attributeName="r"
                                    values="60;110"
                                    dur="2.6s"
                                    repeatCount="indefinite"
                                    begin="1.3s"
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0.4;0"
                                    dur="2.6s"
                                    repeatCount="indefinite"
                                    begin="1.3s"
                                />
                            </circle>

                            {/* Hub main body */}
                            <circle cx={HUB_X} cy={HUB_Y} r="60" fill="url(#hubFill)" />
                            <circle cx={HUB_X} cy={HUB_Y} r="60" fill="none" stroke="#0007cb" strokeOpacity="0.5" strokeWidth="1" />

                            {/* Hub label - "Oden" */}
                            <text
                                x={HUB_X}
                                y={HUB_Y - 4}
                                textAnchor="middle"
                                fontSize="20"
                                fill="#ffffff"
                                fontFamily="system-ui, -apple-system, sans-serif"
                                letterSpacing="-0.4"
                                fontWeight="300"
                            >
                                Oden
                            </text>
                            <text
                                x={HUB_X}
                                y={HUB_Y + 16}
                                textAnchor="middle"
                                fontSize="10"
                                fill="#888888"
                                fontFamily="ui-monospace, SFMono-Regular, monospace"
                                letterSpacing="1.2"
                            >
                                CONTEXT GRAPH
                            </text>

                            {/* Output node markers */}
                            {outputs.map((output, i) => (
                                <g key={`onode-${i}`}>
                                    <circle cx={output.x} cy="470" r="6" fill="#ffffff" stroke="#0007cb" strokeWidth="1.5" strokeOpacity="0.5" />
                                    <circle cx={output.x} cy="470" r="2.5" fill="#0007cb">
                                        <animate
                                            attributeName="opacity"
                                            values="1;0.4;1"
                                            dur="2s"
                                            repeatCount="indefinite"
                                            begin={`${outputDelays[i] + 1}s`}
                                        />
                                    </circle>
                                    <text
                                        x={output.x}
                                        y="500"
                                        textAnchor="middle"
                                        fontSize="13"
                                        fill="#414141"
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

                {/* Three benefits */}
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
