import { motion } from "framer-motion";
import React from "react";

const TextLoader = () => {
  return (
    <motion.div
      style={{
        width: "100px",
        height: "18px",
        backgroundColor: "#2C2C2C",
        borderRadius: "4px",
        opacity: 1,
      }}
      animate={{
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    ></motion.div>
  );
};

export default TextLoader;
