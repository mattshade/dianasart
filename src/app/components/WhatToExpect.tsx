"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import img2 from "@/assets/d8c570610b5b25fa2a18bc05f8b2fa1459148ea4.png";

const steps = [
  {
    label: "Playful Exploration",
    description: "Introduction to Flow Art techniques—pouring, tilting, blending—with gentle encouragement to experiment without expectation.",
  },
  {
    label: "Mindful Creation",
    description: "Participants work on their own canvas, supported by calming music and the facilitator's gentle presence.",
  },
  {
    label: "Reflection & Sharing (Optional)",
    description: "A closing circle invites participants to share their experience, insights, or simply witness each other's creations.",
  },
];

export function WhatToExpect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-['Lora'] text-3xl md:text-4xl lg:text-5xl text-[#4A4845] text-center mb-16 md:mb-20"
        >
          What to Expect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <div key={index} className="relative pl-6 border-l border-[var(--flow-blue-light)]">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[var(--flow-blue-soft)]" />
                <h3 className="font-['Lora'] text-lg md:text-xl text-[#5A5450] mb-2">
                  {step.label}
                </h3>
                <p className="font-['Inter'] text-sm md:text-base text-[#6B6560] leading-[1.8]">
                  {step.description}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={img2.src}
                alt="Participants engaged in mindful Flow Art creation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}