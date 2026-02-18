export default function Way04() {
    return (
        <section id="way-4" className="snap-section" style={{ background: 'var(--c-way4)' }}>
            {/* Hexagon grid background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {[...Array(12)].map((_, i) => {
                    const size = 50 + (i % 4) * 30;
                    return (
                        <svg key={i} className="animate-float" style={{
                            position: 'absolute',
                            top: `${(i * 29) % 90}%`, left: `${(i * 61) % 90}%`,
                            opacity: 0.08 + (i % 3) * 0.04,
                            animationDelay: `${i * 0.45}s`,
                            animationDuration: `${6 + i * 0.4}s`,
                        }} width={size} height={size} viewBox="0 0 100 100">
                            <polygon points="50,2 93,26 93,74 50,98 7,74 7,26" fill="none" stroke="#fff" strokeWidth="4" />
                        </svg>
                    );
                })}
                {/* Road lines */}
                <div style={{
                    position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                    width: '120px', height: '60%',
                    background: 'rgba(255,255,255,0.04)',
                    borderLeft: '4px dashed rgba(255,255,255,0.1)',
                    borderRight: '4px dashed rgba(255,255,255,0.1)',
                }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', padding: '2rem 6rem', maxWidth: '1200px' }}>
                {/* Bike SVG */}
                <svg className="animate-wiggle" style={{ flexShrink: 0, opacity: 0.85 }}
                    width="220" height="180" viewBox="0 0 220 180">
                    {/* Wheels */}
                    <circle cx="55" cy="130" r="45" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="8" />
                    <circle cx="165" cy="130" r="45" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="8" />
                    <circle cx="55" cy="130" r="8" fill="rgba(255,255,255,0.6)" />
                    <circle cx="165" cy="130" r="8" fill="rgba(255,255,255,0.6)" />
                    {/* Frame */}
                    <line x1="55" y1="130" x2="110" y2="60" stroke="rgba(255,255,255,0.7)" strokeWidth="7" strokeLinecap="round" />
                    <line x1="110" y1="60" x2="165" y2="130" stroke="rgba(255,255,255,0.7)" strokeWidth="7" strokeLinecap="round" />
                    <line x1="110" y1="60" x2="130" y2="130" stroke="rgba(255,255,255,0.7)" strokeWidth="7" strokeLinecap="round" />
                    {/* Handlebars */}
                    <line x1="100" y1="60" x2="120" y2="60" stroke="rgba(255,255,255,0.7)" strokeWidth="7" strokeLinecap="round" />
                    <line x1="120" y1="60" x2="120" y2="40" stroke="rgba(255,255,255,0.7)" strokeWidth="7" strokeLinecap="round" />
                    {/* Seat */}
                    <line x1="95" y1="60" x2="115" y2="60" stroke="rgba(255,255,255,0.7)" strokeWidth="10" strokeLinecap="round" />
                    <line x1="105" y1="60" x2="105" y2="90" stroke="rgba(255,255,255,0.5)" strokeWidth="5" strokeLinecap="round" />
                </svg>

                <div>
                    <span className="way-number" style={{ color: '#fff', position: 'static', display: 'block', marginBottom: '-1rem' }}>04</span>
                    <h2 className="way-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>
                        Ditch<br />the Car 🚲
                    </h2>
                    <p className="way-body" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        Cars account for around 12% of global CO₂ emissions. Cycling, walking, or using
                        public transport for even one trip a week makes a measurable difference —
                        and your body will thank you too.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['🚌 Public transit', '🚶 Walk it', '🛴 E-scooter'].map(tag => (
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
            </div>
        </section>
    );
}
