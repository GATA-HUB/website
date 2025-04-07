import { motion } from "framer-motion";
import React from "react";

const RowCardLoader = () => {
  return (
    <div className="w-full flex gap-4 p-2 pl-4 rounded-2xl items-center bg-dgray border-[1px] border-white border-opacity-10">
      <div className="flex items-center gap-2 md:gap-4 w-1/4 min-w-[90px]">
        <motion.div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "#2C2C2C",
            borderRadius: "16px",
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
        <motion.div
          style={{
            width: "50%",
            height: "16px",
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
      </div>
      <div className="w-full flex flex-row xsm:flex-col gap-2">
        <div className=" w-full grid grid-cols-3 gap-2 items-center">
          <div className="flex flex-col gap-2">
            <motion.div
              style={{
                width: "20%",
                height: "12px",
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
            <motion.div
              style={{
                width: "50%",
                height: "16px",
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
          </div>

          <div className="flex flex-col gap-2">
            <motion.div
              style={{
                width: "20%",
                height: "12px",
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
            <motion.div
              style={{
                width: "50%",
                height: "16px",
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
          </div>

          <div className="flex flex-col gap-2">
            <motion.div
              style={{
                width: "20%",
                height: "12px",
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
            <motion.div
              style={{
                width: "50%",
                height: "16px",
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
          </div>
        </div>
        <div className="xsm:w-full w-1/4 min-w-[104px] flex flex-col gap-2 xsm:flex-row xsm:justify-between bg-mgray px-3 py-2 xsm:py-1 rounded-lg">
          <motion.div
            style={{
              width: "64px",
              height: "12px",
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
          <motion.div
            style={{
              width: "80px",
              height: "16px",
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
        </div>
      </div>
    </div>
  );
};

export default RowCardLoader;
