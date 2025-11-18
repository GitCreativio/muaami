"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = imageRef.current;

    gsap.fromTo(
      el,
      {
        y: -900,
        opacity: 0,
        scale: 0.85,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true,                    // Plays only once
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-20 bg-white text-gray-900 overflow-hidden"
    >
      {/* Optional very subtle pattern if you want texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/leaves-pattern.png')] bg-cover bg-center pointer-events-none"></div>

      {/* Left: Text */}
      <div className="z-10  text-center md:text-left space-y-8 max-w-xl">
        <p className="text-green-600 font-mono font-bold tracking-widest uppercase text-sm">
          About Our Brand
        </p>

        <h1 className="text-4xl font-sans sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Refresh Your World with{" "}
          <span className="text-green-600">Nature’s Flavor</span>
        </h1>

        <p className="text-gray-600 font-mono text-lg leading-relaxed max-w-lg">
          We craft natural and energizing drinks made from the purest fruits,
          blending taste and vitality to keep you refreshed all day long.
        </p>

        <Link
          href="/products"
          className="inline-block mt-8 px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-xl transition-all duration-300"
        >
          Explore Our Drinks
        </Link>
      </div>

      {/* Right: Just the image — NO border, NO ring */}
      <div
        ref={imageRef}
        className="relative mt-12 md:mt-0 z-10 flex justify-center"
      >
        <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[500px] aspect-square overflow-hidden ">
          <Image
            src="/images/products/maummi_mint_aaha.webp"
            alt="Maummi Mint Aaha Drink"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Beautiful green glow behind (optional but looks premium on white) */}
        <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-green-400 opacity-25 blur-3xl"></div>
      </div>
    </section>
  );
}