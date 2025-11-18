"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GetTheFactsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            once:true,
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtitle
      gsap.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            once:true,
            trigger: subtitleRef.current,
            start: "top 85%",
          },
        }
      );

      // Cards stagger animation
      gsap.utils.toArray<HTMLElement>(".fact-card").forEach((card, i) => {
        const icon = card.querySelector(".fact-icon");
        const bottomBar = card.querySelector(".bottom-accent");

        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
            rotation: i % 2 === 0 ? -4 : 4,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            delay: i * 0.2,
            ease: "back.out(1.4)",
            scrollTrigger: {
              once:true,
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Icon pop-in
        gsap.fromTo(
          icon,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.9,
            delay: 0.4 + i * 0.2,
            ease: "elastic.out(1.2, 0.5)",
            scrollTrigger: {
              once:true, trigger: card, start: "top 85%" },
          }
        );

        // Bottom accent bar reveal
        gsap.to(bottomBar, {
          scaleX: 1,
          duration: 0.9,
          delay: 0.6 + i * 0.2,
          ease: "power2.inOut",
          scrollTrigger: {
            once:true, trigger: card, start: "top 80%" },
        });
      });

      // CTA Button
      gsap.fromTo(
        ctaRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            once:true,
            trigger: ctaRef.current,
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gray-50 py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/leaves-pattern.png')] opacity-3 bg-center bg-repeat"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gray-900">
            Get the <span className="text-green-600">Facts</span>
          </h2>
          <p ref={subtitleRef} className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-light">
            MuAami isn’t just refreshing — it’s science in every sip. Discover what makes our
            formula natural, clean, and powerfully hydrating.
          </p>
        </div>

        {/* Premium Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="fact-card group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-transparent to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-8 lg:p-10 text-center">
                {/* Icon */}
                <div className="fact-icon inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-4 shadow-xl shadow-green-500/20">
                  <Image
                    src={fact.icon}
                    alt={fact.title}
                    width={48}
                    height={48}
                    className="text-white filter brightness-0 invert"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{fact.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{fact.desc}</p>

                {/* Animated bottom bar */}
                <div className="bottom-accent absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-600 transform scale-x-0 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            ref={ctaRef}
            href="/about"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold  shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            Learn More About Muaami
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
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