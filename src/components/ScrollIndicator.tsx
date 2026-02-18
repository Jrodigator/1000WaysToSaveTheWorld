'use client';

import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 80) setVisible(false);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <div
            style={{
                position: 'absolute',
                bottom: '2.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.4s ease',
            }}
        >
            <span
                style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.8rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                }}
            >
                Scroll to explore
            </span>
            {/* Animated chevrons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {[0, 1, 2].map((i) => (
                    <svg
                        key={i}
                        width="24"
                        height="14"
                        viewBox="0 0 24 14"
                        fill="none"
                        className="animate-bounce-arrow"
                        style={{ animationDelay: `${i * 0.18}s`, opacity: 1 - i * 0.25 }}
                    >
                        <polyline
                            points="2,2 12,12 22,2"
                            stroke="rgba(255,255,255,0.8)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ))}
            </div>
        </div>
    );
}
