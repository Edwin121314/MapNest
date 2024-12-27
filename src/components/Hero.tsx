"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Link from "next/link";

export const Hero = () => {
  const images = [
    "/nature-1.jpg",
    "/nature-2.jpg",
    "/nature-3.jpg",
    "/nature-4.jpg",
    "/nature-5.jpg",
    "/nature-6.jpg",
  ];
  return (
    <ImagesSlider className="h-[45rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Explore Your <br /> Next Adventure
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-white-300/10 border-white-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <Link href="/map">Explore →</Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
};

export default Hero;
