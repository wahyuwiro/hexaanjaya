'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/#home', label: 'Beranda' },
  { href: '/#about', label: 'Tentang' },
  { href: '/produk', label: 'Produk' },
  { href: '/#services', label: 'Layanan' },
  { href: '/#contact', label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-lg">
      <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between py-5">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm">
            <Image
              src="/logo-mark.png"
              alt="HEXA ANJAYA TECH"
              width={28}
              height={14}
              priority
              className="h-auto w-full object-contain"
            />
          </span>

          <h1 className="font-extrabold tracking-wide">
            HEXA
            <span className="text-cyan-400"> ANJAYA TECH</span>
          </h1>
        </Link>

        <div className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-[5%] py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
