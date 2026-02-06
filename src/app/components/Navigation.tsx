"use client";
import { Search, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Flow Art Logo" className="w-10 h-10" />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="hidden md:block font-['Inter'] text-sm tracking-wide text-[#4A4845] hover:text-[var(--flow-blue-soft)] transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("workshops")}
              className="hidden md:block font-['Inter'] text-sm tracking-wide text-[#4A4845] hover:text-[var(--flow-blue-soft)] transition-colors duration-300"
            >
              Workshops
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hidden md:block font-['Inter'] text-sm tracking-wide text-[#4A4845] hover:text-[var(--flow-blue-soft)] transition-colors duration-300"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block font-['Inter'] text-sm tracking-wide text-[#4A4845] hover:text-[var(--flow-blue-soft)] transition-colors duration-300"
            >
              Contact
            </button>

            {/* Icons */}
            <button
              onClick={() => scrollToSection("contact")}
              className="p-2 hover:bg-[var(--flow-cream)] rounded-full transition-colors duration-300"
              aria-label="Contact"
            >
              <Mail className="w-4 h-4 text-[#4A4845]" />
            </button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}