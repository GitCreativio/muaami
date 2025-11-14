"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

interface Testimonial {
  name: string;
  message: string;
  image: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    message:
      "This drink is unbelievably refreshing! Perfect balance and keeps me energized all day.",
    image: "/images/users/user1.webp",
    position: "Fitness Enthusiast",
  },
  {
    name: "Priya Sharma",
    message:
      "I switched from soft drinks to this product — healthier, tastier, and super refreshing!",
    image: "/images/users/user2.webp",
    position: "Nutrition Coach",
  },
  {
    name: "John Mathew",
    message:
      "The best drink I’ve tried this year. Amazing flavor and eco-friendly packaging.",
    image: "/images/users/user3.webp",
    position: "Product Reviewer",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative w-full bg-black py-20 px-5 sm:p-10 md:px-16 overflow-hidden">
      {/* Decorative Greenish Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-green-900/20 via-green-700/10 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* LEFT SIDE → 1/3 WIDTH */}
        <div className="lg:col-span-1 flex flex-col justify-center">
          <h2 className="text-4xl font-sans lg:text-5xl font-bold text-white leading-tight mb-6">
            What Our <br />
            <span className="text-green-500">Customers Say</span>
          </h2>

          <p className="text-gray-300 font-mono text-lg leading-relaxed max-w-md">
            Our drink products are crafted with purity and freshness in mind.
            Here’s what real customers feel after trying our premium beverages.
          </p>
        </div>

        {/* RIGHT SIDE → 2/3 WIDTH */}
        <div className="lg:col-span-2 ">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            className="pb-12"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    bg-white/5 
                    border border-green-600/30 
                    rounded-2xl
                    flex flex-col justify-center gap-10
                    px-8
                    h-80   /* Increased height */
                    w-full 
                    backdrop-blur-sm 
                    shadow-xl
                  "
                >
                  {/* Message */}
                  <p className="text-gray-300 leading-relaxed text-base">
                    {t.message}
                  </p>
                  {/* User */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 relative h-16 overflow-hidden rounded-full border-2 border-green-500">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className=" object-cover object-center "
                      />
                    </div>

                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {t.name}
                      </h3>
                      <p className="text-green-400 text-sm">{t.position}</p>
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
