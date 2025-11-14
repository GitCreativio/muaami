"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar(): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50   ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-10 py-3">
        {/* Logo */}
        <Link href="/" className="relative w-36 h-12 sm:w-40 sm:h-20 md:w-50 ">
          <Image
            src="/logo.png"
            alt="muaami Logo"
            fill
            sizes="160px"
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 lg:gap-14 text-white  font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="transform inline-block hover:text-green-600 hover:-translate-y-1 
             font-mono font-bold transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden  text-white hover:text-violet-600 transition-colors"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden animate-fadeIn bg-black/80 shadow-lg border-t ">
          <ul className="flex flex-col items-center space-y-4 py-5 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-violet-600  text-white font-mono transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
