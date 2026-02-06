"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const benefits = [
  {
    title: "Stress Relief & Emotional Spaciousness",
    description:
      "Flow Art creates a safe container for releasing tension and accessing calm. The flow-based movements paired with vibrant colors encourage relaxation and present-moment awareness.",
  },
  {
    title: "Creative Confidence Without Pressure",
    description:
      "There's no 'right way' to create Flow Art. This removes performance anxiety and fosters a growth mindset, empowering participants to trust their intuition and embrace imperfection.",
  },
  {
    title: "Connection & Shared Experience",
    description:
      "Creating together fosters empathy, psychological safety, and team cohesion. Witnessing each other's unique creative expressions builds deeper understanding and mutual respect.",
  },
];

export function WhyFlowArt() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workshops" ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-[var(--flow-cream)]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-['Lora'] text-3xl md:text-4xl lg:text-5xl text-[#4A4845] text-center mb-16 md:mb-20"
        >
          Why Flow Art at Work
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <h3 className="font-['Lora'] text-xl md:text-2xl text-[#5A5450] mb-4 leading-snug">
                {benefit.title}
              </h3>
              <p className="font-['Inter'] text-sm md:text-base text-[#6B6560] leading-[1.8]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}