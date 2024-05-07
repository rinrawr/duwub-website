"use client";

{/* UI Component Imports */}
import { AuroraBackground } from "./ui/aurora-background"
import { HeroHighlight } from "./ui/hero-highlight"
import { TypewriterEffect } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";

{/* Essential Imports */}
import { motion } from "framer-motion"
import React from 'react'

const subHeaderWords = `from Alberta, Canada`;
const typeWriterWords = [
  {
    text: "Junior",
  },
  {
    text: "Software",
    className: "text-secondary-800 dark:text-secondary-400",
  },
  {
    text: "Developer",
    className: "text-secondary-800 dark:text-secondary-400",
  },
  {
    text: "and",
  },
  {
    text: "Lighting",
    className: "text-accent-800 dark:text-accent-400",
  },
  {
    text: "Designer.",
    className: "text-accent-800 dark:text-accent-400",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren:1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, type: "tween", ease: "easeInOut"}}
};

const Hero = () => {
  return (
    <div id='home' className="min-h-full overflow-auto">
      <AuroraBackground>
        <HeroHighlight>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative flex flex-col items-center justify-center gap-4 px-4"
          >
            <motion.div variants={item} className="text-3xl font-bold text-center md:text-7xl dark:text-white">
              <h1 className="text-8xl sm:text-9xl text-text-950 dark:text-text-50 drop-shadow-2xlmix-blend-overlay">duwub</h1>
            </motion.div>
            <motion.div variants={item} className="py-4 text-base font-extralight md:text-4xl sm:text-7xl dark:text-text-50">
              <TypewriterEffect words={typeWriterWords} />
            </motion.div>
            <motion.div variants={item} className="flex justify-center py-1 text-center font-extralight dark:text-text-50">
              <TextGenerateEffect words={subHeaderWords} />
            </motion.div>
            <motion.div variants={item} className="absolute"></motion.div>
            {/* <motion.button variants={item} className="px-4 py-2 text-white bg-black rounded-full dark:bg-white w-fit dark:text-black">
              Scroll down
            </motion.button> */}
          </motion.div>
        </HeroHighlight>
      </AuroraBackground>
    </div>

    
  )
}

export default Hero;