"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar(): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollY.getPrevious() || 0;
      if (current > previous && current > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.3,
        ease: "linear", // smooth easeOutQuart
      }}
      className={`fixed top-0 left-0 right-0 z-50 bg-none transition-all duration-500 ${
        hidden ? "-translate-y-full " : "translate-y-0 bg-white backdrop-blur-2xl"
      }   `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="relative w-36 h-12 sm:w-40 sm:h-16">
          <Image
            src="/logo.png"
            alt="Muaami Logo"
            fill
            sizes="160px"
            priority
            className="object-contain drop-shadow-lg"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 lg:gap-14 text-black font-medium">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="inline-block font-mono   hover:text-green-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden text-black hover:text-green-400 transition-colors z-50"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Slide Down */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-t border-green-500/20"
      >
        <ul className="flex flex-col items-center space-y-6 py-8 text-black">
          {navItems.map((item, idx) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
              transition={{ delay: open ? idx * 0.1 : 0 }}
            >
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-xl font-mono font-semibold hover:text-green-400 transition-colors"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}