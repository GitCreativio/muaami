"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  message: string;
  image: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    message: "This drink is unbelievably refreshing! Perfect balance and keeps me energized all day.",
    image: "/images/users/user1.webp",
    position: "Fitness Enthusiast",
  },
  {
    name: "Priya Sharma",
    message: "I switched from soft drinks to this product — healthier, tastier, and super refreshing!",
    image: "/images/users/user2.webp",
    position: "Nutrition Coach",
  },
  {
    name: "John Mathew",
    message: "The best drink I’ve tried this year. Amazing flavor and eco-friendly packaging.",
    image: "/images/users/user3.webp",
    position: "Product Reviewer",
  },
  {
    name: "Neha Kapoor",
    message: "Finally, a hydration drink that actually tastes amazing and doesn’t leave a weird aftertaste!",
    image: "/images/users/user4.webp",
    position: "Wellness Blogger",
  },
];

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation (split lines)
      gsap.fromTo(
        titleRef.current?.children || [],
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            once:true,
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Description
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            once:true,
            trigger: textRef.current,
            start: "top 85%",
          },
        }
      );

      // Testimonial cards — staggered entrance
      gsap.utils.toArray<HTMLElement>(".testimonial-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              once:true,
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-white via-green-50/50 to-white py-24 px-5 md:px-16 overflow-hidden"
    >
      {/* Subtle floating glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-400 rounded-full blur-3xl opacity-10 -z-10"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        {/* LEFT: Title & Text */}
        <div className="flex flex-col justify-center">
          <h2 ref={titleRef} className="text-4xl font-sans md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="block">What Our</span>
            <span className="text-green-600">Customers Say</span>
          </h2>

          <p ref={textRef} className="mt-6 text-lg text-gray-600 max-w-md font-light leading-relaxed">
            Real refreshment. Real stories. Thousands are choosing cleaner, bolder hydration every day.
          </p>
        </div>

        {/* RIGHT: Swiper */}
        <div className="lg:col-span-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            // pagination={{ clickable: true }}
            className="pb-14"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    testimonial-card
                    bg-green-50 
                    rounded-2xl
                    p-8 
                    h-80 
                    flex flex-col justify-between
                    
                    hover:border-green-200 
                    transition-all duration-500
                  "
                >
                  {/* Quote */}
                  <div className="text-lg text-gray-700 italic leading-relaxed">
                    "{t.message}"
                  </div>

                  {/* User */}
                  <div className="flex items-center gap-5 mt-8">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-green-500 ring-offset-4 ring-offset-white">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{t.name}</h3>
                      <p className="text-green-600 text-sm font-medium">{t.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}