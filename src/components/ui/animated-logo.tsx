'use client';

import { useState, useEffect } from 'react';

interface AnimatedLogoProps {
    size?: number;
    className?: string;
}

export function AnimatedLogo({ size = 32, className = '' }: AnimatedLogoProps) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Animate on initial mount
        setIsAnimating(true);
        const initialTimeout = setTimeout(() => setIsAnimating(false), 600);

        // Set up interval for every 10 seconds
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 600);
        }, 10000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={className}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                {/* Background */}
                <rect width="400" height="400" fill="#111111" rx="48" />

                {/* O formed by 4 sides drawing in sequence */}
                <g>
                    {/* Top bar */}
                    <rect
                        x="130"
                        y="60"
                        width="131"
                        height="37"
                        fill="white"
                        style={{
                            transform: isAnimating ? 'scaleX(1)' : 'scaleX(0)',
                            transformOrigin: 'left',
                            transition: 'transform 0.15s ease-out 0s',
                        }}
                    />

                    {/* Right bar */}
                    <rect
                        x="261"
                        y="60"
                        width="39"
                        height="280"
                        fill="white"
                        style={{
                            transform: isAnimating ? 'scaleY(1)' : 'scaleY(0)',
                            transformOrigin: 'top',
                            transition: 'transform 0.2s ease-out 0.1s',
                        }}
                    />

                    {/* Bottom bar */}
                    <rect
                        x="130"
                        y="303"
                        width="131"
                        height="37"
                        fill="white"
                        style={{
                            transform: isAnimating ? 'scaleX(1)' : 'scaleX(0)',
                            transformOrigin: 'right',
                            transition: 'transform 0.15s ease-out 0.25s',
                        }}
                    />

                    {/* Left bar */}
                    <rect
                        x="92"
                        y="60"
                        width="38"
                        height="280"
                        fill="white"
                        style={{
                            transform: isAnimating ? 'scaleY(1)' : 'scaleY(0)',
                            transformOrigin: 'bottom',
                            transition: 'transform 0.2s ease-out 0.35s',
                        }}
                    />

                    {/* Static full O (visible when not animating) */}
                    <path
                        d="M129.938 340.35V303.648H91.9406V97.2538H129.938V60.1202H261.201V97.2538H299.63V303.648H261.201V340.35H129.938ZM146.777 281.627H244.361V119.275H146.777V281.627Z"
                        fill="white"
                        style={{
                            opacity: isAnimating ? 0 : 1,
                            transition: 'opacity 0.1s ease-out',
                        }}
                    />
                </g>
            </svg>
        </div>
    );
}

// Hover-only animated logo - only animates when hovered
export function HoverAnimatedLogo({ size = 32, className = '' }: AnimatedLogoProps) {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMouseEnter = () => {
        setIsAnimating(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => setIsAnimating(false), 600);
    };

    return (
        <div 
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible cursor-pointer"
            >
                {/* Background */}
                <rect width="400" height="400" fill="#111111" rx="48" />

                {/* O formed by 4 sides drawing in sequence */}
                <g>
                    {/* Top bar */}
                    <rect
                        x="130"
                        y="60"
                        width="131"
                        height="37"
                        fill="white"
                        style={{
                            transform: isAnimating ? 'scaleX(1)' : 'scaleX(0)',
                            transformOrigin: 'left',
                            transition: 'transform 0.15s ease-out 0s',
                        }}
                    />

                    {/* Right bar */}
                    <rect
                        x="261"
                        y="60"
                        width="39"
                        height="280"
                        fill="white"
                        style={{
                            transform: isAnimating ? 'scaleY(1)' : 'scaleY(0)',
                            transformOrigin: 'top',
                            transition: 'transform 0.2s ease-out 0.1s',
                        }}
                    />

                    {/* Bottom bar */}
                    <rect
                        x="130"
                        y="303"
                        width="131"
                        height="37"
                        fill="white"
                        style={{
                            transform: isAnimating ? 'scaleX(1)' : 'scaleX(0)',
                            transformOrigin: 'right',
                            transition: 'transform 0.15s ease-out 0.25s',
                        }}
                    />

                    {/* Left bar */}
                    <rect
                        x="92"
                        y="60"
                        width="38"
                        height="280"
                        fill="white"
                        style={{
                            transform: isAnimating ? 'scaleY(1)' : 'scaleY(0)',
                            transformOrigin: 'bottom',
                            transition: 'transform 0.2s ease-out 0.35s',
                        }}
                    />

                    {/* Static full O (visible when not animating) */}
                    <path
                        d="M129.938 340.35V303.648H91.9406V97.2538H129.938V60.1202H261.201V97.2538H299.63V303.648H261.201V340.35H129.938ZM146.777 281.627H244.361V119.275H146.777V281.627Z"
                        fill="white"
                        style={{
                            opacity: isAnimating ? 0 : 1,
                            transition: 'opacity 0.1s ease-out',
                        }}
                    />
                </g>
            </svg>
        </div>
    );
}
