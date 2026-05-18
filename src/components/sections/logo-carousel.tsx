'use client'

const logos = [
    { name: 'DealHub', svg: (
        <svg viewBox="0 0 120 28" fill="currentColor" className="h-5 w-auto">
            <text x="0" y="21" fontSize="20" fontWeight="700" fontFamily="system-ui, sans-serif">DealHub</text>
        </svg>
    )},
    { name: 'Acme Corp', svg: (
        <svg viewBox="0 0 130 28" fill="currentColor" className="h-5 w-auto">
            <text x="0" y="21" fontSize="20" fontWeight="600" fontFamily="system-ui, sans-serif">Acme Corp</text>
        </svg>
    )},
    { name: 'Northwind', svg: (
        <svg viewBox="0 0 130 28" fill="currentColor" className="h-5 w-auto">
            <text x="0" y="21" fontSize="20" fontWeight="600" fontFamily="system-ui, sans-serif">Northwind</text>
        </svg>
    )},
    { name: 'Stratify', svg: (
        <svg viewBox="0 0 110 28" fill="currentColor" className="h-5 w-auto">
            <text x="0" y="21" fontSize="20" fontWeight="600" fontFamily="system-ui, sans-serif">Stratify</text>
        </svg>
    )},
];

export function LogoCarousel() {
    return (
        <div className="w-full border-y border-border-sand/50 py-10 md:py-12 overflow-hidden">
            <p
                className="text-center text-[12px] uppercase text-placeholder-gray mb-8"
                style={{ letterSpacing: '1.2px' }}
            >
                Trusted by product marketing teams
            </p>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 w-32 z-10" style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
                <div className="absolute inset-y-0 right-0 w-32 z-10" style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />

                <div className="flex animate-scroll-left">
                    {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                        <div
                            key={`${logo.name}-${i}`}
                            className="flex-shrink-0 px-12 text-canvas-beige"
                        >
                            {logo.svg}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
