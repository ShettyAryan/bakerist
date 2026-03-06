"use client";

import { useReveal } from "@/lib/useReveal";
import { Store, Waves, TreePalm, Building2 } from "lucide-react";

const locations = [
  { name: "Dubai Hills", sub: "Business Park 1", Icon: Store },
  { name: "Bluewaters", sub: "The Wharf", Icon: Waves },
  { name: "The Palm", sub: "Nakheel Mall", Icon: TreePalm },
  { name: "Business Bay", sub: "Opus Tower", Icon: Building2 },
];

export default function Locations() {
  useReveal();

  return (
    <section
      id="locations"
      className="py-28 bg-primary relative overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <p className="text-[10px] font-bold text-white/50 tracking-[0.35em] uppercase mb-4 font-brand">
            Find Us
          </p>
          <h2 className="font-display text-white text-[clamp(2.2rem,5vw,3.5rem)]">
            Visit Us Across Dubai
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {locations.map(({ name, sub, Icon }, i) => (
            <div
              key={name}
              className="group px-10 py-14 text-center hover:bg-white/[0.06] transition-all duration-500 reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Icon */}
              <span
                className="flex justify-center mb-7 text-4xl text-white/50
                           group-hover:text-white group-hover:scale-110
                           transition-all duration-500"
              >
                <Icon className="w-10 h-10" strokeWidth={1.25} />
              </span>

              {/* Name */}
              <h3 className="font-display text-white text-2xl mb-2">{name}</h3>
              <p className="text-white/55 text-sm mb-8 font-sans font-light tracking-wide">
                {sub}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-block text-[9px] font-bold uppercase tracking-[0.28em] text-white/40
                           font-brand border-b border-transparent
                           group-hover:text-white group-hover:border-white
                           transition-all duration-300 pb-1"
              >
                View Map
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
