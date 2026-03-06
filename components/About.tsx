"use client";

import { useReveal } from "@/lib/useReveal";
import Image from "next/image";

const stats = [
  { num: "72h", label: "Fermentation" },
  { num: "4", label: "Locations" },
  { num: "100%", label: "Heritage Grain" },
];

export default function About() {
  useReveal();

  return (
    <section
      id="about"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-surface-light dark:bg-surface-dark overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
        {/* Image column */}
        <div className="order-2 md:order-1 relative reveal">
          {/* Decorative offset border */}
          <div className="absolute -top-6 -left-6 w-full h-full border border-primary/15 rounded-2xl hidden md:block z-0 pointer-events-none" />
          <div className="absolute -top-3 -left-3 w-full h-full border border-primary/08 rounded-2xl hidden md:block z-0 pointer-events-none" />

          <div className="relative z-10 overflow-hidden rounded-2xl shadow-[0_32px_80px_-16px_rgba(0,0,0,0.25)] group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeM4PuZMRs1oyMwBmRDdmL7rlJPKFjMMH3ow6qCmd5_xv2i45fisQCCBa4VB31pWFpwwvMxG4HmFH74RukSst_g7y32jNHb_wq4u6vjAtcNmjqrAWIZaX2W7g9G2N0PPsL9ByLXrN0COat2ZGFmDsChj_-QLu_G8M7D7Vl-PeDvxS-EU2nPx2prk2X73Tz2YbGvrCs2gMz50dlIz3xkYSjNt6oe_DvKtiMcN4pQTp8qJ-d09nYFJPf2FdCA6itTrHaZ5m2gBqdr3kf"
              alt="Baker working dough"
              width={700}
              height={900}
              quality={80}
              className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[680px] object-cover grayscale hover:grayscale-0 group-hover:scale-[1.04]
                         transition-all duration-700 md:duration-[1200ms] ease-expo"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Corner label */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-5 left-6 text-[9px] text-white/60 uppercase tracking-[0.3em] font-brand">
              The Craft
            </span>
          </div>
        </div>

        {/* Text column */}
        <div className="order-1 md:order-2 space-y-10 reveal" style={{ transitionDelay: "180ms" }}>
          <div>
            <p className="text-[10px] font-bold text-primary tracking-[0.35em] uppercase flex items-center gap-4 mb-6 font-brand">
              <span className="block w-10 h-px bg-primary" />
              The Philosophy
            </p>
            <h2 className="font-display text-stone-900 dark:text-stone-50 leading-[1.08] text-[clamp(2.6rem,5vw,4.5rem)]">
              Where tradition meets{" "}
              <em className="text-primary not-italic">modern luxury.</em>
            </h2>
          </div>

          <div className="space-y-5 max-w-lg">
            <p className="text-stone-500 dark:text-stone-400 leading-[1.85] font-sans font-light text-[1.1rem]">
              Born from a passion for the alchemical process of baking, Bakerist
              is more than just a café — it is a sanctuary for those who
              appreciate the finer details.
            </p>
            <p className="text-stone-500 dark:text-stone-400 leading-[1.85] font-sans font-light text-[1.1rem]">
              We source our flour from heritage grains, our coffee beans from
              sustainable micro-lots, and our inspiration from the vibrant
              architectural landscape of Dubai.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-0 pt-4 border-t border-stone-200 dark:border-stone-700/50">
            {stats.map(({ num, label }, i) => (
              <div
                key={label}
                className={`py-4 sm:py-6 text-center ${
                  i < stats.length - 1
                    ? "border-r border-stone-200 dark:border-stone-700/50"
                    : ""
                }`}
              >
                <p className="font-display text-primary text-2xl sm:text-3xl font-bold mb-1">
                  {num}
                </p>
                <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-stone-400 font-brand font-semibold">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
