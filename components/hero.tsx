"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex bg-linear-to-br min-h-screen from-emerald-900 via-black to-gray-900 flex-col md:flex-row items-center justify-between  px-6 md:px-16 lg:px-24 py-20 pt-40 sm:pt-32  bg-cover bg-center text-white overflow-hidden">
      {/* Dark overlay with gradient tint */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-900 via-black to-gray-900 opacity-90"></div>

      <div className="relative z-10 flex-2 space-y-6 text-start md:pr-10">
        <h1 className="text-4xl font-sans md:text-6xl  font-extrabold ">
          Refresh Your Day with{" "}
          <span className="text-green-400">Muaami Mint Lime</span>
        </h1>
        <p className="text-gray-300 font-mono text-lg max-w-md leading-relaxed">
          Cool mint blended with zesty lime — a crisp, refreshing burst that
          energizes every sip.
        </p>
        <Link
          href={"/products"}
          className="mt-6 px-8 py-3 bg-white/20 text-white font-semibold rounded-full border border-white/40 hover:bg-white hover:text-green-700 cursor-pointer transition duration-300 backdrop-blur-md"
        >
          Explore
        </Link>
      </div>

      {/* Hero Image (Right Side) */}
      <div className=" relative sm:static   flex-1 md:mt-0 flex justify-center  md:justify-end">
        <div className="absolute  -bottom-20  h-[400px]  w-[400px]  sm:w-80 md:w-96 lg:w-1/2 md:h-300  md:-top-80  md:right-0 ">
          <Image
            src="/images/hero/hero3.png" // 🧃 replace with your product image path
            alt="MuAami Grape Juice Bottle"
            fill
            priority
            className="object-contain  drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]  transition-transform duration-500"
          />
        </div>

        {/* Decorative glow circle */}
        <div className="absolute -bottom-10 right-0 w-72 h-72 bg-green-500/30 rounded-full blur-3xl"></div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 
    bg-gradient-to-b from-transparent to-black"
      ></div>
    </section>
  );
}
