"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import { hero3 } from "@/public/base64/hero3";

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax background image
    gsap.to(imageRef.current, {
      yPercent: -40,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Title: elegant line-by-line reveal
    gsap.from(titleRef.current?.children || [], {
      y: 80,
      opacity: 0,
      duration: 1.4,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    // Paragraphs: staggered fade-up
    gsap.from(paragraphRefs.current, {
      y: 60,
      opacity: 0,
      duration: 1.6,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        once: true,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative px-6 md:px-16 lg:px-24 py-20 overflow-hidden "
    >
      {/* Parallax Hero Image Background */}
      <div ref={imageRef} className="absolute min-h-screen inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        <Image
          src={hero3} // Replace with your real image (e.g., farm, founders, sunrise over fields)
          alt="Our Story – From humble beginnings"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        //   sizes="100vw"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative max-w-5xl mx-auto text-center space-y-20 z-10">
        {/* Pre-title */}
        <div className="space-y-4">
          <p className="text-sm md:text-base font-bold tracking-widest text-green-600 uppercase">
            Since the Beginning
          </p>

          {/* Animated Title */}
          <h2
            ref={titleRef}
            className="text-5xl font-sans md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight"
          >
            {"Our Story".split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-4">
                {word}
              </span>
            ))}
          </h2>

          <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent w-32 mx-auto mt-8" />
        </div>

        {/* Rich Narrative */}
        <div className="space-y-10 max-w-4xl mx-auto text-white">
          <p
            ref={(el) => {
              paragraphRefs.current[0] = el;
            }}
            className="text-xl md:text-2xl leading-relaxed font-light italic"
          >
            It all began with a sunrise, a handful of fruit, and a dream to make
            something <span className="font-medium text-green-300">pure</span>.
          </p>

          <p
            ref={(el) => {
              paragraphRefs.current[1] = el;
            }}
            className="text-lg md:text-xl leading-loose text-white max-w-3xl mx-auto"
          >
            Muaami Drinks was born in a small kitchen, blending the freshest
            ingredients nature could offer. What started as a passion to create
            naturally refreshing drinks — without compromise — quickly became a
            movement.
          </p>

          <p
            ref={(el) => {
              paragraphRefs.current[1] = el;
            }}
            className="text-lg md:text-xl leading-loose text-balck/80"
          >
            From local farmers’ markets to shelves around the world, every
            bottle carries the same promise:
            <br />
            <strong className="text-green-600 font-semibold">
              Real ingredients. Real flavor. Real joy.
            </strong>
          </p>

          <p
            ref={(el) => {
              paragraphRefs.current[3] = el;
            }}
            className="text-2xl md:text-3xl font-light italic text-green-600 mt-12"
          >
            This isn’t just our story.
            <br />
            <span className="text-black font-medium">It’s yours too.</span>
          </p>
        </div>

        {/* Decorative Accent */}
        <div className="flex justify-center gap-8 mt-16 opacity-60">
          <div className="w-24 h-px bg-green-500" />
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <div className="w-24 h-px bg-green-500" />
        </div>
      </div>
    </section>
  );
}
