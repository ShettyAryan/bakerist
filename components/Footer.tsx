"use client";

import { useState } from "react";
import Link from "next/link";

const explore = [
  { label: "Our Story", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

const hours = [
  { days: "Mon – Fri", time: "7:00 AM – 10:00 PM" },
  { days: "Sat – Sun", time: "8:00 AM – 11:00 PM" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (email) setSubmitted(true);
  };

  return (
    <footer className="bg-[#0F0E0C] text-white pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-[1.9rem] sm:text-[2.2rem] font-brand font-bold text-white mb-4 sm:mb-6 tracking-[-0.04em]">
              bakerist
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-6 sm:mb-8 max-w-[200px] font-sans font-light">
              In Bread We Trust.
              <br />
              Elevating the daily ritual of coffee and bread in the heart of
              Dubai.
            </p>
            <div className="flex gap-5">
              <a
                href="#"
                className="text-stone-600 hover:text-primary transition-all hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="TikTok"
              >
                <span className="material-symbols-outlined text-xl">
                  social_leaderboard
                </span>
              </a>
              <a
                href="#"
                className="text-stone-600 hover:text-primary transition-all hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-xl">
                  photo_camera
                </span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-base sm:text-lg text-stone-200 mb-5 sm:mb-7">
              Explore
            </h4>
            <ul className="space-y-3 sm:space-y-3.5">
              {explore.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-stone-500 text-sm hover:text-white hover:translate-x-1.5
                               flex items-center transition-all duration-300 font-sans font-light py-1.5 min-h-[44px] w-fit"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-base sm:text-lg text-stone-200 mb-5 sm:mb-7">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              {hours.map(({ days, time }) => (
                <li
                  key={days}
                  className="flex justify-between text-sm border-b border-stone-800/60 pb-3"
                >
                  <span className="text-stone-500 font-sans font-light">
                    {days}
                  </span>
                  <span className="text-stone-200 font-sans text-right">{time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 sm:mt-7">
              <a
                href="mailto:hello@bakerist.ae"
                className="text-primary hover:text-white transition-colors text-sm font-sans inline-block py-2"
              >
                hello@bakerist.ae
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-display text-base sm:text-lg text-stone-200 mb-3 sm:mb-4">
              Join the Club
            </h4>
            <p className="text-stone-500 text-sm mb-4 sm:mb-6 font-sans font-light leading-relaxed">
              Subscribe for seasonal menu updates and exclusive invites.
            </p>

            {submitted ? (
              <div className="py-4 text-primary text-sm font-brand font-semibold tracking-wide">
                ✓ You&apos;re on the list.
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-stone-900/70 border border-stone-800/60 rounded-xl px-5 py-3.5
                             text-sm text-white placeholder-stone-600
                             focus:ring-1 focus:ring-primary/60 focus:border-primary/60
                             outline-none transition-all font-sans min-h-[48px]"
                />
                <button
                  onClick={handleSubscribe}
                  className="btn-shimmer text-white px-5 py-3.5 rounded-xl text-[10px] font-bold
                             uppercase tracking-widest shadow-lg hover:shadow-primary/20
                             active:scale-95 transition-all duration-200 font-brand min-h-[48px]"
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t border-stone-800/50 mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8
                     flex flex-col md:flex-row justify-between items-center
                     text-[9px] text-stone-600 tracking-[0.15em] uppercase font-brand font-bold gap-4 text-center"
        >
          <p>© 2024 Bakerist UAE. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 sm:gap-8 justify-center">
            <a href="#" className="hover:text-stone-300 transition-colors py-2">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors py-2">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
