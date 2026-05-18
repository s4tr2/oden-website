'use client'

import { siteShellClassName, Eyebrow } from './layout-helpers'

const COL_A = [
    { name: 'Gong',         domain: 'gong.io' },
    { name: 'Slack',        domain: 'slack.com' },
    { name: 'G2',           domain: 'g2.com' },
    { name: 'Capterra',     domain: 'capterra.com' },
    { name: 'Salesforce',   domain: 'salesforce.com' },
    { name: 'HubSpot',      domain: 'hubspot.com' },
    { name: 'Notion',       domain: 'notion.so' },
    { name: 'Google Drive', domain: 'drive.google.com' },
]

const COL_B = [
    { name: 'Zoom',         domain: 'zoom.us' },
    { name: 'LinkedIn',     domain: 'linkedin.com' },
    { name: 'Outreach',     domain: 'outreach.io' },
    { name: 'Chorus',       domain: 'chorus.ai' },
    { name: 'TrustRadius',  domain: 'trustradius.com' },
    { name: 'Confluence',   domain: 'atlassian.com' },
    { name: 'Salesloft',    domain: 'salesloft.com' },
    { name: 'ZoomInfo',     domain: 'zoominfo.com' },
]

function IntegrationCard({ name, domain }: { name: string; domain: string }) {
    return (
        <div className="flex shrink-0 items-center gap-2.5 rounded-xl border border-[#E8E5E0] bg-white px-3.5 py-2.5 shadow-sm">
            <img
                src={`https://www.google.com/s2/favicons?sz=64&domain=${domain}`}
                alt={name}
                width={24}
                height={24}
                className="h-6 w-6 shrink-0 rounded object-contain"
            />
            <span className="text-[14px] font-medium text-[#1A1A1A]" style={{ letterSpacing: '-0.14px' }}>
                {name}
            </span>
        </div>
    )
}

function VerticalMarquee({ items, reverse = false }: { items: typeof COL_A; reverse?: boolean }) {
    const tiles = [...items, ...items, ...items]
    return (
        <div className="flex flex-col overflow-hidden" style={{ height: 300 }}>
            <div
                className="flex flex-col gap-3 w-full"
                style={{
                    animation: `vmq-${reverse ? 'up' : 'down'} 20s linear infinite`,
                    willChange: 'transform',
                }}
            >
                {tiles.map((item, i) => (
                    <div key={`${item.name}-${i}`} className="w-full">
                        <IntegrationCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Integrations() {
    return (
        <section className="w-full bg-white py-16 md:py-20">
            <style>{`
                @keyframes vmq-down {
                    from { transform: translateY(0); }
                    to   { transform: translateY(calc(-100% / 3)); }
                }
                @keyframes vmq-up {
                    from { transform: translateY(calc(-100% / 3)); }
                    to   { transform: translateY(0); }
                }
                @keyframes marquee-fwd {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
            `}</style>

            <div className={siteShellClassName}>
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24 items-center">

                    {/* Left: text */}
                    <div>
                        <div className="mb-5">
                            <Eyebrow>Integrations</Eyebrow>
                        </div>
                        <h2
                            className="mb-6 text-balance"
                            style={{
                                fontSize: 'clamp(28px, 3.6vw, 44px)',
                                fontWeight: 600,
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                                background: 'linear-gradient(to bottom, #5F5F5F 0%, #191818 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Every signal, automatically ingested.
                        </h2>
                        <p
                            className="text-pretty text-[#6E6B65]"
                            style={{ fontSize: '17px', lineHeight: 1.6, letterSpacing: '-0.16px' }}
                        >
                            Oden connects to the tools your team already lives in — calls, reviews, CRM, docs, and more — so context arrives without anyone asking for it.
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#E8E5E0] bg-[#FAFAF9] px-3.5 py-2">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                <path d="M7 1L2 3.5V7c0 3 2.2 5.3 5 6 2.8-.7 5-3 5-6V3.5L7 1z" stroke="#6E6B65" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
                                <path d="M4.5 7l1.8 1.8L9.5 5.5" stroke="#6E6B65" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-[13px] text-[#6E6B65]" style={{ letterSpacing: '-0.1px' }}>
                                SOC 2 compliance in progress
                            </span>
                        </div>
                    </div>

                    {/* Right: two vertical marquee columns (desktop) / hidden on mobile */}
                    <div
                        className="relative hidden md:flex gap-3 overflow-hidden"
                        style={{
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
                        }}
                    >
                        <div className="flex-1">
                            <VerticalMarquee items={COL_A} />
                        </div>
                        <div className="flex-1">
                            <VerticalMarquee items={COL_B} reverse />
                        </div>
                    </div>

                </div>

            </div>

            {/* Mobile: full-width horizontal scrolling row — outside shell so it bleeds edge to edge */}
            <div
                className="md:hidden mt-10 overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                }}
            >
                <div
                    className="flex gap-3"
                    style={{ animation: 'marquee-fwd 28s linear infinite', willChange: 'transform', width: 'max-content' }}
                >
                    {[...COL_A, ...COL_B, ...COL_A, ...COL_B].map((item, i) => (
                        <div key={`mob-${item.name}-${i}`} className="shrink-0">
                            <IntegrationCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
