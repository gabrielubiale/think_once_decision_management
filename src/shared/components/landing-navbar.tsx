'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function LandingNavbar() {
  const navLinks = [
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#solucoes', label: 'Soluções' },
    { href: '#casos-de-uso', label: 'Casos de Uso' },
    { href: '#recursos', label: 'Recursos' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <div className="w-full flex justify-center fixed top-0 left-0 right-0 z-50">
      <nav
        className="w-[90%] mt-5 z-50 transition-base rounded-lg backdrop-blur-lg"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(192, 192, 192, 0.4)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Think Once Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
              Think Once
            </span>
          </Link>

          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm font-semibold transition-base hover:opacity-80"
                style={{ color: 'var(--foreground-secondary)' }}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-lg font-semibold text-sm transition-base"
              style={{
                background: 'var(--primary)',
                color: '#fff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
              }}
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
