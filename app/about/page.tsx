"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { hero2 } from "../../public/base64/hero2";
import MissionSection from "@/components/ourmission";
import CoreValues from "@/components/corevalues";
import OurStory from "@/components/ourstory";

const AboutPage = () => {
  return (
    <main className=" min-h-screen      text-black">
      <section
        style={{ background: `url('${hero2}')` , backgroundSize:"cover" , backgroundPosition:"center"}}
        className="relative flex    min-h-screen  items-center justify-between  px-6 md:px-16 lg:px-24 py-20 pt-40 sm:pt-32  bg-cover bg-center text-white overflow-hidden"
      >
        <div className=" absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-full  flex justify-center items-center flex-col  space-y-6 text-center md:pr-10">
          <h1 className="text-4xl font-sans md:text-6xl  font-extrabold ">
            Refreshing <span className="text-green-500">Every Moment</span>
          </h1>
          <p className="text-gray-200 font-mono text-lg  text-center max-w-4xl leading-relaxed">
            Welcome to <span className="font-semibold  font-mono">Muaami</span>—
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            saepe recusane assumenda labosam quidem prantium quia, Lorem ipsum
            dolor sit, amet consetur adipicing elit. Repudiandae totam pariatur
          </p>
        </div>
      </section>

      <MissionSection />
      <CoreValues />
      <OurStory />

      <section className="relative py-20 h- flex justify-center items-center px-6 md:px-16 lg:px-24  overflow-hidden">
        {/* Full Background Green Layer (rotated & enlarged to avoid clipping) */}
        <div className="absolute h-4/5 -inset-x-32 -inset-y bg-green-600 -rotate-2"></div>

        {/* Content */}
        <div className="relative h-fit  max-w-5xl mx-auto text-center space-y-6 z-10">
          <h2 className="text-3xl font-sans sm:text-4xl font-extrabold text-black tracking-wide">
            Ready to Refresh Your Day?
          </h2>

          <p className="text-gray-900 font-mono text-base sm:text-lg max-w-2xl mx-auto font-light">
            Dive into our collection of naturally inspired beverages — bursting
            with real flavor, crafted to energize your body and uplift your
            spirit.
          </p>

          <div className="mt-8">
            <a
              href="/products"
              className="inline-block  bg-green-600 hover:bg-green-700 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              Explore Our Products
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
