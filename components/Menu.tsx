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
      className="py-16 sm:py-24 md:py-32 bg-cream dark:bg-bg-dark transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal">
          <p className="text-[10px] font-bold text-primary tracking-[0.35em] uppercase mb-4 font-brand">
            Curated Selection
          </p>
          <h2 className="font-display text-stone-900 dark:text-stone-50 text-[clamp(2rem,5vw,4rem)] sm:text-[clamp(2.5rem,6vw,4rem)]">
            Our Craft
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {craftItems.map(({ num, title, sub, img, slug }, i) => (
            <div
              key={title}
              className="group relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer
                         shadow-xl hover:shadow-2xl transition-all duration-500 md:duration-700 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Image
                src={img}
                alt={title}
                fill
                loading="lazy"
                quality={78}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110 ease-expo"
              />

              {/* Persistent gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent
                              opacity-75 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content - always show key info on mobile for tap targets */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-9">
                <span
                  className="text-primary text-[9px] font-bold tracking-[0.45em] uppercase mb-1 sm:mb-2
                             opacity-100 md:opacity-0 md:group-hover:opacity-100 -translate-y-0 md:-translate-y-3 md:group-hover:translate-y-0
                             transition-all duration-500 delay-75 font-brand"
                >
                  {num}
                </span>
                <h3 className="font-display text-white text-[1.5rem] sm:text-[1.9rem] mb-1 sm:mb-2 leading-tight">
                  {title}
                </h3>
                <p
                  className="text-stone-300 text-xs sm:text-sm mb-4 sm:mb-6 font-sans font-light leading-snug
                             opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-3 md:group-hover:translate-y-0
                             transition-all duration-500 delay-150"
                >
                  {sub}
                </p>
                <div
                  className="opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0
                              transition-all duration-500 delay-200"
                >
                  <Link
                    href={`/craft/${slug}`}
                    className="bg-primary/90 hover:bg-primary active:bg-primary text-white px-5 sm:px-6 py-3 sm:py-2.5 rounded-full
                                text-[9px] font-bold uppercase tracking-[0.2em] transition-colors font-brand
                                inline-block min-h-[44px] flex items-center justify-center"
                  >
                    View Selection
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center reveal">
          <button
            className="border border-stone-900/70 dark:border-stone-400/40 text-stone-900 dark:text-stone-200
                       px-8 sm:px-14 py-4 sm:py-5 rounded-full uppercase tracking-[0.22em] text-[10px] font-bold font-brand
                       hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900
                       active:scale-[0.98] transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                       transition-all duration-400 min-h-[48px]"
          >
            Download Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
