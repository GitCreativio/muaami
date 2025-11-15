"use client";

export const blogs = [
    {
      id: 1,
      title: "The Secret Behind Our Natural Drink Ingredients",
      desc: "Learn how we source pure, organic ingredients to craft refreshing beverages you can trust.",
      img: "/images/blogs/blog1.webp",
      date: "January 10, 2025",
    },
    {
      id: 2,
      title: "5 Health Benefits of Switching to Natural Drinks",
      desc: "Your body deserves better. Here’s why natural beverages uplift energy, mood, and wellness.",
      img: "/images/blogs/blog2.webp",
      date: "January 14, 2025",
    },
    {
      id: 3,
      title: "Behind The Scenes: How We Create Our Signature Flavors",
      desc: "A sneak peek into our product lab and the flavor-crafting magic that goes into each drink.",
      img: "/images/blogs/blog3.webp",
      date: "January 20, 2025",
    },
  ];

export default function BlogPage() {
  

  return (
    <div className="relative pt-32 w-full min-h-screen bg-black text-white overflow-hidden">
      
      {/* ------------------------- HERO SECTION ------------------------- */}
      <section className="relative py-24 px-6 md:px-20 lg:px-32 flex flex-col items-center text-center">
        {/* Glowing Decorations */}
        <div className="absolute top-10 left-16 w-32 h-32 bg-green-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-16 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full animate-pulse delay-300"></div>

        <h1 className="text-4xl font-sans md:text-6xl font-extrabold tracking-wide">
          Fresh Reads for Fresh Minds
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mt-4">
          Explore stories, research, and inspiration behind our refreshing drink collection.
        </p>
      </section>

      {/* ------------------------- BLOG CARDS ------------------------- */}
      <section 
        id="blogs"
        className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 lg:px-24 pb-20"
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-5 
                       hover:scale-[1.03] transition-all duration-300 shadow-lg 
                       hover:drop-shadow-[0_0_35px_rgba(147,51,234,0.4)]"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <p className="text-green-400 mt-4 text-sm">{blog.date}</p>

            <h3 className="text-2xl font-bold mt-2 group-hover:text-green-300 transition">
              {blog.title}
            </h3>

            <p className="text-gray-300 mt-2">{blog.desc}</p>

            <a
              href={`/blogs/${blog.id}`}
              className="inline-block mt-4 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full 
                         font-semibold shadow-md transition-all"
            >
              Read More →
            </a>
          </div>
        ))}
      </section>

      {/* ------------------------- ADD-ON SECTION: QUOTE ------------------------- */}
      <section className="relative max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-purple-800/20 to-black blur-3xl"></div>

        <h2 className="relative text-3xl md:text-4xl font-extrabold">
          “Great drinks don’t just refresh the body — they uplift the soul.”
        </h2>
      </section>

      {/* ------------------------- NEWSLETTER SIGNUP ------------------------- */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-3">Join Our Drink Lovers Community 🍃</h3>
          <p className="text-gray-300 mb-6">
            Get updates on new flavors, wellness articles, and special offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-full bg-white/20 border border-white/20 text-white placeholder-gray-300 w-full sm:w-80"
            />
            <button className="px-7 py-3 rounded-full bg-green-600 hover:bg-green-700 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------- CTA FOOTER ------------------------- */}
      <section className="relative py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Try Our Drinks?</h2>

        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Discover flavors crafted with nature’s finest ingredients.
        </p>

        <a
          href="/products"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full 
                     text-lg font-semibold shadow-lg transition"
        >
          Explore Products
        </a>
      </section>
    </div>
  );
}
