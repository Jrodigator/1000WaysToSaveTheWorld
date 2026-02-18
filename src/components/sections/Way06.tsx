export default function Way06() {
    return (
        <section id="way-6" className="snap-section" style={{ background: 'var(--c-way6)' }}>
            {/* Jagged/broken shapes background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {[...Array(8)].map((_, i) => (
                    <svg key={i} className="animate-float" style={{
                        position: 'absolute',
                        top: `${(i * 43) % 85}%`, left: `${(i * 59) % 85}%`,
                        opacity: 0.1,
                        animationDelay: `${i * 0.6}s`,
                        animationDuration: `${5 + i * 0.5}s`,
                    }} width="80" height="80" viewBox="0 0 80 80">
                        {/* Jagged broken shape */}
                        <polygon points="40,5 60,20 75,15 65,35 78,50 55,45 50,70 35,50 10,60 20,38 5,25 28,30"
                            fill="rgba(255,255,255,0.6)" />
                    </svg>
                ))}
                {/* Crossed-out plastic bottle */}
                <svg style={{ position: 'absolute', right: '8%', top: '15%', opacity: 0.06 }}
                    width="300" height="400" viewBox="0 0 100 140">
                    <rect x="35" y="10" width="30" height="10" rx="3" fill="#fff" />
                    <rect x="25" y="20" width="50" height="100" rx="15" fill="#fff" />
                    <line x1="10" y1="10" x2="90" y2="130" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
                    <line x1="90" y1="10" x2="10" y2="130" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
                </svg>
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', padding: '2rem 6rem', maxWidth: '1200px' }}>
                <div>
                    <span className="way-number" style={{ color: '#fff', position: 'static', display: 'block', marginBottom: '-1rem' }}>06</span>
                    <h2 className="way-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>
                        Ditch<br />Plastic 🛍️
                    </h2>
                    <p className="way-body" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        8 million tonnes of plastic enter the ocean every year. Swap single-use bags,
                        bottles, and straws for reusable alternatives. Refuse plastic packaging where
                        possible — your choices signal demand to manufacturers.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['🧴 Reusable bottle', '👜 Tote bag', '🌊 Ocean safe'].map(tag => (
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

                {/* Broken plastic shapes */}
                <div style={{ flexShrink: 0, position: 'relative', width: '180px', height: '220px' }}>
                    {[0, 1, 2, 3].map(i => (
                        <svg key={i} className="animate-float" style={{
                            position: 'absolute',
                            top: `${i * 40}px`, left: `${i * 20}px`,
                            animationDelay: `${i * 0.4}s`,
                            opacity: 0.5,
                        }} width="80" height="80" viewBox="0 0 80 80">
                            <polygon points={`${20 + i * 5},5 ${60 + i * 3},${15 + i * 2} ${70},${50 + i * 3} ${40 + i * 2},${75} ${10},${55 + i * 2}`}
                                fill="rgba(255,255,255,0.4)" />
                        </svg>
                    ))}
                </div>
            </div>
        </section>
    );
}
