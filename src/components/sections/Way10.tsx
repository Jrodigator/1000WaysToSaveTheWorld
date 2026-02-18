export default function Way10() {
    return (
        <section id="way-10" className="snap-section" style={{ background: 'var(--c-way10)' }}>
            {/* Speech bubble shapes background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {[...Array(7)].map((_, i) => {
                    const size = 60 + i * 30;
                    return (
                        <svg key={i} className="animate-float" style={{
                            position: 'absolute',
                            top: `${(i * 41) % 85}%`, left: `${(i * 57) % 85}%`,
                            opacity: 0.08,
                            animationDelay: `${i * 0.6}s`,
                            animationDuration: `${5 + i * 0.5}s`,
                        }} width={size} height={size * 0.9} viewBox="0 0 100 90">
                            <rect x="5" y="5" width="90" height="65" rx="15" fill="#fff" />
                            <polygon points="20,70 35,70 20,90" fill="#fff" />
                        </svg>
                    );
                })}
                {/* Confetti dots */}
                {[...Array(25)].map((_, i) => (
                    <div key={i} className="animate-float" style={{
                        position: 'absolute',
                        width: `${4 + (i % 4) * 3}px`, height: `${4 + (i % 4) * 3}px`,
                        borderRadius: i % 3 === 0 ? '50%' : '2px',
                        background: `rgba(255,255,255,${0.15 + (i % 5) * 0.05})`,
                        top: `${(i * 37) % 95}%`, left: `${(i * 61) % 95}%`,
                        transform: `rotate(${i * 27}deg)`,
                        animationDelay: `${i * 0.25}s`,
                        animationDuration: `${4 + i * 0.3}s`,
                    }} />
                ))}
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', padding: '2rem 6rem', maxWidth: '1200px' }}>
                <div>
                    <span className="way-number" style={{ color: '#fff', position: 'static', display: 'block', marginBottom: '-1rem' }}>10</span>
                    <h2 className="way-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>
                        Spread<br />the Word 📢
                    </h2>
                    <p className="way-body" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Individual action matters — but collective action changes the world.
                        Share what you've learned, vote for green policies, support eco-friendly
                        businesses, and inspire the people around you. The most powerful thing
                        you can do is make sustainability contagious.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['📱 Share online', '🗳️ Vote green', '👥 Community'].map(tag => (
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

                {/* Speech bubble cluster */}
                <div style={{ flexShrink: 0, position: 'relative', width: '200px', height: '200px' }}>
                    {[
                        { x: 10, y: 10, w: 130, h: 80, delay: '0s' },
                        { x: 60, y: 90, w: 110, h: 70, delay: '0.3s' },
                        { x: 20, y: 150, w: 90, h: 55, delay: '0.6s' },
                    ].map((b, i) => (
                        <svg key={i} className="animate-float" style={{
                            position: 'absolute', top: `${b.y}px`, left: `${b.x}px`,
                            opacity: 0.35, animationDelay: b.delay,
                        }} width={b.w} height={b.h + 20} viewBox={`0 0 ${b.w} ${b.h + 20}`}>
                            <rect x="3" y="3" width={b.w - 6} height={b.h - 6} rx="12" fill="rgba(255,255,255,0.5)" />
                            <polygon points={`15,${b.h - 3} 30,${b.h - 3} 15,${b.h + 17}`} fill="rgba(255,255,255,0.5)" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Footer note */}
            <div style={{
                position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
                textAlign: 'center',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.1em',
            }}>
                990 more ways coming soon ✨
            </div>
        </section>
    );
}
