'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Leaf, Recycle, Beaker, ShieldCheck, HeartHandshake, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Leaf,
    title: "Natural Goodness",
    desc: "Only the finest ingredients from trusted organic farms — pure, vibrant, and alive with flavor.",
    color: "emerald",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    desc: "Eco-conscious packaging and carbon-neutral practices protect the planet we all share.",
    color: "lime",
  },
  {
    icon: Beaker,
    title: "Innovation",
    desc: "Boldly crafting tomorrow’s flavors today — science meets art in every bottle.",
    color: "amber",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    desc: "Rigorous testing and artisanal care ensure perfection in every single sip.",
    color: "orange",
  },
  {
    icon: HeartHandshake,
    title: "Customer Delight",
    desc: "Your joy is our purpose. We listen, evolve, and craft with you in mind.",
    color: "rose",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "Supporting farmers, wellness initiatives, and the people who make it all possible.",
    color: "teal",
  },
];

export default function CoreValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Staggered card entrance (super lightweight)
    gsap.fromTo(
      cardsRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true, // Only animate once for performance
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden"
    >
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <p className="text-sm md:text-base font-medium tracking-widest text-emerald-600 uppercase mb-4">
            Rooted in Purpose
          </p>
          <h2
            ref={titleRef}
            className="text-4xl font-sans md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            What We Stand For
          </h2>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative bg-green-600 backdrop-blur-xl rounded-bl-xl rounded-tr-3xl border border-white/50  p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 will-change-transform"
                style={{ transform: 'translateZ(0)' }} // Forces GPU acceleration
              >
                {/* Gradient Orb on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

               

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-white leading-relaxed">
                  {value.desc}
                </p>

             
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-20">
          <p className="text-lg md:text-xl text-gray-600 font-light italic max-w-4xl mx-auto">
            These are not just values on a wall — they are the heartbeat of everything we create.
          </p>
        </div>
      </div>
    </section>
  );
}