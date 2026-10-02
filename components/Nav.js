'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/projects', 'Projects'],
  ['/skills', 'Technology'],
  ['/journey', 'Journey'],
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav shell">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">M.</span>
          <span className="brand-name">Mahika Bommana</span>
        </Link>
        <button className="menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([href, label]) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return <Link key={href} href={href} className={active ? 'active' : ''} onClick={() => setOpen(false)}>{label}</Link>;
          })}
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>Let’s talk ↗</Link>
        </div>
      </nav>
    </header>
  );
}
