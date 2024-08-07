import { motion } from "framer-motion";
import React from "react";

const RelayerAnim = () => {
  return (
    <div className="relative w-[380px] h-[380px] flex justify-center items-center">
      <div className="absolute w-[380px] h-[380px] flex justify-center items-center">
        <div className="z-10 w-16 h-16 overflow-hidden ml-[-40px] hover:z-20 rounded-full bg-dgray border-2 border-purple absolute transition-all duration-300 ease-in-out">
          <img src="/validator_chains/osmosis.png" alt="" loading="lazy" />
        </div>
        <div className="z-10 w-16 h-16 overflow-hidden ml-[40px] hover:z-20 rounded-full bg-dgray border-2 border-purple absolute transition-all duration-300 ease-in-out">
          <img src="/validator_chains/cosmos.png" alt="" loading="lazy" />
        </div>
        <div className="absolute w-[380px]  flex justify-between items-center">
          <div className="w-full h-[1px] bg-purple absolute"></div>
          <motion.div
            style={{
              width: "8px",
              height: "8px",
              position: "absolute",
              background: "#7B5AFF",
              borderRadius: "4px",
            }}
            animate={{
              x: 380 - 8,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 4.4,
              repeatType: "mirror",
            }}
          ></motion.div>
          <motion.div
            style={{
              width: "8px",
              height: "8px",
              position: "absolute",
              right: 0,
              background: "#7B5AFF",
              borderRadius: "4px",
            }}
            animate={{
              x: -380 + 8,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 3,
              repeatType: "mirror",
            }}
          ></motion.div>
          <div className="z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-purple">
            <img src="/validator_chains/omni.png" alt="" loading="lazy" />
          </div>
          <div className="z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-purple">
            <img src="/validator_chains/stars.png" alt="" loading="lazy" />
          </div>
        </div>

        {/* <div className="absolute w-[380px] flex justify-between items-center rotate-[45deg]">
          <motion.div
            style={{
              width: "8px",
              height: "8px",
              position: "absolute",
              background: "#7B5AFF",
              borderRadius: "4px",
            }}
            animate={{
              x: 380 - 8,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 5.2,
              repeatType: "mirror",
            }}
          ></motion.div>
          <motion.div
            style={{
              width: "8px",
              height: "8px",
              position: "absolute",
              right: 0,
              background: "#7B5AFF",
              borderRadius: "4px",
            }}
            animate={{
              x: -380 + 8,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 2.3,
              repeatType: "mirror",
            }}
          ></motion.div>
          <div className="w-full h-[1px] bg-purple absolute"></div>
          <div className="z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-purple rotate-[-36deg]">
            <img src="/validator_chains/omni.png" alt="" loading="lazy" />
          </div>
          <div className="z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-purple rotate-[-36deg]">
            <img src="/validator_chains/osmosis.png" alt="" loading="lazy" />
          </div>
        </div> */}

        <div className="absolute w-[380px] flex justify-between items-center rotate-[45deg]">
          <motion.div
            style={{
              width: "8px",
              height: "8px",
              position: "absolute",
              background: "#7B5AFF",
              borderRadius: "4px",
            }}
            animate={{
              x: 380 - 8,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 3.5,
              repeatType: "mirror",
            }}
          ></motion.div>
          <motion.div
            style={{
              width: "8px",
              height: "8px",
              position: "absolute",
              right: 0,
              background: "#7B5AFF",
              borderRadius: "4px",
            }}
            animate={{
              x: -380 + 8,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 4.2,
              repeatType: "mirror",
            }}
          ></motion.div>
          <div className="w-full h-[1px] bg-purple absolute"></div>
          <div className="z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-purple rotate-[-45deg]">
            <img src="/validator_chains/teri.png" alt="" loading="lazy" />
          </div>
          <div className="z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-purple rotate-[-45deg]">
            <img src="/validator_chains/archway.png" alt="" loading="lazy" />
          </div>
        </div>

        <div className="absolute w-[380px] flex justify-between items-center rotate-[90deg]">
          <motion.div
            style={{
              width: "8px",
              height: "8px",
              position: "absolute",
              background: "#7B5AFF",
              borderRadius: "4px",
            }}
            animate={{
              x: 380 - 8,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 3.8,
              repeatType: "mirror",
            }}
          ></motion.div>
          <motion.div
            style={{
              width: "8px",
              height: "8px",
              position: "absolute",
              right: 0,
              background: "#7B5AFF",
              borderRadius: "4px",
            }}
            animate={{
              x: -380 + 8,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 4,
              repeatType: "mirror",
            }}
          ></motion.div>
          <div className="w-full h-[1px] bg-purple absolute"></div>
          <div className="z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-purple rotate-[-90deg]">
            <img src="/validator_chains/junologo.png" alt="" loading="lazy" />
          </div>
          <div className="z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-purple rotate-[-90deg]">
            <img src="/validator_chains/akt.png" alt="" loading="lazy" />
          </div>
        </div>

        <div className="absolute w-[380px] flex justify-between items-center rotate-[135deg]">
          <motion.div
            style={{
              width: "8px",
              height: "8px",
              position: "absolute",
              background: "#7B5AFF",
              borderRadius: "4px",
            }}
            animate={{
              x: 380 - 8,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 2.8,
              repeatType: "mirror",
            }}
          ></motion.div>
          <motion.div
            style={{
              width: "8px",
              height: "8px",
              position: "absolute",
              right: 0,
              background: "#7B5AFF",
              borderRadius: "4px",
            }}
            animate={{
              x: -380 + 8,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 3.4,
              repeatType: "mirror",
            }}
          ></motion.div>
          <div className="w-full h-[1px] bg-purple absolute"></div>
          <div className="z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-purple rotate-[-135deg]">
            <img src="/validator_chains/stride.png" alt="" loading="lazy" />
          </div>
          <div className="z-10 w-12 h-12 overflow-hidden rounded-full bg-dgray border-2 border-purple rotate-[-135deg]">
            <img src="/validator_chains/neutron.png" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelayerAnim;
