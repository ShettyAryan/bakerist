"use client";

import { useReveal } from "@/lib/useReveal";
import { craftItems } from "@/lib/craftData";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  useReveal();

  return (
    <section
      id="menu"
      className="py-32 bg-cream dark:bg-bg-dark transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-[10px] font-bold text-primary tracking-[0.35em] uppercase mb-4 font-brand">
            Curated Selection
          </p>
          <h2 className="font-display text-stone-900 dark:text-stone-50 text-[clamp(2.5rem,6vw,4rem)]">
            Our Craft
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {craftItems.map(({ num, title, sub, img, slug }, i) => (
            <div
              key={title}
              className="group relative h-[560px] rounded-3xl overflow-hidden cursor-pointer
                         shadow-xl hover:shadow-2xl transition-all duration-700 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width:768px) 100vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110 ease-expo"
              />

              {/* Persistent gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent
                              opacity-75 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-9">
                <span
                  className="text-primary text-[9px] font-bold tracking-[0.45em] uppercase mb-2
                             opacity-0 group-hover:opacity-100 -translate-y-3 group-hover:translate-y-0
                             transition-all duration-500 delay-75 font-brand"
                >
                  {num}
                </span>
                <h3 className="font-display text-white text-[1.9rem] mb-2 leading-tight">
                  {title}
                </h3>
                <p
                  className="text-stone-300 text-sm mb-6 font-sans font-light leading-snug
                             opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0
                             transition-all duration-500 delay-150"
                >
                  {sub}
                </p>
                <div
                  className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                              transition-all duration-500 delay-200"
                >
                  <Link
                    href={`/craft/${slug}`}
                    className="bg-primary/90 hover:bg-primary text-white px-6 py-2.5 rounded-full
                                text-[9px] font-bold uppercase tracking-[0.2em] transition-colors font-brand
                                inline-block"
                  >
                    View Selection
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className="mt-20 text-center reveal">
          <button
            className="border border-stone-900/70 dark:border-stone-400/40 text-stone-900 dark:text-stone-200
                       px-14 py-5 rounded-full uppercase tracking-[0.22em] text-[10px] font-bold font-brand
                       hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900
                       transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                       transition-all duration-400"
          >
            Download Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
