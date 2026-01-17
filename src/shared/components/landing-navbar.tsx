'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function LandingNavbar() {
  return (
    <nav
      className="w-full fixed top-0 left-0 right-0 z-50 transition-base"
      style={{
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
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
  );
}

