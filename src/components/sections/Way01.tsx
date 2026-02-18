export default function Way01() {
    return (
        <section id="way-1" className="snap-section" style={{ background: 'var(--c-way1)' }}>
            {/* Background shapes */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {/* Big circle top-right */}
                <div className="animate-float-slow" style={{
                    position: 'absolute', top: '-6rem', right: '-6rem',
                    width: '32rem', height: '32rem', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                }} />
                {/* Leaf clusters */}
                {[...Array(6)].map((_, i) => (
                    <svg key={i} className="animate-float" style={{
                        position: 'absolute',
                        top: `${10 + i * 15}%`, left: `${5 + i * 14}%`,
                        opacity: 0.12,
                        animationDelay: `${i * 0.8}s`,
                        animationDuration: `${6 + i}s`,
                    }} width="60" height="80" viewBox="0 0 60 80">
                        <path d="M30 5 C55 5 58 40 30 75 C2 40 5 5 30 5Z" fill="#fff" />
                    </svg>
                ))}
                {/* Small circles */}
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="animate-float" style={{
                        position: 'absolute',
                        width: `${20 + i * 10}px`, height: `${20 + i * 10}px`,
                        borderRadius: '50%',
                        border: '2px solid rgba(255,255,255,0.15)',
                        top: `${(i * 41) % 90}%`, left: `${(i * 67) % 90}%`,
                        animationDelay: `${i * 0.5}s`,
                    }} />
                ))}
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', padding: '2rem 6rem', maxWidth: '1200px' }}>
                <div>
                    <span className="way-number" style={{ color: '#fff', position: 'static', display: 'block', marginBottom: '-1rem' }}>01</span>
                    <h2 className="way-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>
                        Plant a<br />Tree 🌱
                    </h2>
                    <p className="way-body" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        A single tree absorbs up to 22kg of CO₂ per year. Planting trees restores habitats,
                        prevents soil erosion, and cools urban heat islands. Find a local planting initiative
                        or start in your own backyard.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['🌳 Carbon sink', '🐦 Habitat', '💧 Water cycle'].map(tag => (
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

                {/* Decorative tree SVG */}
                <div className="animate-float" style={{ flexShrink: 0, display: 'none' }} />
                <svg className="animate-float delay-300" style={{ flexShrink: 0, opacity: 0.9 }}
                    width="220" height="280" viewBox="0 0 220 280">
                    <rect x="95" y="200" width="30" height="70" rx="6" fill="rgba(255,255,255,0.3)" />
                    <ellipse cx="110" cy="160" rx="70" ry="80" fill="rgba(255,255,255,0.15)" />
                    <ellipse cx="110" cy="120" rx="55" ry="65" fill="rgba(255,255,255,0.2)" />
                    <ellipse cx="110" cy="85" rx="40" ry="50" fill="rgba(255,255,255,0.25)" />
                </svg>
            </div>
        </section>
    );
}
