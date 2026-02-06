"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import img3 from "@/assets/d08ab41b7465af4fa05f28c02bad9d4479d751bd.png";

export function AboutFacilitator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-['Lora'] text-3xl md:text-4xl lg:text-5xl text-[#4A4845] text-center mb-12 md:mb-16"
        >
          About the Facilitator
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={img3.src}
                alt="Flow Art facilitator guiding participants"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-5"
          >
            <p className="font-['Inter'] text-base md:text-lg text-[#5A5450] leading-[1.8]">
              Hi, I'm Diana—a certified mindfulness facilitator, wellness educator, and Flow Art
              practitioner. I discovered this practice during my own journey through burnout and
              creative disconnection, and it became a cornerstone of my healing.
            </p>
            <p className="font-['Inter'] text-base md:text-lg text-[#5A5450] leading-[1.8]">
              I'm passionate about creating spaces where people can reconnect with their innate
              creativity, release perfectionism, and experience the profound calm that comes from
              simply being present with color, movement, and breath.
            </p>
            <p className="font-['Inter'] text-base md:text-lg text-[#5A5450] leading-[1.8]">
              Each workshop is facilitated with warmth, gentleness, and deep respect for each
              participant's unique experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}