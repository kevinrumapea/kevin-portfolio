'use client';

import GooeyNav from './GooeyNav';

const items = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Guestbook', href: '#guestbook' },
  
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
          Kevin<span className="text-sky-400">.dev</span>
        </div>

        <GooeyNav items={items} initialActiveIndex={0} />
      </div>
    </nav>
  );
}