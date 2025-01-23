import React from "react";
import dumbbell from "../assets/images/dumbbell.png";
import Button from "./Button";
import { motion } from "motion/react";
import Section from "./Section";

export default function MembershipSection({ membership }) {
  return (
    <Section
      className="mt-20 pb-20 bg-subscription bg-cover bg-no-repeat"
      ref={membership}
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-white text-4xl font-outfit font-medium"
      >
        Membership
      </motion.h1>
      <div className="flex justify-center items-center gap-10 mt-[6rem]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-[300px] h-[350px] rounded-xl border-2 border-white flex flex-col"
        >
          <img
            src={dumbbell}
            alt="dumbbell"
            className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[100px]"
          />
          <h3 className="uppercase text-center text-white text-2xl font-outfit mt-[3rem]">
            Silver membership
          </h3>
          <h4 className="uppercase text-center text-white text-2xl font-outfit mt-[1rem]">
            $60/month
          </h4>
          <div className="px-5 flex justify-center mt-[1.3rem]">
            <span className="text-white font-outfit text-wrap">
              Start your fitness journey with access to the gym and Zumba
              classes. Perfect for staying active, building strength, and having
              fun.
            </span>
          </div>
          <div className="mt-auto ml-5 mb-5">
            <Button className="bg-red-500 rounded-lg text-white pl-4 pr-6 py-2 hover:bg-red-800 hover:px-7 ease-in-out duration-300">
              Buy Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="relative w-[300px] h-[400px] rounded-xl border-2 border-white flex flex-col"
        >
          <img
            src={dumbbell}
            alt="dumbbell"
            className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[100px]"
          />
          <h3 className="uppercase text-center text-white text-2xl font-outfit mt-[3rem]">
            Platinum membership
          </h3>
          <h4 className="uppercase text-center text-white text-2xl font-outfit mt-[1rem]">
            $120/month
          </h4>
          <div className="px-5 flex justify-center mt-[1.3rem]">
            <span className="text-white font-outfit text-wrap">
              Enjoy unlimited access to the gym, Zumba, yoga, and martial arts.
              The Platinum plan offers the ultimate variety for fitness
              enthusiasts aiming for excellence.
            </span>
          </div>
          <div className="mt-auto ml-5 mb-5">
            <Button className="bg-red-500 rounded-lg text-white pl-4 pr-6 py-2 hover:bg-red-800 hover:px-7 ease-in-out duration-300">
              Buy Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="relative w-[300px] h-[350px] rounded-xl border-2 border-white flex flex-col"
        >
          <img
            src={dumbbell}
            alt="dumbbell"
            className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[100px]"
          />
          <h3 className="uppercase text-center text-white text-2xl font-outfit mt-[3rem]">
            Gold membership
          </h3>
          <h4 className="uppercase text-center text-white text-2xl font-outfit mt-[1rem]">
            $90/month
          </h4>
          <div className="px-5 flex justify-center mt-[1.3rem]">
            <span className="text-white font-outfit text-wrap">
              Take your routine further with access to the gym, Zumba, and yoga
              classes. Combine energy, strength, and mindfulness for a
              well-rounded fitness experience.
            </span>
          </div>
          <div className="mt-auto ml-5 mb-5">
            <Button className="bg-red-500 rounded-lg text-white pl-4 pr-6 py-2 hover:bg-red-800 hover:px-7 ease-in-out duration-300">
              Buy Now
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
