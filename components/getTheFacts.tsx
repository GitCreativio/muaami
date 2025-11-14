"use client";
import Image from "next/image";
import Link from "next/link";

export default function GetTheFactsSection() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-black to-black"></div>

      {/* Leafy texture (optional subtle pattern) */}
      <div className="absolute inset-0 bg-[url('/images/leaves-pattern.png')] bg-center bg-contain opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sans md:text-5xl font-bold">
            Get the <span className="text-green-400">Facts</span>
          </h2>
          <p className="text-gray-300 font-mono mt-4 max-w-2xl mx-auto">
            MuAami isn’t just refreshing — it’s science in every sip. Learn what
            makes our formula natural, clean, and powerfully hydrating.
          </p>
        </div>

        {/* Facts Section — modern timeline layout */}
        <div className="relative border-l-2 border-green-700/40 pl-8 space-y-12">
          {facts.map((fact, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-green-500 group-hover:scale-110 transition-transform"></span>

              <div className="flex px-5 flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-semibold text-green-400">
                    {fact.title}
                  </h3>
                  <p className="text-gray-300 mt-2 max-w-xl">{fact.desc}</p>
                </div>

                {/* Image/Icon */}
                <div className="shrink-0 bg-green-500 w-fit rounded-2xl p-1">
                  <Image
                    src={fact.icon}
                    alt={fact.title}
                    width={70}
                    height={70}
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link
            href="/about"
            className="inline-block bg-green-500 hover:bg-green-600 text-black px-10 py-3 rounded-full font-semibold transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

const facts = [
  {
    title: "Pure Ingredients",
    desc: "MuAami is crafted using natural minerals and plant-based goodness — no artificial additives, no nonsense.",
    icon: "/icons/leaf.svg",
  },
  {
    title: "Smart Hydration",
    desc: "Each sip revitalizes your body’s balance with electrolytes designed for faster absorption and lasting energy.",
    icon: "/icons/droplets.svg",
  },
  {
    title: "Eco Commitment",
    desc: "From ingredient sourcing to eco-packaging — we’re driven by sustainability and care for our planet.",
    icon: "/icons/sprout.svg",
  },
];
