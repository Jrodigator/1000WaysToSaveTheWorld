export default function Way08() {
    return (
        <section id="way-8" className="snap-section" style={{ background: 'var(--c-way8)' }}>
            {/* Star/spark background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="animate-float" style={{
                        position: 'absolute',
                        top: `${(i * 37) % 95}%`, left: `${(i * 53) % 95}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${3 + i * 0.4}s`,
                    }}>
                        <svg width={8 + (i % 4) * 6} height={8 + (i % 4) * 6} viewBox="0 0 24 24">
                            <polygon points="12,2 14.4,9.2 22,9.2 16,14 18.4,21.2 12,17 5.6,21.2 8,14 2,9.2 9.6,9.2"
                                fill={`rgba(255,255,255,${0.1 + (i % 5) * 0.06})`} />
                        </svg>
                    </div>
                ))}
                {/* Electric arc lines */}
                {[...Array(5)].map((_, i) => (
                    <svg key={i} style={{
                        position: 'absolute',
                        top: `${10 + i * 18}%`, left: `${5 + i * 18}%`,
                        opacity: 0.06,
                    }} width="120" height="60" viewBox="0 0 120 60">
                        <polyline points={`0,30 20,${10 + i * 5} 40,${50 - i * 5} 60,${15 + i * 3} 80,${45 - i * 3} 100,${20 + i * 4} 120,30`}
                            fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ))}
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', padding: '2rem 6rem', maxWidth: '1200px' }}>
                <div>
                    <span className="way-number" style={{ color: '#fff', position: 'static', display: 'block', marginBottom: '-1rem' }}>08</span>
                    <h2 className="way-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>
                        Switch to<br />LEDs 💡
                    </h2>
                    <p className="way-body" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        LED bulbs use up to 80% less energy than traditional incandescent bulbs and
                        last 25 times longer. Switching your home's lighting is one of the easiest,
                        cheapest, and most impactful changes you can make right now.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['⚡ 80% less energy', '💰 Lower bills', '🕰️ 25x longer life'].map(tag => (
                            <span key={tag} style={{
                                background: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: '2rem',
                                padding: '0.4rem 1rem',
                                color: '#fff',
                                fontSize: '0.85rem',
                                fontFamily: "'Space Grotesk', sans-serif",
                            }}>{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Lightbulb SVG */}
                <svg className="animate-float delay-300" style={{ flexShrink: 0, opacity: 0.7 }}
                    width="160" height="240" viewBox="0 0 160 240">
                    {/* Glow */}
                    <circle cx="80" cy="90" r="70" fill="rgba(255,255,255,0.05)" />
                    <circle cx="80" cy="90" r="55" fill="rgba(255,255,255,0.08)" />
                    {/* Bulb */}
                    <path d="M80 20 C110 20 130 45 130 75 C130 100 115 115 110 130 L50 130 C45 115 30 100 30 75 C30 45 50 20 80 20Z"
                        fill="rgba(255,255,255,0.25)" />
                    {/* Base */}
                    <rect x="52" y="130" width="56" height="12" rx="4" fill="rgba(255,255,255,0.3)" />
                    <rect x="55" y="142" width="50" height="12" rx="4" fill="rgba(255,255,255,0.25)" />
                    <rect x="60" y="154" width="40" height="10" rx="4" fill="rgba(255,255,255,0.2)" />
                    {/* Filament */}
                    <polyline points="65,115 72,95 80,110 88,90 95,105"
                        fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Rays */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                        <line key={i}
                            x1={80 + 58 * Math.cos((deg - 90) * Math.PI / 180)}
                            y1={75 + 58 * Math.sin((deg - 90) * Math.PI / 180)}
                            x2={80 + 72 * Math.cos((deg - 90) * Math.PI / 180)}
                            y2={75 + 72 * Math.sin((deg - 90) * Math.PI / 180)}
                            stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round"
                        />
                    ))}
                </svg>
            </div>
        </section>
    );
}
