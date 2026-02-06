"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import img4 from "@/assets/c044e22d099b9474b51532341035c1f4698da305.png";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 px-6 md:px-12 bg-[var(--flow-cream)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-['Lora'] text-3xl md:text-4xl lg:text-5xl text-[#4A4845] mb-6 md:mb-8">
            Let's Create Together
          </h2>
          <p className="font-['Inter'] text-base md:text-lg lg:text-xl text-[#5A5450] leading-[1.8] max-w-3xl mx-auto mb-10 md:mb-12">
            Ready to bring Flow Art to your workplace? I'd love to hear about your team and explore 
            how this practice might support your wellness goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-12 md:mb-14"
        >
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={img4.src}
              alt="Flow Art creation in progress"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center space-y-5"
        >
          <a 
            href="mailto:dchelaru@yahoo.com"
            className="inline-block font-['Inter'] px-8 md:px-10 py-3 md:py-4 bg-[var(--flow-blue-soft)] text-white rounded-full hover:bg-[#5989B3] transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base tracking-wide"
          >
            Book a Conversation
          </a>
          <p className="font-['Inter'] text-sm md:text-base text-[#6B6560]">
            or email{" "}
            <a
              href="mailto:dchelaru@yahoo.com"
              className="text-[var(--flow-blue-soft)] hover:text-[#5989B3] transition-colors duration-300 underline decoration-1 underline-offset-4"
            >
              dchelaru@yahoo.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}