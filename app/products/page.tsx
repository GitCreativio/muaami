"use client";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="w-full bg-black">
      {/* HERO SECTION */}
      <section
        className="relative flex flex-col justify-center items-center min-h-screen  px-6 md:px-16 lg:px-24 
  bg-[url('/images/hero.jpeg')] bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay Gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-green-900/40 to-transparent"></div>

        {/* Decorative Floating Glows */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-fuchsia-500/20 blur-3xl rounded-full "></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-lime-400/10 blur-3xl rounded-full animate-pulse delay-300"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide font-sans">
            Our Signature Drinks
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto mt-4 text-lg">
            Explore our refreshing collection of naturally crafted beverages —
            each made to elevate your day.
          </p>
        </div>

        {/* Scroll Down Chip */}
        <div className="absolute bottom-20 z-20">
          <a
            href="#products-section"
            className="px-5 py-2 bg-white/10 border border-white/30 backdrop-blur-md 
      rounded-full text-white text-sm font-medium flex items-center gap-2
      animate-bounce shadow-lg hover:bg-white/20 transition"
          >
            ↓ Scroll Down
          </a>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32 
    bg-gradient-to-b from-transparent to-black"
        ></div>
      </section>

      <div className=" bg-black   ">
        {/* PRODUCT 1 — Mint Cooler */}
        <section
          id="products-section"
          className="py-20 px-6 relative   md:px-16 lg:px-24 bg-gradient-to-br from-emerald-900 via-black to-green-700"
        >
          <div
            className="absolute  top-0 left-0 right-0 h-32 
    bg-gradient-to-t from-transparent to-black"
          ></div>
          <div className="max-w-6xl relative z-10 mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-4">
              <h2 className=" text-4xl md:text-6xl font-sans font-bold">
                Muaami AAHA
              </h2>
              <p className="md:text-xl font-mono text-gray-200">
                A cool fusion of fresh mint and tangy lime that instantly
                revitalizes your senses. Crisp, bright, and perfectly balanced —
                a refreshing companion for any moment.
              </p>
              {/* <button className="px-6 py-3 bg-white text-green-700 rounded-full font-semibold shadow-lg">
              Buy Now
            </button> */}
            </div>

            <div className="flex justify-center ">
              <Image
                src="/images/products/maummi_mint_aaha.webp"
                alt="Mint Cooler"
                width={450}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-32 
    bg-gradient-to-b from-transparent to-black"
          ></div>
        </section>

        {/* PRODUCT 3 — Grape Juice */}
        <section className=" mb-20 relative px-6 md:px-16 lg:px-24 bg-gradient-to-b from-black via-pink-950/40 to-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="flex order-2 md:order-1  justify-center">
              <Image
                src="/images/products/Maummi_Grapes.webp"
                alt="Berry Boost"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="text-white order-1 md:order-2 space-y-4">
              <h2 className="text-4xl md:text-6xl font-sans font-bold">
                Grape Juice{" "}
              </h2>
              <p className="text-gray-200 font-mono md:text-xl">
                Experience the pure richness of fresh grapes in every sip. Our
                grape juice delivers a naturally sweet, smooth, and refreshing
                flavor that feels both energizing and satisfying. Crafted for
                those who enjoy the classic taste of real grapes, it’s a perfect
                blend of sweetness and freshness you’ll love anytime.{" "}
              </p>
              {/* <button className="px-6 py-3 bg-white text-purple-700 rounded-full font-semibold shadow-lg">
                Buy Now
              </button> */}
            </div>
          </div>
        </section>

        {/* PRODUCT 2 — Lemon Fizz */}
        <section className=" px-6 mb-20 md:px-16 lg:px-24 bg-gradient-to-b from-black via-green-900/40 to-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 text-white space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold font-sans">
                Lemon Fizz
              </h2>
              <p className=" md:text-xl font-mono">
                A bright burst of zesty lemon balanced with a touch of natural
                sweetness. Light, crisp, and refreshing — a perfect spark of
                citrus energy in every sip.
              </p>
              {/* <button className="px-6 py-3 bg-gray-900 text-yellow-400 rounded-full font-semibold shadow-lg">
                Buy Now
              </button> */}
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/images/products/Maummi_lemonfizz.webp"
                alt="Lemon Zing"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </section>
        <section className=" mb-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-black via-orange-900/40 to-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/images/products/Maummi_Passion_Fruit.webp"
                alt="Lemon Zing"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="order-1 md:order-2 text-white space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold font-sans">
                Passion Fruit Fizz{" "}
              </h2>
              <p className=" md:text-xl font-mono">
                A vibrant blend of exotic passion fruit and lively fizz,
                delivering a bold tropical burst in every sip. Sweet, tangy, and
                uplifting — the perfect spark of tropical energy.
              </p>
              {/* <button className="px-6 py-3 bg-gray-900 text-yellow-400 rounded-full font-semibold shadow-lg">
                Buy Now
              </button> */}
            </div>
          </div>
        </section>
        <section className=" mb-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-black via-yellow-900/40 to-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-white space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold font-sans">
                Salt Lemon
              </h2>
              <p className=" md:text-xl font-mono">
                A bold fusion of sharp lemon and a hint of salt, crafted for
                those who love a tangy twist. Refreshing, energizing, and
                perfectly balanced for instant revitalization.
              </p>
              {/* <button className="px-6 py-3 bg-gray-900 text-yellow-400 rounded-full font-semibold shadow-lg">
                Buy Now
              </button> */}
            </div>

            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/images/products/Maummi_salt_lemon.webp"
                alt="Lemon Zing"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </section>
        <section className=" pb-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-black via-green-800/40 to-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 text-white space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold font-sans">
                Masala Mor
              </h2>
              <p className=" md:text-xl font-mono">
                A classic blend of smooth buttermilk infused with mild, aromatic
                spices. Cool, soothing, and refreshing — Masala Mor brings a
                perfect balance of tradition and taste in every sip. refreshing
                — a perfect spark of citrus energy in every sip.
              </p>
              {/* <button className="px-6 py-3 bg-gray-900 text-yellow-400 rounded-full font-semibold shadow-lg">
                Buy Now
              </button> */}
            </div>

            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/images/products/mummi_masala_mooru.webp"
                alt="Lemon Zing"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </div>

      {/* FINAL CALL TO ACTION */}
      <section className="relative py-20 h- flex justify-center items-center px-6 md:px-16 lg:px-24  overflow-hidden">
        {/* Full Background Green Layer (rotated & enlarged to avoid clipping) */}
        <div className="absolute h-4/5 -inset-x-32 -inset-y bg-green-600 -rotate-2"></div>

        {/* Content */}
        <div className="relative h-fit  max-w-5xl mx-auto text-center space-y-6 z-10">
          <h2 className="text-3xl font-sans sm:text-4xl font-extrabold text-black tracking-wide">
            Ready to Taste the Freshness?
          </h2>

          <p className="text-gray-900 font-mono text-base sm:text-lg max-w-2xl mx-auto font-light">
            Order your favorite refreshing drink now or explore our full range.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
