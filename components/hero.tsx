"use client";
import Image from "next/image";
import Link from "next/link";
import { hero1 } from "../public/base64/hero1";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    // Start with the image already in position, but clipped from the top
    gsap.set(bg, {
      yPercent: -100, // completely above
      force3D: true,
    });

    // Instantly hide any fallback color by forcing the image to cover everything
    gsap.set(bg.parentElement, { background: "transparent" });

    // Now animate it down — no flash!
    gsap.to(bg, {
      yPercent: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <section className="relative flex   min-h-screen flex-col md:flex-row items-center justify-between  px-6 md:px-16 lg:px-24 py-56    bg-cover bg-center text-white overflow-hidden">
      {/* bg overlay  */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('/images/home.png')] bg-fill bg-right  md:bg-center opacity-90 -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" z-10"
      >
        <div className="relative z-10 flex-2 space-y-6 text-start md:pr-10">
          <h1 className="text-4xl font-sans md:text-6xl  font-extrabold ">
            Refresh Your Day with <br />
            <span className="text-green-400">Muaami Drinks</span>
          </h1>
          <p className="text-gray-300 font-mono text-lg max-w-md leading-relaxed">
            Taste the freshness of our naturally inspired flavors.
          </p>
          <Link
            href={"/products"}
            className="mt-6 px-8 py-3 bg-white/20 text-white font-semibold rounded-full border border-white/40 hover:bg-white hover:text-green-700 cursor-pointer transition duration-300 backdrop-blur-md"
          >
            Explore
          </Link>
        </div>
      </motion.div>

      {/* Hero Image (Right Side) */}
      <div className=" relative sm:static   flex-1 md:mt-0 flex justify-center  md:justify-end">
        <motion.div
          initial={{ y: -800 }} // Start way above
          animate={{ y: 0 }}
          transition={{
            duration: 1.6,
            ease: "easeInOut", // Built-in bounce ease
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 1.2,
          }}
          className="absolute  -bottom-20  h-[400px]  w-[400px]  sm:w-80 md:w-96 lg:w-1/2 md:h-300  md:-top-80  md:right-0 "
        >
          {/* <Image
            src={hero1} // 🧃 replace with your product image path
            alt="MuAami Grape Juice Bottle"
            fill
            priority
            className="object-contain  drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]  transition-transform duration-500"
          /> */}
        </motion.div>

        {/* <div className="absolute -bottom-10 right-0 w-72 h-72 bg-green-500/30 rounded-full blur-3xl"></div> */}
      </div>
        <div className="absolute  inset-0 bg-black/40"></div>

    </section>
  );
}
