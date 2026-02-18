'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
    { label: '🌍', id: 'landing' },
    { label: '#1', id: 'way-1' },
    { label: '#2', id: 'way-2' },
    { label: '#3', id: 'way-3' },
    { label: '#4', id: 'way-4' },
    { label: '#5', id: 'way-5' },
    { label: '#6', id: 'way-6' },
    { label: '#7', id: 'way-7' },
    { label: '#8', id: 'way-8' },
    { label: '#9', id: 'way-9' },
    { label: '#10', id: 'way-10' },
];

export default function Nav() {
    const [active, setActive] = useState('landing');

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        NAV_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id); },
                { threshold: 0.5 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            style={{
                position: 'fixed',
                right: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                alignItems: 'center',
            }}
        >
            {NAV_ITEMS.map(({ label, id }) => {
                const isActive = active === id;
                return (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        title={id}
                        style={{
                            width: isActive ? '2.6rem' : '2rem',
                            height: isActive ? '2.6rem' : '2rem',
                            borderRadius: '50%',
                            border: '2px solid rgba(255,255,255,0.7)',
                            background: isActive ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.35)',
                            color: isActive ? '#111' : 'rgba(255,255,255,0.85)',
                            fontSize: id === 'landing' ? '1rem' : '0.6rem',
                            fontWeight: 700,
                            fontFamily: "'Outfit', sans-serif",
                            cursor: 'pointer',
                            transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                            backdropFilter: 'blur(8px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: isActive ? '0 0 0 4px rgba(255,255,255,0.25)' : 'none',
                        }}
                    >
                        {label}
                    </button>
                );
            })}
        </nav>
    );
}
