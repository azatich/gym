import React from "react";
import img1 from "../assets/images/img1.png";
import zumba from "../assets/images/zumba.png";
import yoga from "../assets/images/yoga.png";
import martial from "../assets/images/martial.png";
import { motion } from "motion/react";

export default function TrainingSection() {
  return (
    <div className="relative">
      <div className="mt-10 sm:mt-20">
        <h1 className="text-center text-white text-3xl sm:text-4xl font-outfit font-medium">
          Find What Moves You
        </h1>
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16 mt-8 px-5 sm:px-10 lg:px-20">
          {/* Gym Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-5/12 flex justify-center"
          >
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={img1}
                  alt="gym"
                  className="w-full h-auto rounded-tl-[100px] sm:rounded-tl-[150px]"
                />
                <div className="absolute w-full inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-tl-[50px]" />
              </div>
              <div className="flex flex-col gap-4 max-w-[350px] sm:max-w-[500px] mt-4">
                <span className="text-white font-outfit text-4xl sm:text-6xl">
                  GYM
                </span>
                <p className="text-white font-outfit text-sm sm:text-base">
                  Expect a heart-pumping workout that will leave you feeling
                  energized and accomplished. Our supportive community of
                  like-minded individuals.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Zumba Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-5/12 md:w-2/12 flex justify-center relative"
          >
            <div className="relative">
              <div className="absolute text-white text-xl sm:text-2xl lg:text-3xl font-outfit bottom-2 left-3 z-10">
                Zumba
              </div>
              <img
                src={zumba}
                alt="zumba"
                className="w-32 sm:w-40 object-cover rounded-tl-[50px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-tl-[50px]" />
            </div>
          </motion.div>

          {/* Yoga Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-5/12 md:w-2/12 flex justify-center relative"
          >
            <div className="relative">
              <div className="absolute text-white text-xl sm:text-2xl lg:text-3xl font-outfit bottom-2 left-3 z-10">
                Yoga
              </div>
              <img
                src={yoga}
                alt="yoga"
                className="w-32 sm:w-40 object-cover rounded-tl-[50px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-tl-[50px]" />
            </div>
          </motion.div>

          {/* Martial Arts Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-5/12 md:w-2/12 flex justify-center relative"
          >
            <div className="relative">
              <div className="absolute text-white text-xl sm:text-2xl lg:text-3xl font-outfit bottom-2 left-3 z-10">
                Martial <br />
                Arts
              </div>
              <img
                src={martial}
                alt="martial"
                className="w-32 sm:w-40 object-cover rounded-tl-[50px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-tl-[50px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
