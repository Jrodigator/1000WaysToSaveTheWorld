export default function Way03() {
    return (
        <section id="way-3" className="snap-section" style={{ background: 'var(--c-way3)' }}>
            {/* Wave background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {[0, 1, 2, 3].map(i => (
                    <svg key={i} style={{
                        position: 'absolute',
                        bottom: `${i * 60 - 40}px`,
                        left: 0, width: '200%',
                        opacity: 0.08 + i * 0.04,
                        animationDelay: `${i * 0.5}s`,
                    }} className="animate-float-slow" viewBox="0 0 1440 120" preserveAspectRatio="none">
                        <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
                            fill="#fff" />
                    </svg>
                ))}
                {/* Water drops */}
                {[...Array(8)].map((_, i) => (
                    <svg key={i} className="animate-float" style={{
                        position: 'absolute',
                        top: `${(i * 37) % 80}%`, left: `${(i * 53) % 85}%`,
                        opacity: 0.15,
                        animationDelay: `${i * 0.7}s`,
                    }} width="40" height="55" viewBox="0 0 40 55">
                        <path d="M20 2 C20 2 2 28 2 38 C2 48 10 53 20 53 C30 53 38 48 38 38 C38 28 20 2 20 2Z"
                            fill="#fff" />
                    </svg>
                ))}
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', padding: '2rem 6rem', maxWidth: '1200px' }}>
                <div>
                    <span className="way-number" style={{ color: '#fff', position: 'static', display: 'block', marginBottom: '-1rem' }}>03</span>
                    <h2 className="way-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>
                        Save<br />Water 💧
                    </h2>
                    <p className="way-body" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        Only 3% of Earth's water is fresh — and most of that is frozen. Fix leaky taps,
                        take shorter showers, collect rainwater for the garden. Every drop you save
                        is a drop that stays in the ecosystem.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['🚿 Shorter showers', '🔧 Fix leaks', '🌧️ Rainwater'].map(tag => (
                            <span key={tag} style={{
                                background: 'rgba(255,255,255,0.2)',
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

                {/* Big drop decoration */}
                <svg className="animate-float delay-300" style={{ flexShrink: 0, opacity: 0.4 }}
                    width="200" height="260" viewBox="0 0 200 260">
                    <path d="M100 10 C100 10 10 120 10 170 C10 220 50 250 100 250 C150 250 190 220 190 170 C190 120 100 10 100 10Z"
                        fill="#fff" />
                    <path d="M100 60 C100 60 50 130 50 165 C50 195 72 210 100 210"
                        stroke="rgba(72,202,228,0.5)" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
            </div>
        </section>
    );
}
