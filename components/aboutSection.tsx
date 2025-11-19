"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null); // Only for the bottle image
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: -900, opacity: 0, scale: 0.85 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-20 bg-white text-gray-900 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/leaves-pattern.png')] bg-cover bg-center pointer-events-none" />

      {/* Left: Text */}
      <div className="z-10 text-center md:text-left space-y-5 max-w-xl">
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
          href="/about"
          className="inline-block mt-8 px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-xl transition-all duration-300"
        >
          Learn more
        </Link>
      </div>

      {/* Right */}
      <div className="relative mt-12 md:mt-0 z-10 flex justify-center">

        {/* Only Image is animated */}
        <div
          ref={imageRef}     // 👈 GSAP applies only here
          className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[500px] aspect-square overflow-hidden"
        >
          <Image
            src="/images/about.png"
            alt="Maummi Mint Aaha Drink"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Splash remains fixed to right side */}
        <div className="absolute  -right-10 -top-20 -z-10 w-[120%] h-[120%] bg-[url('/images/splash2.png')] opacity-80 bg-cover bg-center "></div>
      </div>
    </section>
  );
}
