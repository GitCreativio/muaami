"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        once:true,
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Subtle parallax background
    gsap.to(bgRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        once:true,
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Staggered entrance
    tl.from(titleRef.current?.children || [], {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power4.out",
    })
      .from(
        accentRef.current,
        { width: 0, duration: 0.8, ease: "power3.out" },
        "-=0.8"
      )
      .from(
        textRef.current?.children || [],
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=1"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative px-6 md:px-16 lg:px-24 py-20 overflow-hidden bg-gradient-to-b from-white via-stone-50 to-white"
    >
      {/* Animated Gradient Background Orbs */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 -right-32 w-80 h-80 bg-gradient-to-tr from-lime-300/20 to-emerald-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center space-y-16 z-10">
        {/* Elegant Pre-title */}
        <div className="space-y-4">
          <p className="text-sm md:text-base font-medium tracking-widest text-green-600 uppercase">
            Crafted with Purpose
          </p>

          {/* Animated Title with Letter Spacing */}
          <h2
            ref={titleRef}
            className="text-5xl font-sans md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            {"Our Mission".split("").map((char, i) => (
              <span key={i} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          {/* Premium Accent Line */}
          <div className="flex justify-center">
            <div
              ref={accentRef}
              className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent w-32"
            />
          </div>
        </div>

        {/* Rich Mission Statement */}
        <div ref={textRef} className="space-y-8 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light italic">
            Our mission is simple yet profound — to deliver{" "}
            <span className="font-medium text-gray-900">
              refreshing, healthy, and deeply flavorful drinks
            </span>{" "}
            that do more than quench thirst.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
            We believe every sip should be an experience — one that{" "}
            <span className="text-amber-700 font-medium">
              energizes your spirit
            </span>
            , <span className="text-emerald-700 font-medium">sparks joy</span>,
            and{" "}
            <span className="text-orange-700 font-medium">
              nurtures true wellness
            </span>
            .
            <br />
            <br />
            From farm to glass, we source with intention, craft with care, and
            pour with passion —{" "}
            <strong className="text-gray-900">
              because great drinks bring great people together
            </strong>
            .
          </p>

          {/* Closing Statement */}
          <p className="text-base md:text-lg text-gray-500 font-medium tracking-wide uppercase">
            This is more than a drink. This is a movement.
          </p>
        </div>
      </div>
    </section>
  );
}
