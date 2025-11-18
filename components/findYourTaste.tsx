"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Grape Juice",
    img: "/images/products/Maummi_Grapes.webp",
    desc: "Pure grape goodness that refreshes your senses.",
  },
  {
    name: "Lemon Fizz",
    img: "/images/products/Maummi_lemonfizz.webp",
    desc: "Zesty lemon with a crisp, sparkling kick.",
  },
  {
    name: "AAHA",
    img: "/images/products/maummi_mint_aaha.webp",
    desc: "Cool mint fusion with a refreshing burst.",
  },
  {
    name: "Passion Fruit Fizz",
    img: "/images/products/Maummi_Passion_Fruit.webp",
    desc: "Exotic passion fruit with vibrant fizz.",
  },
  {
    name: "Salt Lemon",
    img: "/images/products/Maummi_salt_lemon.webp",
    desc: "Bold citrus balanced with a salty edge.",
  },
  {
    name: "മസാല മോര്",
    img: "/images/products/mummi_masala_mooru.webp",
    desc: "Spiced buttermilk with traditional masala magic.",
  },
];

export default function FindYourTasteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const spans = titleRef.current
        ? Array.from(titleRef.current.querySelectorAll("span"))
        : [];

      if (spans.length) {
        gsap.fromTo(
          spans,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
          }
        );
      }

      // Subtitle
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: subtitleRef.current, start: "top 85%" },
        }
      );

      // Product cards - staggered float-in
      gsap.utils.toArray<HTMLElement>(".taste-card").forEach((card, i) => {
        const img = card.querySelector("img");
        const content = card.querySelectorAll("h3, p, a");

        // Card entrance
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotationY: 15,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.4,
            delay: i * 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          }
        );

        // Image float + glow
        gsap.to(img, {
          y: -12,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Text content fade in
        gsap.fromTo(
          content,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.6 + i * 0.15,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });

      // Floating background orbs (parallax)
      gsap.to(".orb-1", {
        y: -80,
        x: 60,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".orb-2", {
        y: -100,
        x: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-green-50 py-24 overflow-hidden"
    >
      {/* Floating decorative orbs */}
      <div className="orb-1 absolute top-20 left-10 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="orb-2 absolute bottom-10 right-20 w-80 h-80 bg-emerald-400 rounded-full blur-3xl opacity-15 -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <h2
          ref={titleRef}
          className="text-4xl font-sans md:text-6xl font-bold text-gray-900"
        >
          Find Your <span className="text-green-600">Taste</span>
        </h2>
        <p
          ref={subtitleRef}
          className="mt-6 text-lg font-mono md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Every bottle has a story — bold, fruity, and full of life. <br />
          Which one matches your vibe today?
        </p>

        {/* Product Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-items-center">
          {products.map((product, i) => (
            <div
              key={i}
              className="taste-card group flex flex-col items-center text-center max-w-sm"
            >
              {/* Product Image with floating effect */}
              <div className="relative w-64 h-80 mb-8 origin-bottom">
                <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:rotate-6 group-hover:scale-110 preserve-3d">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority={i < 3}
                  />
                </div>

                {/* Glow effect on hover */}
                {/* <div className="absolute inset-0 -z-10 rounded-full bg-green-400 opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-700 scale-150"></div> */}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-6 max-w-xs leading-relaxed">
                {product.desc}
              </p>

              <Link
                href="/products"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Flavor
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
