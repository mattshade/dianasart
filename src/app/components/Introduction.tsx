"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-['Inter'] text-base md:text-lg lg:text-xl text-[#5A5450] leading-[1.8] text-center">
            Flow Art is a meditative painting practice that invites participants to slow down, 
            explore color and movement, and reconnect with their inner creativity. Through simple, 
            guided techniques with acrylic paints and canvas, teams discover a restorative space 
            free from judgment—where process matters more than product, and presence replaces 
            productivity.
          </p>
          <p className="font-['Inter'] text-base md:text-lg lg:text-xl text-[#5A5450] leading-[1.8] text-center mt-8">
            These workshops are designed to support workplace wellness by offering a gentle, 
            embodied pause that nurtures mental clarity, emotional regulation, and collective calm.
          </p>
        </motion.div>
      </div>
    </section>
  );
}