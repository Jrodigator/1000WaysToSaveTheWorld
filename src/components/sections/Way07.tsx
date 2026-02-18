export default function Way07() {
    return (
        <section id="way-7" className="snap-section" style={{ background: 'var(--c-way7)' }}>
            {/* Leaf shapes background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {[...Array(10)].map((_, i) => {
                    const size = 60 + (i % 4) * 40;
                    const rotation = i * 36;
                    return (
                        <svg key={i} className="animate-float-slow" style={{
                            position: 'absolute',
                            top: `${(i * 37) % 90}%`, left: `${(i * 53) % 90}%`,
                            opacity: 0.08,
                            transform: `rotate(${rotation}deg)`,
                            animationDelay: `${i * 0.7}s`,
                        }} width={size} height={size * 1.3} viewBox="0 0 60 80">
                            <path d="M30 5 C55 5 58 40 30 75 C2 40 5 5 30 5Z" fill="#fff" />
                            <line x1="30" y1="10" x2="30" y2="70" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                        </svg>
                    );
                })}
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', padding: '2rem 6rem', maxWidth: '1200px' }}>
                {/* Plate decoration */}
                <div style={{ flexShrink: 0, position: 'relative' }}>
                    <svg className="animate-float" width="220" height="220" viewBox="0 0 220 220">
                        {/* Plate */}
                        <circle cx="110" cy="110" r="100" fill="rgba(255,255,255,0.15)" />
                        <circle cx="110" cy="110" r="85" fill="rgba(255,255,255,0.1)" />
                        {/* Food items */}
                        <ellipse cx="90" cy="100" rx="25" ry="18" fill="rgba(255,255,255,0.3)" />
                        <ellipse cx="130" cy="115" rx="20" ry="15" fill="rgba(255,255,255,0.25)" />
                        <circle cx="110" cy="90" r="12" fill="rgba(255,255,255,0.35)" />
                        {/* Leaf garnish */}
                        <path d="M100 130 C110 115 125 120 120 135 C115 150 100 145 100 130Z"
                            fill="rgba(255,255,255,0.4)" />
                    </svg>
                </div>

                <div>
                    <span className="way-number" style={{ color: '#fff', position: 'static', display: 'block', marginBottom: '-1rem' }}>07</span>
                    <h2 className="way-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>
                        Eat Less<br />Meat 🥦
                    </h2>
                    <p className="way-body" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        Animal agriculture produces 14.5% of global greenhouse gas emissions.
                        You don't have to go vegan — just reducing meat consumption by half
                        can cut your food-related carbon footprint dramatically. Try Meat-Free Mondays!
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['🌿 Plant-based', '🐄 Less livestock', '🍽️ Flexitarian'].map(tag => (
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
