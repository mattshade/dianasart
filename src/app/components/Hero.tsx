"use client";
import { motion } from "motion/react";
import img1 from "@/assets/c3958bd969150d02c4f1c30b7f67ba772a9a69a9.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Full-width hero image */}
      <div className="absolute inset-0">
        <img
          src={img1.src}
          alt="Flow Art workshop - mindful creative expression"
          className="w-full h-full object-cover object-[center_bottom]"
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="font-['Lora'] text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-white leading-[1.15] max-w-4xl">
            Flow Art Wellness Workshops
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mb-8 md:mb-10 leading-relaxed">
            A mindful creative experience for workplace well-being
          </p>
          <button
            onClick={scrollToContact}
            className="font-['Inter'] px-8 md:px-10 py-3 md:py-4 bg-white text-[#4A4845] rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg text-sm md:text-base tracking-wide"
          >
            Book a Workshop
          </button>
        </motion.div>
      </div>
    </section>
  );
}