'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Wrench } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/contacto', label: 'Contacto' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.6)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #2a2a2a' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Wrench size={22} className="text-novex-red transition-transform group-hover:rotate-12" />
          <span
            className="font-display text-2xl tracking-widest text-novex-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-novex-red">AUTO</span>TALLER
            <span className="text-novex-red ml-1">NOVEX</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
              style={{
                color: pathname === href ? '#dc2626' : '#f9fafb',
                fontFamily: 'var(--font-body)',
              }}
            >
              {label}
              {pathname === href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-novex-red" />
              )}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="px-5 py-2 bg-novex-red text-white text-sm font-bold uppercase tracking-widest rounded transition-colors hover:bg-novex-red-dark"
          >
            Pedir Cita
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-novex-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-novex-surface border-t border-novex-border px-4 py-6 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-lg font-semibold uppercase tracking-widest"
              style={{ color: pathname === href ? '#dc2626' : '#f9fafb' }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-2 px-5 py-3 bg-novex-red text-white text-sm font-bold uppercase tracking-widest rounded text-center"
          >
            Pedir Cita
          </Link>
        </div>
      )}
    </header>
  );
}
