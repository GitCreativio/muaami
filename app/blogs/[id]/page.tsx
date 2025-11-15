"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogs } from "../page";

export default function BlogDetailPage() {
  const { id } = useParams();

  // Early return if id is missing
  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Blog not found.
      </div>
    );
  }

  // Convert id once
  const blogId = String(id);
  const blog = blogs.find((b) => String(b.id) === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Blog not found.
      </div>
    );
  }

  return (
    <main className="bg-[#0d0f0d] text-white">
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6 md:px-16 lg:px-32 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700/30 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-green-500/20 rounded-full blur-2xl"></div>

        {/* Header */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="px-4 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-500/30 inline-block">
            Health • Lifestyle • Drinks
          </span>

          <h1 className="text-4xl font-sans md:text-6xl font-extrabold leading-tight tracking-wide">
            {blog.title}
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl font-mono mx-auto">{blog.desc}</p>

          {/* Author */}
          <div className="flex items-center  justify-center gap-4 mt-6">
            <div className=" w-10 h-10 relative">
                <Image
              src={`/images/users/user${blog.id}.webp`}
              alt="Author"
            fill
              className="rounded-full border object-cover border-green-500/50"
            />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Aarav Menon</h3>
              <p className="text-sm text-gray-400">Nutrition Expert & Writer</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="relative max-w-5xl mx-auto px-6 md:px-16 lg:px-32">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={blog.img}
            width={1600}
            height={900}
            alt="Blog Main"
            className="w-full object-cover rounded-3xl"
          />
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="relative max-w-4xl mx-auto px-6 md:px-16 lg:px-32 py-20 text-gray-200 space-y-10">
        <h2 className="text-3xl font-bold text-white">
          A Deep Dive Into Natural Beverage Crafting
        </h2>
        <p className="leading-relaxed text-lg">
          Our beverages are made from carefully selected natural ingredients,
          sourced from organic farms that prioritize sustainable growing
          practices. Each fruit, herb, and natural extract goes through a
          meticulous process before it reaches your bottle.
        </p>

        <h3 className="text-2xl font-semibold mt-10 text-purple-300">
          Why Natural Ingredients Matter
        </h3>
        <p className="leading-relaxed text-lg">
          Natural ingredients ensure not only better taste but also healthier
          benefits. Unlike artificial beverages, our drinks contain real fruit
          extracts, antioxidants, and vitamins that nourish your body.
        </p>

        {/* Quote Block */}
        <blockquote className="relative bg-green-900/20 p-8 rounded-2xl border border-green-700/20 shadow-xl">
          <p className="text-xl italic text-green-200">
            “A great drink is not just tasted — it’s experienced.”
          </p>
        </blockquote>

        <h3 className="text-2xl font-semibold mt-10 text-purple-300">
          The Art of Flavor Balancing
        </h3>
        <p className="leading-relaxed text-lg">
          Flavor balance is the key to crafting a memorable drink. Our experts
          work with natural sweeteners, herbal blends, and real fruit tones to
          create a perfect harmony in every sip.
        </p>

        {/* Inline Image */}
        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={blog.img}
            width={1400}
            height={700}
            alt="Process"
            className="rounded-2xl w-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-semibold text-purple-300">
          How We Maintain Freshness
        </h3>
        <p className="leading-relaxed text-lg">
          Unlike typical drinks that rely on heavy preservatives, our process
          ensures freshness through cold-pressing and flash-pasteurization
          techniques. This maintains both taste and nutrition.
        </p>
      </section>

      {/* SOCIAL SHARE */}
      <section className="max-w-4xl mx-auto px-6 md:px-16 lg:px-32 pb-16">
        <div className="flex items-center justify-between bg-white/5 p-6 rounded-2xl border border-white/10">
          <p className="text-gray-300 text-lg">Share this article:</p>
          <div className="flex gap-4">
            <button className="p-3 bg-green-600/20 rounded-full hover:bg-green-600/40 transition">
              <i className="ri-facebook-fill text-xl text-green-300"></i>
            </button>
            <button className="p-3 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition">
              <i className="ri-instagram-line text-xl text-purple-300"></i>
            </button>
            <button className="p-3 bg-green-600/20 rounded-full hover:bg-green-600/40 transition">
              <i className="ri-whatsapp-line text-xl text-green-300"></i>
            </button>
          </div>
        </div>
      </section>

      {/* RELATED BLOGS */}
      <section className="py-24 px-6 md:px-16 lg:px-32 bg-[#0a0c0a] border-t border-white/10">
        <h2 className="text-3xl font-bold text-center mb-16">Related Reads</h2>

        <div className="grid gap-10 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition shadow-lg"
            >
              <div className="rounded-xl overflow-hidden mb-4">
                <Image
                  src={blog.img}
                  width={800}
                  height={500}
                  alt="Related Blog"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {blog.desc}
              </p>
              <Link
                href={`/blogs/${blog.id}`}
                className="text-green-300 hover:text-green-400 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 text-center px-6 bg-gradient-to-br from-purple-900/60 via-green-900/40 to-black">
        <h2 className="text-4xl font-bold mb-4">
          Discover the Flavor That Matches Your Mood
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Explore our collection of naturally crafted beverages and pick the
          drink that boosts your day.
        </p>
        <Link
          href="/products"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-green-500/20 transition-all"
        >
          Explore Products
        </Link>
      </section>
    </main>
  );
}
