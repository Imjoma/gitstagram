import Image from "next/image";
import React from "react";

import gitstagramLogo from "../../public/src/assets/gitstagramLogo.png";

import { motion } from "framer-motion";

const imageLogo = {
  initial: {
    opacity: 0,
  },
  animate: {
    y: [0, -35],
    opacity: [0, 1],
    transition: {
      y: {
        delay: 2,
        duration: 1,
      },
      opacity: {
        delay: 0.5,
        duration: 1,
      },
    },
  },
};

const textLogo = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 35,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
};

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <motion.div
        className="absolute z-50 "
        variants={imageLogo}
        initial="initial"
        animate="animate"
      >
        <Image
          src={gitstagramLogo}
          width={100}
          height={100}
          alt="gitstagram Logo"
        />
      </motion.div>
      <motion.div
        className="absolute text-3xl script-mt-bold"
        variants={textLogo}
        initial="initial"
        animate="animate"
      >
        Gitstagram
      </motion.div>
    </div>
  );
};

export default Loader;
