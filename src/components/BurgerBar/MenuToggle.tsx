import * as React from "react";
import { motion } from "framer-motion";

const Path = (props:any) => (
  <motion.path
    fill="transparent"
    strokeWidth="4"
    stroke="rgb(255,255,255)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: React.MouseEventHandler }) => (
  <button onClick={toggle} className='w-16 h-16 bg-transparent rounded-3xl cursor-pointer outline-none border-none absolute bottom-0 sm:top-4 left-0 sm:right-4 flex items-center justify-center'>
    <svg width="36" height="36" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
