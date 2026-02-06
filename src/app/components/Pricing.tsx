"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const packages = [
  {
    name: "Single Workshop",
    price: "$800 - $1200",
    description: "Perfect for a one-time team experience or special event",
    features: [
      "90-120 minute session",
      "Up to 20 participants",
      "All materials included",
      "Participants take home their canvas",
    ],
  },
  {
    name: "Quarterly Series",
    price: "$2800 - $4000",
    description: "Four seasonal workshops to cultivate ongoing well-being",
    features: [
      "Four 90-120 minute sessions",
      "Seasonal themes (Spring Renewal, Summer Flow, Autumn Grounding, Winter Reflection)",
      "Priority scheduling",
      "Discounted rate per session",
    ],
  },
  {
    name: "Custom Offering",
    price: "Let's discuss",
    description: "Tailored to your organization's unique needs and vision",
    features: [
      "Flexible duration & frequency",
      "Integration with existing wellness programs",
      "Team-building focus or contemplative retreat format",
      "Virtual option available",
    ],
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-['Lora'] text-3xl md:text-4xl lg:text-5xl text-[#4A4845] text-center mb-16 md:mb-20"
        >
          Pricing & Packages
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-black/5"
            >
              <h3 className="font-['Lora'] text-xl md:text-2xl text-[#4A4845] mb-2">
                {pkg.name}
              </h3>
              <p className="font-['Inter'] text-2xl md:text-3xl text-[var(--flow-blue-soft)] mb-3">
                {pkg.price}
              </p>
              <p className="font-['Inter'] text-sm md:text-base text-[#6B6560] mb-6 leading-[1.8]">
                {pkg.description}
              </p>
              <ul className="space-y-2.5">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="font-['Inter'] text-xs md:text-sm text-[#5A5450] flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-[var(--flow-blue-soft)] mt-1.5 mr-2.5 flex-shrink-0" />
                    <span className="leading-[1.8]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}