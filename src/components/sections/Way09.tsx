export default function Way09() {
    const wavePaths = [
        "M0,60 C180,20 360,100 550,60 C730,20 900,100 1100,60",
        "M0,60 C200,30 380,110 550,60 C740,30 920,110 1100,60",
        "M0,60 C190,10 370,90 550,60 C720,10 910,90 1100,60",
        "M0,60 C210,40 390,120 550,60 C750,40 930,120 1100,60",
        "M0,60 C170,15 350,95 550,60 C710,15 890,95 1100,60",
    ];

    return (
        <section id="way-9" className="snap-section" style={{ background: 'var(--c-way9)' }}>
            {/* Deep ocean wave arcs */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {wavePaths.map((d, i) => (
                    <svg key={i} style={{
                        position: 'absolute',
                        top: `${i * 20 - 10}%`,
                        left: '-5%',
                        width: '110%',
                        opacity: 0.06 + i * 0.02,
                        animationDelay: `${i * 0.8}s`,
                    }}
                        className={i % 2 === 0 ? 'animate-float' : 'animate-float-slow'}
                        viewBox="0 0 1100 120"
                        preserveAspectRatio="none"
                    >
                        <path d={d} fill="none" stroke="#fff" strokeWidth="3" />
                    </svg>
                ))}
                {/* Bubbles */}
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="animate-float" style={{
                        position: 'absolute',
                        width: `${10 + (i % 5) * 8}px`,
                        height: `${10 + (i % 5) * 8}px`,
                        borderRadius: '50%',
                        border: '2px solid rgba(255,255,255,0.15)',
                        top: `${(i * 43) % 90}%`,
                        left: `${(i * 67) % 90}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${4 + i * 0.6}s`,
                    }} />
                ))}
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', padding: '2rem 6rem', maxWidth: '1200px' }}>
                {/* Ocean/fish SVG */}
                <svg className="animate-float delay-200" style={{ flexShrink: 0, opacity: 0.6 }}
                    width="240" height="200" viewBox="0 0 240 200">
                    {/* Waves */}
                    <path d="M10,100 C50,70 90,130 130,100 C170,70 210,130 230,100"
                        fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeLinecap="round" />
                    <path d="M10,120 C50,90 90,150 130,120 C170,90 210,150 230,120"
                        fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="3" strokeLinecap="round" />
                    {/* Fish */}
                    <ellipse cx="120" cy="60" rx="40" ry="22" fill="rgba(255,255,255,0.25)" />
                    <polygon points="160,60 185,40 185,80" fill="rgba(255,255,255,0.2)" />
                    <circle cx="95" cy="55" r="5" fill="rgba(255,255,255,0.5)" />
                    {/* Small fish */}
                    <ellipse cx="60" cy="150" rx="22" ry="12" fill="rgba(255,255,255,0.15)" />
                    <polygon points="82,150 96,140 96,160" fill="rgba(255,255,255,0.12)" />
                    <circle cx="48" cy="147" r="3" fill="rgba(255,255,255,0.4)" />
                </svg>

                <div>
                    <span className="way-number" style={{ color: '#fff', position: 'static', display: 'block', marginBottom: '-1rem' }}>09</span>
                    <h2 className="way-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>
                        Protect<br />the Ocean 🌊
                    </h2>
                    <p className="way-body" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Oceans absorb 30% of our CO₂ and produce over half the world's oxygen.
                        Support marine protected areas, avoid products with unsustainable seafood,
                        and join beach clean-ups. What happens on land ends up in the sea.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['🐠 Marine life', '🏖️ Beach clean-ups', '🐟 Sustainable fish'].map(tag => (
                            <span key={tag} style={{
                                background: 'rgba(255,255,255,0.1)',
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
