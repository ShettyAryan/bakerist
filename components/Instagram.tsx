"use client";

import { useReveal } from "@/lib/useReveal";
import Image from "next/image";

const posts = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvhPyNJZLZx8BKcdEfEgLvftS5E2h1djo-gJdStLopUkm7k6GsV_S5M26JoaoHQnwvV_VT6zjbzwdnitgyss0hXAJMvcadRXvgW6IR_pdogeKWmfKcDrhuvtn3OCHoKVK6NizHHsvTalxHXV7xlYZ4AUYwjLbgWzT3R0ERO8UN05JU9WdjuxhHMVe9e41SVbCM7Jhkt2604kaHLF130yt247cqAOCmCWPIZj3j4L3oN0P1cK_cUN2VIikSlq_vU16szOAJTuQPe72J",
    alt: "Cafe interior",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdYgUsSX0sP2uCTa5mE0kxHHALgjcIL8MrKtKXS12gKpbQi4jStuLDSTvVAg7PBTUoRpBdUTFINEHCYAMbLaOdExulyGZ4kIGVP5ChHfDVT03K1eQZmloUAuqpSXuI-S9XkxcW7xLeyLnPLqQbC2x1V_SYQeY8o3mWuDoT0omU9XkAJmQdu0V9Ml21znwyyPjsgAJ_Rz39kbpwfm5to2GDOMWN_8mHVefSGu3TYV-Kl4lVJzYazIdFG7kN9ChxaBCJobD1pL3tEYhe",
    alt: "Pastry close up",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmEYFmMWhLgBywCncNPfbt-NPI0Hj5v848tzmv1tFbgYesyHiSyKrU042lsTTK59oir2UCH-hfWbUh4IR8XkYax7n6igQ5mEvw4HBzbg_LioN1DYHWBWekgxNRN2RMR8QgfLNT03y0OwgmoAPtt4a0Q0lpb7SydQFQYHkyhvjogX9Qr8OoKr8aeT4aL77_yzabDsartc1s7URROikm46cZRaA5vfA52Ehr_35i6pbCL8m-WPGy70FMVf3Ig1iz4hFaLCzzOEFlzWRo",
    alt: "Coffee pour",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPIJBIfIgZdnp-oRedrTToWozNVZ6yQHFw_x6BpgBXCYkGOoIf6yXYnrcrBd9f7cv8P5jMva4D-oB_Jdr_-lbECag6lzWm0McIkYb2qYuZ6mRC53Kt1-Za7M8Aj41UNRFhXQCV_9oCiNqsfs6czYXI9EUSMXySoRxImkdWkY4ebck4qn4LV3QdFZrbOm0ilYSqMXbat6oshykkBSkEGKXlURG5ih6e6Vq-e4vcPjlNIdRoBEbGN1rRcmhPCx479YYzwpzhZ2d0jRcV",
    alt: "Friends dining",
  },
];

export default function Instagram() {
  useReveal();

  return (
    <section className="py-28 bg-surface-light dark:bg-surface-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-14 reveal">
          <div>
            <p className="text-[10px] font-bold text-primary tracking-[0.35em] uppercase mb-3 font-brand">
              Follow Us
            </p>
            <h2 className="font-display text-stone-900 dark:text-stone-50 text-[clamp(1.8rem,4vw,3rem)]">
              @bakerist_uae
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]
                       hover:text-primary transition-colors text-stone-600 dark:text-stone-300 group font-brand"
          >
            View Instagram
            <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              arrow_outward
            </span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map(({ src, alt }, i) => (
            <div
              key={i}
              className="aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer shadow-md group reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <Image
                src={src}
                alt={alt}
                width={400}
                height={500}
                className="w-full h-full object-cover group-hover:scale-110
                           transition-transform duration-[1000ms] ease-expo"
              />
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-10 flex justify-center md:hidden reveal">
          <a
            href="#"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]
                       hover:text-primary transition-colors text-stone-600 dark:text-stone-300 font-brand"
          >
            View Instagram
            <span className="material-symbols-outlined text-base">
              arrow_outward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
