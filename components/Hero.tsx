"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLUR_DATA_URL } from "@/lib/constants";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const y = isMobile ? window.scrollY * 0.12 : window.scrollY * 0.3;
      imgRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Parallax image - no will-change on mobile to reduce GPU load */}
      <div
        ref={imgRef}
        className="absolute inset-0 z-0 scale-110 md:will-change-transform"
      >
        <Image
          src="https://www.dubaireview.ae/wp-content/uploads/listing-uploads/gallery/2023/10/sd.jpeg"
          alt="Bakerist Dubai interior"
          fill
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          quality={82}
          className="object-cover brightness-[0.68] dark:brightness-[0.42]"
          sizes="100vw"
        />
      </div>

      {/* Gradient vignette */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto mt-6 sm:mt-10 pb-20 sm:pb-0">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-5 py-1.5 border border-white/25 rounded-full
                     backdrop-blur-md bg-white/5 animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[8px] sm:text-[9px] font-bold text-white tracking-[0.3em] sm:tracking-[0.35em] uppercase">
            Est. Dubai 2024
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold text-white leading-none drop-shadow-2xl
                     text-[clamp(2.75rem,10vw,9rem)] sm:text-[clamp(4rem,12vw,9rem)] animate-fade-in-up"
          style={{ animationDelay: "0.35s", opacity: 0 }}
        >
          In Bread
          <br />
          <span className="italic font-normal tracking-tight text-white/90">
            We Trust
          </span>
        </h1>

        {/* Subline */}
        <p
          className="mt-6 sm:mt-8 mb-8 sm:mb-12 text-white/85 font-sans font-light
                     text-[clamp(0.95rem,2vw,1.4rem)] max-w-2xl mx-auto leading-relaxed tracking-wide
                     animate-fade-in px-2"
          style={{ animationDelay: "0.55s", opacity: 0 }}
        >
          Experience the art of slow fermentation and the warmth of Dubai&apos;s
          finest artisanal bakery.
        </p>

        {/* CTAs - touch-friendly on mobile */}
        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center
                     animate-fade-in"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <Link
            href="#menu"
            className="group px-8 sm:px-10 py-4 bg-white text-primary hover:bg-secondary active:scale-[0.98]
                       font-brand font-bold uppercase tracking-[0.18em] text-[10px] rounded-full
                       w-full sm:min-w-[190px] sm:w-auto text-center shadow-2xl min-h-[48px] flex items-center justify-center
                       transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
          >
            View Menu
          </Link>
          <Link
            href="#locations"
            className="w-full sm:min-w-[190px] sm:w-auto px-8 sm:px-10 py-4 border-[1.5px] border-white/70 text-white
                       hover:bg-white/10 backdrop-blur-sm active:scale-[0.98]
                       font-brand font-bold uppercase tracking-[0.18em] text-[10px] rounded-full text-center min-h-[48px] flex items-center justify-center
                       transform hover:scale-105 hover:-translate-y-0.5
                       hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
                       transition-all duration-300"
          >
            Find Us
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <Link
        href="#about"
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group min-h-[44px] justify-center"
      >
        <span className="text-[8px] text-white/50 uppercase tracking-[0.3em] font-brand group-hover:text-white/80 transition-colors">
          Scroll
        </span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-1 rounded-full bg-white/70 animate-scroll-dot" />
        </div>
      </Link>
    </section>
  );
}
