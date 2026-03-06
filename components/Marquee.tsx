const words = [
  "Sourdough",
  "·",
  "Viennoiserie",
  "·",
  "Single Origin",
  "·",
  "Dubai Hills",
  "·",
  "Slow Fermentation",
  "·",
  "Heritage Grains",
  "·",
  "Specialty Coffee",
  "·",
  "Bluewaters",
  "·",
  "The Palm",
  "·",
  "In Bread We Trust",
  "·",
];

export default function Marquee() {
  const doubled = [...words, ...words];

  return (
    <div className="relative overflow-hidden bg-primary py-4 sm:py-5 select-none">
      <div className="marquee-track animate-marquee motion-reduce:animate-none">
        {doubled.map((word, i) => (
          <span
            key={i}
            className={`px-4 sm:px-6 font-brand uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[10px] sm:text-[11px] whitespace-nowrap ${
              word === "·"
                ? "text-white/40"
                : "text-white/90 font-semibold"
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
