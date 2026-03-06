"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Our Story", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 mx-auto px-4 sm:px-6 md:px-7 rounded-full glass-nav flex justify-between items-center transition-all duration-500 shadow-2xl ${
        scrolled
          ? "max-w-4xl py-2.5 sm:py-3 top-3 sm:top-4"
          : "max-w-5xl py-3 sm:py-4"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-[1.35rem] sm:text-[1.65rem] font-bold font-brand text-primary dark:text-white tracking-[-0.04em] hover:opacity-75 transition-opacity min-h-[44px] flex items-center"
      >
        bakerist
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-10">
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="nav-link text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-700 dark:text-stone-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="#locations"
        className="hidden md:inline-flex btn-shimmer text-white px-7 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
      >
        Book a Table
      </Link>

      {/* Mobile hamburger - 44px min touch target */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-3 min-w-[44px] min-h-[44px] items-center justify-center -mr-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-stone-800 dark:bg-white transition-all duration-300 origin-center ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-stone-800 dark:bg-white transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-stone-800 dark:bg-white transition-all duration-300 origin-center ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full mt-3 left-2 right-2 sm:left-4 sm:right-4 glass-nav rounded-2xl p-6 flex flex-col gap-5 md:hidden shadow-2xl max-h-[calc(100dvh-100px)] overflow-y-auto">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-800 dark:text-stone-200 hover:text-primary transition-colors py-2 min-h-[44px] flex items-center"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#locations"
            onClick={() => setMenuOpen(false)}
            className="btn-shimmer text-white px-6 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest text-center min-h-[48px] flex items-center justify-center"
          >
            Book a Table
          </Link>
        </div>
      )}
    </nav>
  );
}
