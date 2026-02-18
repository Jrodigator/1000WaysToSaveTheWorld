import ScrollIndicator from '@/components/ScrollIndicator';

export default function Landing() {
    return (
        <section id="landing" className="snap-section" style={{ background: 'var(--c-landing)' }}>
            {/* Background floating shapes */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {/* Large circle top-left */}
                <div className="animate-float-slow" style={{
                    position: 'absolute', top: '-8rem', left: '-8rem',
                    width: '28rem', height: '28rem', borderRadius: '50%',
                    border: '2px solid rgba(6,214,160,0.15)',
                }} />
                <div className="animate-float-slow delay-1000" style={{
                    position: 'absolute', top: '-4rem', left: '-4rem',
                    width: '20rem', height: '20rem', borderRadius: '50%',
                    border: '2px solid rgba(6,214,160,0.1)',
                }} />
                {/* Dot grid */}
                {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="animate-float" style={{
                        position: 'absolute',
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: `rgba(6,214,160,${0.1 + (i % 5) * 0.05})`,
                        top: `${(i * 37) % 100}%`,
                        left: `${(i * 53) % 100}%`,
                        animationDelay: `${(i * 0.4) % 6}s`,
                        animationDuration: `${5 + (i % 4)}s`,
                    }} />
                ))}
                {/* Large leaf shape bottom-right */}
                <svg style={{ position: 'absolute', bottom: '-4rem', right: '-4rem', opacity: 0.08 }}
                    width="400" height="400" viewBox="0 0 400 400">
                    <path d="M200 20 C350 20 380 200 200 380 C20 200 50 20 200 20Z"
                        fill="#06D6A0" className="animate-float-slow delay-2000" />
                </svg>
            </div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
                <p className="animate-fade-in-up" style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#06D6A0',
                    marginBottom: '1.5rem',
                }}>
                    A guide to a greener future
                </p>

                <h1 className="animate-fade-in-up delay-200" style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(3rem, 9vw, 8rem)',
                    lineHeight: 1.0,
                    color: '#fff',
                    marginBottom: '1rem',
                    maxWidth: '14ch',
                    margin: '0 auto 1.5rem',
                }}>
                    1000 Ways<br />
                    <span style={{
                        background: 'linear-gradient(135deg, #06D6A0, #48CAE4, #FFBE0B)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        to Save the Planet
                    </span>
                </h1>

                <p className="animate-fade-in-up delay-500" style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'rgba(255,255,255,0.55)',
                    maxWidth: '40ch',
                    margin: '0 auto',
                    lineHeight: 1.6,
                }}>
                    Small actions. Big impact. Scroll through 1000 ways you can help save the Earth — starting today.
                </p>
            </div>

            <ScrollIndicator />
        </section>
    );
}
