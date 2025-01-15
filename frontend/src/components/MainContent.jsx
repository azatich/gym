import React from "react";
import Button from "./Button";
import { motion } from "motion/react";

export default function MainContent() {
  return (
    <div className="pt-20 px-5 sm:pt-40 sm:px-10 lg:px-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-full lg:max-w-[400px]"
      >
        <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold leading-tight">
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px red" }}
          >
            Unleash
          </span>{" "}
          your Inner Athlete
        </p>
      </motion.div>

      {/* Paragraph */}
      <div className="mt-6 sm:mt-8 lg:mt-10 max-w-full lg:max-w-[570px]">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white text-sm sm:text-base lg:text-lg font-outfit"
        >
          Get ready to sweat it out and achieve your fitness goals with our
          high-energy fitness classes! Our classes are designed to cater to all
          fitness levels and provide a fun and motivating environment to help
          you reach your peak performance.
        </motion.p>
      </div>

      {/* Button */}
      <Button
        className="mt-8 sm:mt-10 font-outfit w-full sm:w-auto"
        variant="primary"
      >
        Start free trial
      </Button>
    </div>
  );
}
