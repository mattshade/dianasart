"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const details = [
  {
    label: "Duration",
    value: "45–60 minutes",
  },
  {
    label: "Group Size",
    value: "10–30 participants (flexible)",
  },
  {
    label: "Format",
    value: "On-site, off-site, or as part of a wellness week or special event",
  },
  {
    label: "Materials",
    value: "All art supplies provided",
  },
  {
    label: "Experience Level",
    value: "No art experience required",
  },
];

export function WorkshopDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-br from-[var(--flow-blue-pale)] to-[var(--flow-cream)]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-['Lora'] text-3xl md:text-4xl lg:text-5xl text-[#4A4845] text-center mb-12 md:mb-16"
        >
          Workshop Details
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm"
        >
          <div className="space-y-6">
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 pb-6 border-b border-[var(--flow-brown-light)]/20 last:border-b-0 last:pb-0"
              >
                <h3 className="font-['Lora'] text-lg md:text-xl text-[#5A5450] md:w-56 flex-shrink-0">
                  {detail.label}
                </h3>
                <p className="font-['Inter'] text-sm md:text-base text-[#6B6560] leading-[1.8]">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-[var(--flow-brown-light)]/20">
            <h3 className="font-['Lora'] text-lg md:text-xl text-[#5A5450] mb-3">
              Customization
            </h3>
            <p className="font-['Inter'] text-sm md:text-base text-[#6B6560] leading-[1.8]">
              Workshops can be tailored to align with your organization's goals, whether the focus is stress reduction, creativity, team connection, or mindful pause during the workday.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}