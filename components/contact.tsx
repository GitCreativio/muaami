"use client";

import { MailOpenIcon, MailX, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen  flex flex-col md:flex-row items-stretch justify-between px-6 md:px-16 lg:px-28 py-36 bg-linear-to-br from-emerald-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/leaves-pattern.png')] bg-cover bg-center"></div>

      {/* Left Side – Company Info + Map */}
      <div className="flex-1 z-10 space-y-8 mb-10 md:mb-0">
        <div>
          <h2 className="text-4xl font-sans font-extrabold text-green-500 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 font-mono max-w-md">
            We’d love to hear from you! Whether it’s feedback, partnership
            opportunities, or general inquiries, reach out and let’s connect.
          </p>
        </div>

        {/* Company Info */}
        <div className="space-y-3 text-green-400 font-medium">
          <p className=" flex gap-3">
            <MapPin fill="green" /> MUAAMI FOODS AND DRINKS
          </p>
          <p>MP ROAD, ARAPUZHA, Pantheeramkavu, Kozhikode, Kerala 673019</p>
          <p className=" flex gap-3">
            <Phone fill="green" /> +91 98765 43210
          </p>
          <p className=" flex gap-3">
            <MailOpenIcon fill="" /> contact@muaami.com
          </p>
        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-green-700 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.1483833097013!2d75.8591999735585!3d11.208876051071234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b355f2f2ec9%3A0x81ede164a98202b3!2sMUAAMI%20FOODS%20AND%20DRINKS!5e1!3m2!1sen!2sin!4v1763125848942!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>

      {/* Right Side – Contact Form */}
      <div className="flex-1 z-10 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-green-800 space-y-6"
        >
          <h3 className="text-2xl font-sans font-semibold text-green-500 text-center mb-2">
            Send a Message
          </h3>

          <div>
            <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-green-700 focus:outline-none focus:border-green-500 text-white py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-green-700 focus:outline-none focus:border-green-500 text-white py-2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm mb-2 text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-green-700 focus:outline-none focus:border-green-500 text-white py-2 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-all text-white font-medium py-3 rounded-full shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
