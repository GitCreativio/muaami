"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16  py-16 bg-linear-to-br from-emerald-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/leaves-pattern.png')] bg-cover bg-center"></div>

      {/* Left Section */}
      <motion.div
        className="flex-2 z-10 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-green-400 font-mono font-semibold tracking-widest uppercase text-sm md:text-base">
          About Our Brand
        </p>

        <h1 className="text-4xl font-sans sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Refresh Your World with{" "}
          <span className="text-green-500">Nature’s Flavor</span>
        </h1>

        <p className="text-gray-300 font-mono max-w-md mx-auto md:mx-0 text-base md:text-lg">
          We craft natural and energizing drinks made from the purest fruits,
          blending taste and vitality to keep you refreshed all day long.
        </p>

        <Link
          href={"/products"}
          className="mt-4 bg-green-600 hover:bg-green-700 transition-all text-white px-6 py-3 rounded-full font-medium shadow-lg"
        >
          Explore Our Drinks
        </Link>
      </motion.div>

      {/* Right Section (Vertical Video) */}
      <motion.div
        className="flex-1 relative mt-10 bg-gradient-tr from-green-300 to-green-700 md:mt-0 z-10 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative ring-3 ring-green-600 w-[70%] sm:w-[60%] md:w-[45%] lg:w-[50%] aspect-9/16 rounded-2xl overflow-hidden shadow-2xl shadow-green-800 ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover rounded-2xl"
          >
            <source src="/videos/aaha.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute w-[70%] rotate-90 left-0 top-18  -z-10 opacity-40 bg-green-500 sm:w-[60%] md:w-[45%] lg:w-[50%] aspect-9/16 rounded-full overflow-hidden shadow-2xl border border-green-700"></div>
        <div className="absolute w-[70%] -rotate-50 left-0   -z-10 opacity-60  bg-green-500 sm:w-[60%] md:w-[45%] lg:w-[50%] aspect-9/16 rounded-full overflow-hidden shadow-2xl border border-green-700"></div>
        <div className="absolute w-[70%] rotate-50 right-0   -z-10 opacity-60  bg-green-500 sm:w-[60%] md:w-[45%] lg:w-[50%] aspect-9/16 rounded-full overflow-hidden shadow-2xl border border-green-700"></div>
        <div className="absolute w-[70%] rotate-90 right-0 top-18  -z-20  opacity-40 bg-green-500 sm:w-[60%] md:w-[45%] lg:w-[50%] aspect-9/16 rounded-full overflow-hidden shadow-2xl border border-green-700"></div>
      </motion.div>
    </section>
  );
}
