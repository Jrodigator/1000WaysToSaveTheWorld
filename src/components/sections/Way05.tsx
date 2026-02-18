export default function Way05() {
    return (
        <section id="way-5" className="snap-section" style={{ background: 'var(--c-way5)' }}>
            {/* Sunburst rays */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div className="animate-spin-slow" style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '140vmax', height: '140vmax',
                }}>
                    {[...Array(24)].map((_, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            width: '50%', height: '3px',
                            transformOrigin: '0 50%',
                            transform: `rotate(${i * 15}deg)`,
                            background: `rgba(255,255,255,${0.04 + (i % 3) * 0.02})`,
                        }} />
                    ))}
                </div>
                {/* Concentric circles */}
                {[200, 350, 500].map((r, i) => (
                    <div key={i} style={{
                        position: 'absolute', top: '50%', left: '50%',
                        width: `${r}px`, height: `${r}px`,
                        borderRadius: '50%',
                        border: '2px solid rgba(255,255,255,0.08)',
                        transform: 'translate(-50%, -50%)',
                    }} />
                ))}
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', padding: '2rem 6rem', maxWidth: '1200px' }}>
                <div>
                    <span className="way-number" style={{ color: 'rgba(26,26,26,0.15)', position: 'static', display: 'block', marginBottom: '-1rem' }}>05</span>
                    <h2 className="way-title" style={{ color: '#1a1a1a', marginBottom: '1.5rem' }}>
                        Go<br />Solar ☀️
                    </h2>
                    <p className="way-body" style={{ color: 'rgba(26,26,26,0.7)' }}>
                        Solar panels have dropped 90% in cost over the last decade. Even a small rooftop
                        installation can power your home and feed excess energy back to the grid.
                        The sun delivers more energy in an hour than humanity uses in a year.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['⚡ Free energy', '💰 Save money', '🔋 Battery storage'].map(tag => (
                            <span key={tag} style={{
                                background: 'rgba(26,26,26,0.1)',
                                borderRadius: '2rem',
                                padding: '0.4rem 1rem',
                                color: '#1a1a1a',
                                fontSize: '0.85rem',
                                fontFamily: "'Space Grotesk', sans-serif",
                            }}>{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Sun SVG */}
                <svg className="animate-spin-slow" style={{ flexShrink: 0, opacity: 0.5 }}
                    width="220" height="220" viewBox="0 0 220 220">
                    <circle cx="110" cy="110" r="55" fill="rgba(26,26,26,0.2)" />
                    {[...Array(12)].map((_, i) => (
                        <line key={i}
                            x1="110" y1="110"
                            x2={110 + 95 * Math.cos((i * 30 - 90) * Math.PI / 180)}
                            y2={110 + 95 * Math.sin((i * 30 - 90) * Math.PI / 180)}
                            stroke="rgba(26,26,26,0.3)" strokeWidth={i % 2 === 0 ? 6 : 3}
                            strokeLinecap="round"
                        />
                    ))}
                </svg>
            </div>
        </section>
    );
}
