"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/lib/useReveal";
import type { CraftItem } from "@/lib/craftData";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CraftPageClient({
  craft,
  otherCrafts,
}: {
  craft: CraftItem;
  otherCrafts: CraftItem[];
}) {
  useReveal();

  return (
    <main className="bg-cream dark:bg-bg-dark transition-colors duration-500">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={craft.img}
            alt={craft.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24">
          <div className="reveal">
            <p className="text-[10px] font-bold text-white/55 tracking-[0.35em] uppercase mb-4 sm:mb-6 font-brand">
              Our Craft
            </p>
            <h1 className="font-display text-white text-[clamp(2rem,5vw,4.6rem)] sm:text-[clamp(2.8rem,6vw,4.6rem)] leading-[1.02] mb-4 sm:mb-5">
              {craft.title}
            </h1>
            <p className="text-white/75 text-sm md:text-[1.05rem] font-sans font-light tracking-wide mb-6 sm:mb-8 max-w-2xl">
              {craft.sub}
            </p>
            <p className="text-white/70 leading-[1.9] font-sans font-light max-w-2xl text-sm sm:text-base">
              {craft.description}
            </p>
          </div>

          <div
            className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 reveal"
            style={{ transitionDelay: "120ms" }}
          >
            <Link
              href="/"
              className="inline-flex justify-center items-center border border-white/35 text-white
                         px-8 sm:px-10 py-3.5 sm:py-4 rounded-full uppercase tracking-[0.22em] text-[10px] font-bold font-brand
                         hover:bg-white hover:text-stone-900 active:scale-[0.98] transform hover:-translate-y-1
                         transition-all duration-300 min-h-[48px]"
            >
              Back to Home
            </Link>
            <Link
              href="/#locations"
              className="inline-flex justify-center items-center btn-shimmer text-white
                         px-8 sm:px-10 py-3.5 sm:py-4 rounded-full uppercase tracking-[0.22em] text-[10px] font-bold font-brand
                         shadow-lg hover:shadow-primary/25 transform hover:-translate-y-1 active:scale-[0.98]
                         transition-all duration-300 min-h-[48px]"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-200/70 dark:border-stone-700/60 rounded-2xl sm:rounded-3xl overflow-hidden bg-white/60 dark:bg-surface-dark/70 backdrop-blur">
            {craft.highlights.map(({ label, detail }, i) => (
              <div
                key={label}
                className={`p-6 sm:p-8 md:p-10 text-center reveal ${
                  i < craft.highlights.length - 1
                    ? "md:border-r border-b md:border-b-0 border-stone-200/70 dark:border-stone-700/60"
                    : ""
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <p className="font-display text-primary text-2xl sm:text-3xl font-bold mb-2">
                  {label}
                </p>
                <p className="text-[9px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 font-brand font-semibold">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-8 mb-8 sm:mb-12 reveal">
            <div>
              <p className="text-[10px] font-bold text-primary tracking-[0.35em] uppercase mb-3 sm:mb-4 font-brand">
                Curated Menu
              </p>
              <h2 className="font-display text-stone-900 dark:text-stone-50 text-[clamp(1.6rem,4vw,3.1rem)]">
                Signature Selection
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400 font-brand">
              <Sparkles className="w-4 h-4" strokeWidth={1.5} />
              <span>Seasonal items rotate</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {craft.products.map((p, i) => (
              <div
                key={p.name}
                className="group relative rounded-2xl sm:rounded-3xl border border-stone-200/70 dark:border-stone-700/60
                           bg-white/70 dark:bg-surface-dark/70 backdrop-blur overflow-hidden
                           shadow-lg hover:shadow-xl transition-all duration-400 md:duration-500 reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-primary/8 blur-3xl" />
                </div>

                {/* Product image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 md:duration-700 group-hover:scale-105 ease-expo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative p-5 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-6">
                    <div className="min-w-0">
                      <h3 className="font-display text-stone-900 dark:text-stone-50 text-xl sm:text-2xl leading-tight mb-2">
                        {p.name}
                      </h3>
                      <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm leading-[1.8] font-sans font-light">
                        {p.desc}
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center justify-between sm:block sm:text-right">
                      <p className="font-brand font-bold text-primary text-sm tracking-wide">
                        {p.price}
                      </p>
                      <div className="hidden sm:block mt-3 inline-flex items-center gap-1.5 text-stone-400 dark:text-stone-500">
                        <ArrowUpRight
                          className="w-4 h-4 group-hover:text-primary transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>

                  {p.tags?.length ? (
                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] uppercase tracking-[0.22em] font-bold font-brand
                                     px-3 py-1.5 rounded-full border border-stone-200/70 dark:border-stone-700/60
                                     text-stone-500 dark:text-stone-400 bg-white/50 dark:bg-black/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 text-center reveal" style={{ transitionDelay: "80ms" }}>
            <Link
              href="/#menu"
              className="inline-flex justify-center items-center border border-stone-900/70 dark:border-stone-400/40
                         text-stone-900 dark:text-stone-200 px-8 sm:px-14 py-4 sm:py-5 rounded-full uppercase tracking-[0.22em]
                         text-[10px] font-bold font-brand hover:bg-stone-900 hover:text-white
                         dark:hover:bg-stone-100 dark:hover:text-stone-900 transform hover:-translate-y-1 active:scale-[0.98]
                         shadow-lg hover:shadow-xl transition-all duration-400 min-h-[48px]"
            >
              Explore full craft selection
            </Link>
          </div>
        </div>
      </section>

      {/* Explore other craft */}
      <section className="pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-8 mb-8 sm:mb-12 reveal">
            <div>
              <p className="text-[10px] font-bold text-primary tracking-[0.35em] uppercase mb-3 sm:mb-4 font-brand">
                Continue Exploring
              </p>
              <h2 className="font-display text-stone-900 dark:text-stone-50 text-[clamp(1.6rem,4vw,3rem)]">
                More from Our Craft
              </h2>
            </div>
            <Link
              href="/#menu"
              className="hidden md:inline-flex text-[9px] font-bold uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400
                         border-b border-transparent hover:border-primary hover:text-primary transition-all duration-300 pb-1 font-brand"
            >
              Back to selection
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {otherCrafts.map((c, i) => (
              <Link
                key={c.slug}
                href={`/craft/${c.slug}`}
                className="group relative min-h-[320px] sm:min-h-[360px] md:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer
                           shadow-xl hover:shadow-2xl transition-all duration-500 md:duration-700 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 md:duration-1000 group-hover:scale-105 md:group-hover:scale-110 ease-expo"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-8">
                  <span className="text-primary text-[9px] font-bold tracking-[0.45em] uppercase mb-2 font-brand">
                    {c.num}
                  </span>
                  <h3 className="font-display text-white text-2xl sm:text-3xl mb-2 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-snug max-w-[28ch]">
                    {c.sub}
                  </p>
                  <div className="mt-4 sm:mt-6 inline-flex">
                    <span
                      className="bg-white/10 border border-white/15 text-white px-5 sm:px-6 py-2.5 rounded-full
                                 text-[9px] font-bold uppercase tracking-[0.2em] transition-colors font-brand
                                 group-hover:bg-primary/90 group-hover:border-primary/50 min-h-[44px] flex items-center"
                    >
                      View Selection
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

