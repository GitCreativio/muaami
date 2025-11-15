"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { hero2 } from "../../public/base64/hero2";

const AboutPage = () => {
  return (
    <main className=" min-h-screen   bg-linear-to-b from-gray-900 to-gray-950 text-gray-800">
      <section className="relative flex bg-linear-to-br min-h-screen from-gray-900 to-gray-950 flex-col md:flex-row items-center justify-between  px-6 md:px-16 lg:px-24 py-20 pt-40 sm:pt-32  bg-cover bg-center text-white overflow-hidden">
        {/* Dark overlay with gradient tint */}
        <div className="absolute inset-0 bg-linear-to-br "></div>

        <div className="relative z-10 flex-2 space-y-6 text-start md:pr-10">
          <h1 className="text-4xl font-sans md:text-6xl  font-extrabold ">
            Refreshing <br />
            Every Moment
          </h1>
          <p className="text-gray-300 font-mono text-lg max-w-md leading-relaxed">
            Welcome to <span className="font-semibold font-mono">Muaami</span>—
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            saepe recusandae assumenda laboriosam quidem praesentium quia,
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
          <div className="absolute  -bottom-20  h-[400px]  w-[400px]  sm:w-80 md:w-96 lg:w-1/2 md:h-200  md:-top-33  md:right-0 ">
            <Image
              src={hero2} // 🧃 replace with your product image path
              alt="MuAami Grape Juice Bottle"
              fill
              priority
              className="object-contain  drop-shadow-[0_0_30px_rgba(147,51,234,0.45)]  transition-transform duration-500"
            />
          </div>

          {/* Decorative glow circle */}
          <div className="absolute -bottom-10 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative  px-6 md:px-16 lg:px-24 py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/grape.png')] bg-no-repeat bg-center bg-contain opacity-50  md:scale-120"></div>

        {/* Optional Gradient Overlay for better text contrast */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-transparent"></div> */}

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans uppercase">
            Our Mission
          </h2>
          <p className="text-gray-300 font-mono text-base sm:text-lg max-w-3xl mx-auto">
            Our mission is simple — to deliver refreshing, healthy, and
            flavorful drinks that bring people together. We believe drinks
            should not only quench your thirst but also energize your spirit,
            inspire joy, and promote wellness.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-6 md:px-16 lg:px-24 py-16 pt-32 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl  sm:text-3xl font-bold text-white font-sans uppercase mb-10 md:mb-16">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Natural Goodness",
                desc: "We use high-quality ingredients sourced from trusted farms to ensure every drink is packed with natural flavor.",
              },
              {
                title: "Sustainability",
                desc: "We care for our planet by promoting eco-friendly packaging and sustainable production practices.",
              },
              {
                title: "Innovation",
                desc: "We continuously experiment with new blends and flavors to excite your taste buds and inspire a healthier lifestyle.",
              },
              {
                title: "Quality Assurance",
                desc: "Each product goes through strict quality checks to ensure consistency, safety, and freshness.",
              },
              {
                title: "Customer Delight",
                desc: "We listen, learn, and create with our customers in mind — because your satisfaction is our motivation.",
              },
              {
                title: "Community",
                desc: "We aim to create positive change by supporting local farmers, communities, and wellness initiatives.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6  transition duration-300 bg-fuchsia-600 rounded-es-2xl rounded-se-4xl text-left"
              >
                <h3 className="text-xl font-sans font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 md:px-16 lg:px-24 py-16 ">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans uppercase">
            Our Story
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            Sunplus Drinks started with a dream — to bring naturally refreshing
            drinks to everyone, everywhere. What began as a small local effort
            has now grown into a beloved brand recognized for its commitment to
            quality, taste, and innovation. We’re proud to be part of every
            celebration, every workout, and every moment that matters.
          </p>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-violet-400/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-fuchsia-400/30 rounded-full blur-3xl"></div>
      </section>
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
