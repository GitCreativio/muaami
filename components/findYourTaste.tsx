"use client";
import Image from "next/image";
import Link from "next/link";

export default function FindYourTasteSection() {
  const products = [
    {
      name: "Grape Juice",
      img: "/images/products/Maummi_Grapes.webp",
      desc: "Pure grape goodness that refreshes your senses.",
      link: "/products/Maummi_Grapes.webp",
    },
    {
      name: "Lemon Fizz",
      img: "/images/products/Maummi_lemonfizz.webp",
      desc: "Zesty lemon with a crisp, sparkling kick.",
      link: "/products/tropical",
    },
    {
      name: "AAHA",
      img: "/images/products/maummi_mint_aaha.webp",
      desc: "A perfect mix of berries for a sweet, tangy kick.",
      link: "/products/berry",
    },
    {
      name: "Passion Fruit Fizz",
      img: "/images/products/Maummi_Passion_Fruit.webp",
      desc: "A vibrant fizz with the bold, exotic tang of passion fruit in every sip.",
      link: "/products/berry",
    },
    {
      name: "Salt Lemon",
      img: "/images/products/Maummi_salt_lemon.webp",
      desc: "A sharp citrus kick balanced with a hint of salt for a bold, refreshing twist.",
      link: "/products/berry",
    },
    {
      name: "മസാല മോര്",
      img: "/images/products/mummi_masala_mooru.webp",
      desc: "A cool, spiced buttermilk blend with traditional masala for instant refreshment.",
      link: "/products/berry",
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Subtle green glow background */}
      <div className="absolute inset-0 bg-linear-to-b from-emerald-900/40 to-black opacity-90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-4xl font-sans md:text-5xl font-bold mb-6">
          Find Your <span className="text-green-400">Taste</span>
        </h2>
        <p className="text-gray-300 text-lg mb-14 max-w-2xl mx-auto">
          Every bottle has a story — bold, fruity, and full of life. Which one
          matches your vibe today?
        </p>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3  justify-items-center">
          {products.map((p, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center space-y-4"
            >
              <div className="relative w-56 sm:w-64 md:w-72  h-64 ">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(34,197,94,0.3)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-2xl font-semibold text-green-400">
                {p.name}
              </h3>
              <p className="text-gray-300 max-w-xs">{p.desc}</p>

              <Link
                href={'/products'}
                className="px-6 py-2 border border-green-600 text-green-400 rounded-full hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blurred glow */}
      <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-green-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-10 right-1/3 w-60 h-60 bg-emerald-400/20 rounded-full blur-3xl"></div>
    </section>
  );
}
