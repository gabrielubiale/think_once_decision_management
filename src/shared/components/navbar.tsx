'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChartBar, Scales, FileText } from 'phosphor-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: ChartBar },
    { href: '/decisions', label: 'Decisions', icon: Scales },
    { href: '/rules', label: 'Rules', icon: FileText },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col transition-base z-50"
        style={{
          background: 'var(--surface)',
          borderRight: '1px solid var(--border)',
        }}
      >
        <div className="flex items-center justify-center p-5" style={{ borderColor: 'var(--border)' }}>       <span className="text-lg" style={{ color: 'var(--foreground)' }}>
            Think Once
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-base ${
                  active ? '' : 'hover:opacity-80'
                }`}
                style={{
                  background: active ? 'var(--primary)' : 'transparent',
                  color: active ? '#fff' : 'var(--foreground-secondary)',
                }}
              >
                <Icon size={20} weight={active ? 'bold' : 'regular'} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

      </aside>

    </>
  );
}
