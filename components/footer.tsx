"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-green-700 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-800/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-700/20 blur-3xl rounded-full"></div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <FaLeaf className="text-green-600 text-2xl" />
              <h1 className="text-2xl font-bold text-green-600 tracking-wider">
                Muaami
              </h1>
            </div>
            <p className="text-sm text-green-800 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Refreshing every moment — Muaami brings you premium, naturally
              inspired drinks that energize and delight your senses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-green-600 mb-4 uppercase">
              Quick Links
            </h2>
            <ul className="space-y-3 text-green-800">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="relative inline-block transition duration-300 hover:text-green-600 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-green-600 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-green-600 mb-4 uppercase">
              Contact Info
            </h2>
            <ul className="space-y-3 text-green-800 text-sm">
              <li className="flex items-start md:items-start justify-center md:justify-start gap-2">
                <FaMapMarkerAlt className="text-green-600 mt-1" />
                <span className="leading-snug">
                  MP ROAD, ARAPUZHA, Pantheeramkavu,
                  <br />
                  Kozhikode, Kerala 673019
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaPhoneAlt className="text-green-600" />
                <a
                  href="tel:+919633155015"
                  className="hover:text-green-600 transition"
                >
                  +91 9633155015, +91 7510155015
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope className="text-green-600" />
                <a
                  href="mailto:info@muaami.com"
                  className="hover:text-green-600 transition"
                >
                  info@muaami.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold text-green-600 mb-4 uppercase">
              Follow Us
            </h2>
            <p className="text-sm text-green-800 mb-4">
              Stay refreshed with our latest updates and promotions.
            </p>
            <div className="flex justify-center md:justify-start gap-5">
              {[
                {
                  icon: <FaFacebookF />,
                  href: "https://www.facebook.com/muaamiaahafood/",
                },
                {
                  icon: <FaInstagram />,
                  href: "https://www.instagram.com/muaami_india/",
                },
                { icon: <FaTwitter />, href: "#" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="p-2 border border-green-800 rounded-full hover:bg-green-600 hover:text-black transition duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-900 mt-12 pt-6 text-center text-green-800 text-sm">
          © {new Date().getFullYear()} Muaami. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
