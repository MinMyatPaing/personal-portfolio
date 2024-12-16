import React from "react";
import { motion } from "framer-motion";

const SlideButton = ({ onClick, title, id }) => {
  return (
    <motion.li
      className="relative border-2 border-secondary rounded-md overflow-hidden"
      whileHover="hover"
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ x: "-100%" }}
        variants={{
          hover: {
            x: 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          },
        }}
      />

      <motion.a
        href={`#${id}`}
        className="relative block px-4 py-3 text-secondary"
        variants={{
          hover: {
            color: "#000",
            transition: {
              duration: 0.1,
              delay: 0.15,
            },
          },
        }}
      >
        {title}
      </motion.a>
    </motion.li>
  );
};

export default SlideButton;
