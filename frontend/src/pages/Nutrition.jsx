import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

import protein from "../assets/nutritionPage/protein.png";
import protein2 from "../assets/nutritionPage/protein2.png";
import massProtein from "../assets/nutritionPage/mass-protein.png";
import vanillaProtein from "../assets/nutritionPage/vanilla-protein.png";
import chocoProtein from "../assets/nutritionPage/choco-protein.png";

import { motion } from "motion/react";
import styles from "./Nutrition.module.css";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const products = [
  {
    id: 1,
    title: "Whey Protein",
    description: "High-quality protein for muscle building.",
    image: protein,
    price: 15000,
    discountedPrice: 10000,
  },
  {
    id: 2,
    title: "Pre-Workout",
    description: "Boost your energy before workouts.",
    image: protein2,
    price: 15000,
    discountedPrice: 10000,
  },
  {
    id: 3,
    title: "BCAA",
    description: "Amino acids to support recovery.",
    image: vanillaProtein,
    price: 15000,
    discountedPrice: 10000,
  },
  {
    id: 4,
    title: "BCAA",
    description: "Amino acids to support recovery.",
    image: vanillaProtein,
    price: 15000,
    discountedPrice: 10000,
  },
  {
    id: 5,
    title: "BCAA",
    description: "Amino acids to support recovery.",
    image: vanillaProtein,
    price: 15000,
    discountedPrice: 10000,
  },
  {
    id: 6,
    title: "BCAA",
    description: "Amino acids to support recovery.",
    image: vanillaProtein,
    price: 15000,
    discountedPrice: 10000,
  },
  {
    id: 7,
    title: "BCAA",
    description: "Amino acids to support recovery.",
    image: vanillaProtein,
    price: 15000,
    discountedPrice: 10000,
  },
];

export default function Nutrition() {
  const handleButtonClick = (productId) => {
    console.log(`Button clicked for product ${productId}`);
  };

  return (
    <div className="bg-black">
      <Header />
      <div className="h-screen flex flex-col justify-center items-center relative pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="uppercase font-medium text-[80px] sm:text-[70px] lg:text-[120px] text-center text-white font-outfit"
        >
          Supplements
        </motion.h1>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          src={protein}
          alt="protein"
          className={`${styles.item} mt-[-3rem] w-[230px] sm:mt-[-2.5rem] sm:w-[200px] md:w-[240px] lg:w-[300px] lg:mt-[-4rem] z-30`}
        />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="absolute left-[1rem] top-[19rem] sm:top-[22rem] lg:left-[6rem] lg:top-[24rem] xl:left-[8rem] 2xl:left-[12rem] 2xl:top-[28rem] z-30"
        >
          <h1 className="text-center text-white font-outfit font-medium uppercase md:text-2xl lg:text-2xl xl:text-3xl">
            High protein
          </h1>
          <p className="text-white font-outfit xl:text-lg text-center">
            70% of protein per spoon
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="absolute left-[7rem] top-[23rem] sm:left-[10rem] md:left-[11.5rem] lg:left-[16.5rem] lg:top-[25rem] xl:left-[21rem] 2xl:left-[26rem] 2xl:top-[30rem] z-30"
        >
          <div className={`${styles.lineWithCircle}`}>
            <div className={`${styles.line}`}></div>
            <div className={`${styles.circle}`}>
              <div className={`${styles.innerCircle}`}>
                <div className={`${styles.innerCircle2}`}></div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="absolute right-[9rem] top-[17rem] sm:right-[11rem] sm:top-[20rem] md:right-[12.5rem] lg:right-[18rem] lg:top-[20rem] xl:right-[22rem] 2xl:right-[28rem] 2xl:top-[23rem] z-30"
        >
          <div className={`${styles.lineWithCircle}`}>
            <div className={`${styles.circle}`}>
              <div className={`${styles.innerCircle}`}>
                <div className={`${styles.innerCircle2}`}></div>
              </div>
            </div>
            <div className={`${styles.line}`}></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="absolute right-0 top-[18rem] max-w-[150px] md:max-w-[230px] md:mt-[0rem] lg:right-[1rem] lg:top-[19rem] z-30 lg:max-w-[250px] xl:right-[3em] xl:max-w-[280px] 2xl:max-w-[310px] 2xl:right-[6rem] 2xl:top-[21rem]"
        >
          <h1 className="text-white font-outfit font-medium uppercase md:text-2xl lg:text-2xl xl:text-3xl">
            Quick recovery
          </h1>
          <p className="text-white font-outfit xl:text-lg text-pretty">
            effective for post-workout recovery and can be used by all athletes
          </p>
          <Button className="font-outfit mt-5 text-white bg-red-500 px-5 py-2 rounded-full shadow-normal hover:shadow-hover transition-shadow ease-in-out duration-200">
            Purchase
          </Button>
        </motion.div>
      </div>
      <div className="bg-black mt-28">
        <div className="flex justify-between mx-8 md:mx-16">
          <div className="flex items-center gap-3">
            <Brightness1Icon color="error" />
            <span className="text-white font-outfit text-xl">
              Latest Arrival Products
            </span>
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for products"
            className="font-outfit outline-none px-4 rounded-full placeholder:font-outfit"
          />
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-10 px-5 lg:px-20 w-full">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                discountedPrice={product.discountedPrice}
                onButtonClick={() => handleButtonClick(product.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
