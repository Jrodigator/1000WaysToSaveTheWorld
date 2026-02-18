export default function Way02() {
    return (
        <section id="way-2" className="snap-section" style={{ background: 'var(--c-way2)' }}>
            {/* Background triangles */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {[...Array(10)].map((_, i) => {
                    const size = 40 + i * 25;
                    return (
                        <svg key={i} className="animate-float" style={{
                            position: 'absolute',
                            top: `${(i * 31) % 90}%`, left: `${(i * 47) % 90}%`,
                            opacity: 0.1 + (i % 3) * 0.05,
                            animationDelay: `${i * 0.6}s`,
                            animationDuration: `${5 + i * 0.5}s`,
                        }} width={size} height={size} viewBox="0 0 100 100">
                            <polygon points="50,5 95,95 5,95" fill="#1a1a1a" />
                        </svg>
                    );
                })}
                {/* Recycle symbol large */}
                <svg style={{ position: 'absolute', right: '5%', top: '10%', opacity: 0.07 }}
                    className="animate-spin-slow" width="350" height="350" viewBox="0 0 100 100">
                    <path d="M50 10 L65 35 L55 35 L55 55 L75 55 L75 45 L90 60 L75 75 L75 65 L45 65 L45 35 L35 35 Z" fill="#1a1a1a" />
                    <path d="M50 10 L65 35 L55 35 L55 55 L75 55 L75 45 L90 60 L75 75 L75 65 L45 65 L45 35 L35 35 Z" fill="#1a1a1a"
                        transform="rotate(120 50 50)" />
                    <path d="M50 10 L65 35 L55 35 L55 55 L75 55 L75 45 L90 60 L75 75 L75 65 L45 65 L45 35 L35 35 Z" fill="#1a1a1a"
                        transform="rotate(240 50 50)" />
                </svg>
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', padding: '2rem 6rem', maxWidth: '1200px' }}>
                {/* Big recycling arrows decoration */}
                <div style={{ flexShrink: 0, position: 'relative', width: '200px', height: '200px' }}>
                    {[0, 120, 240].map((deg, i) => (
                        <div key={i} className="animate-float" style={{
                            position: 'absolute', top: '50%', left: '50%',
                            width: '80px', height: '80px',
                            background: 'rgba(26,26,26,0.15)',
                            borderRadius: '8px',
                            transform: `rotate(${deg}deg) translate(60px, -50%)`,
                            animationDelay: `${i * 0.5}s`,
                        }}>
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <polygon points="40,8 72,68 8,68" fill="rgba(26,26,26,0.5)" />
                            </svg>
                        </div>
                    ))}
                </div>

                <div>
                    <span className="way-number" style={{ color: '#1a1a1a', position: 'static', display: 'block', marginBottom: '-1rem' }}>02</span>
                    <h2 className="way-title" style={{ color: '#1a1a1a', marginBottom: '1.5rem' }}>
                        Recycle<br />Right ♻️
                    </h2>
                    <p className="way-body" style={{ color: 'rgba(26,26,26,0.75)' }}>
                        Contaminated recycling ends up in landfill. Learn what your local facility actually
                        accepts — rinse containers, remove lids, and never "wish-cycle." Doing it right
                        means materials actually get a second life.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['📦 Less landfill', '⚡ Saves energy', '🏭 Less mining'].map(tag => (
                            <span key={tag} style={{
                                background: 'rgba(26,26,26,0.12)',
                                borderRadius: '2rem',
                                padding: '0.4rem 1rem',
                                color: '#1a1a1a',
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
