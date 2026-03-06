"use client";

import { useReveal } from "@/lib/useReveal";
import Image from "next/image";

const items = [
  {
    num: "01",
    title: "Bakery",
    sub: "Artisan Sourdough & Viennoiserie",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuYs3cSS_yw7qqB098DmoJ8cTOOmKPCds5MINT08RehZBmR_SJ9hCLdndpo32zJjtTFOKMDKQNk868ctj1jmz7bad5sXHoElnH7Dg0UGzzLiBbHUsBPowCiQ47GOgMXHeTNbeFubqty_ZLPlzWE8Hx1Wyql8UYaC84JFkQXvQYVLSNuxsvvaheYEl3t7y0M6kb8r59Q2jVUAtfNEtCzJA8nb8HiApHwtjLjA9G2Qd4DED6gwQAnyh0okFCoGLYkkgsF8x7J45Ix5LT",
  },
  {
    num: "02",
    title: "Coffee",
    sub: "Specialty Single Origin Brews",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUQGgFolhhCCrFj1tE0Wbn90mIWeBMkDl7uljjn5GOLq3yqEUts6acTAi_bQwhUI9fk9swcJSgVhhpWzGgGsp0JLY_LxNogMro3-bLOMHej9htEz-YdcnnpUyJCd058vmBxhX3U199yyUdtQitrH99PEyiK96TC4KOMEHUkU9wxLTaC3xdIW2Qj9AfBYcHet742shCJWqMYY1MhlfSoo-3KpMYdKkorRd3Hk6a6QEpOpNrQ6C9GZNJbPe-b_nSH3Hgah5uZtFUnUkI",
  },
  {
    num: "03",
    title: "All Day",
    sub: "Gourmet Breakfast & Brunch",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDFtjRHpSi_KQ3Gp5K8z-NNcAIcRjqvG7QS2ToH9A4Z6rpPkDPHDtPdmWIJNB5VZ8_pQ3bTraEyJRePTd7HGKY6ENVOFOUCCmp7jzEqt9WA6fRvSSOS2LiW3mxAshAcx2AxcyGzUL9f5SK91OZJ3LH6YjSE7o1PCkpDIvBUWYjDot7OcDHicr2hcbrC8EcN-pGErvdZqY2xYG1HpebeVR92lmq_SLYLySfLXU8NWdK75PUlvjItNdT7-Wxvf9hsCiRhJ_C28_PRhhr",
  },
  {
    num: "04",
    title: "Evening",
    sub: "Sunset Dining & Desserts",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmE9uig_Ix9saBHs08MNcrmA-ye_sWaVLjoeRukzQQVkLOmVA-ZmbmsrxVJU7zmnnxsBYK01dj8tEBOyL4HQXpHw3vlVk7I3jNevohr3ZIMXvEmHpmTLlKgOpDieDbk3p4zU4wAjoImwxPMYxkG583wDyABikuEjB3X0mcVhtobZMCV3AG8v9wwXkVQjNnArWl-W7Gn4Aqsh6G5wgWEeaAR561pGzFPMRbBHXKMvnmfOM1Vngp5qub0Y0MBtp5pkK4oYPwus4ytryC",
  },
];

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
          {items.map(({ num, title, sub, img }, i) => (
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
                  <button
                    className="bg-primary/90 hover:bg-primary text-white px-6 py-2.5 rounded-full
                                text-[9px] font-bold uppercase tracking-[0.2em] transition-colors font-brand"
                  >
                    View Selection
                  </button>
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
