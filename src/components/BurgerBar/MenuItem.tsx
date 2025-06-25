import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease:'circIn',
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      ease:'circOut',
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem = ({ i,text,navigateTo }:{i:number,text:string,navigateTo:Function}) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigateTo(text)}
      className={`cursor-pointer text-slate-900 text-2xl font-bold w-full px-2 py-1 border-2 border-black rounded-md hover:bg-purple-500 hover:border-purple-900 hover:text-white `}
    >
      {text}
    </motion.li>
  );
};
