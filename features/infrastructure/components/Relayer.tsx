"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { headers } from "next/headers";

interface Relay {
  icon: string;
}

interface RelayConn {
  width: number;
}

interface IBC {
  monthly: string;
  weekly: string;
  daily: string;
}

interface Props {
  validators: Relay[];
  title: string;
  ibc: IBC;
  period: string;
}

const Relayer = ({ validators, title, ibc, period }: Props) => {
  const [relayer, setRelayer] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [connectors, setConnectors] = useState<RelayConn[]>([]);
  const [relayerPeriod, setRelayerPeriod] = useState("");

  const relayersCount = validators.length / 2;

  useEffect(() => {
    if (period === "monthly") {
      setRelayerPeriod(ibc.monthly);
    } else if (period === "weekly") {
      setRelayerPeriod(ibc.weekly);
    } else {
      setRelayerPeriod(ibc.daily);
    }
  }, [period]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (containerRef.current && relayer) {
        const containerWidth = Number(containerRef.current.offsetWidth) / 2;
        const connectorCount = Math.round(relayersCount);
        const oneConnPath = containerWidth / connectorCount;

        setConnectors((prevConnectors) => {
          const newConnectors = [];
          if (connectorCount / relayersCount === 1) {
            for (let i = 1; i < connectorCount + 1; i++) {
              newConnectors.push({ width: oneConnPath * i - 56 });
            }
          } else {
            for (let i = 2; i < connectorCount + 1; i++) {
              newConnectors.push({ width: oneConnPath * i - 56 });
            }
          }
          return newConnectors;
        });
      } else {
        setConnectors([]);
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [relayer]);

  const handleRelayers = () => {
    setRelayer(!relayer);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        style={{ gap: "0px" }}
        animate={{ gap: relayer ? "64px" : "0px" }}
        className={`relative flex justify-center items-center overflow-${
          relayer ? "hidden" : "none"
        }`}
        onClick={handleRelayers}
      >
        <div
          ref={containerRef}
          className="z-[-1] absolute w-full h-[2px] bg-purple flex justify-center items-center"
        >
          {connectors.map((conn, i) => {
            const firstElementRound = Math.round(relayersCount);
            return (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "8px",
                  marginLeft: "0px",
                }}
                animate={{
                  marginLeft:
                    relayer && firstElementRound / relayersCount === 1
                      ? "-128px"
                      : "0px",
                }}
              >
                <motion.div
                  initial={{ x: 0, marginLeft: "0px" }}
                  style={{
                    position: "absolute",
                    display: "flex",
                    height: "8px",
                    width: "8px",
                    borderRadius: "100%",
                    background: "#7B5AFF",
                  }}
                  animate={{
                    x: conn.width,
                    marginLeft:
                      relayer && firstElementRound / relayersCount === 1
                        ? "128px"
                        : "0px",
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatDelay: 3,
                    repeatType: "mirror",
                  }}
                  className="absolute w-[8px] h-[8px] rounded-full bg-purple"
                ></motion.div>
                <motion.div
                  initial={{ x: 0, marginLeft: "0px" }}
                  style={{
                    position: "absolute",
                    display: "flex",
                    height: "8px",
                    width: "8px",
                    borderRadius: "100%",
                    background: "#7B5AFF",
                  }}
                  animate={{
                    x: -conn.width,
                    marginLeft:
                      relayer && firstElementRound / relayersCount === 1
                        ? "-128px"
                        : "0px",
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatDelay: 3,
                    repeatType: "mirror",
                  }}
                ></motion.div>
              </motion.div>
            );
          })}
        </div>

        {validators.map((val, i) => {
          const firstElementRound = Math.round(relayersCount);
          const isFirstElement = i === firstElementRound;
          if (i === 0) {
            return (
              <motion.div
                key={i}
                style={{
                  zIndex: 20,
                  marginLeft: "0px",
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
                animate={{
                  marginLeft:
                    relayer && firstElementRound / relayersCount === 1
                      ? "-128px"
                      : "0px",
                }}
              >
                <div className="w-[96px] h-[96px] rounded-full border-2 border-purple bg-dgray overflow-hidden">
                  <img alt="" loading="lazy" src={val.icon} />
                </div>
              </motion.div>
            );
          } else if (isFirstElement) {
            return (
              <motion.div
                key={i}
                style={{
                  gap: "0px",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                }}
                animate={{ gap: relayer ? "64px" : "0px" }}
              >
                <div className="w-[96px] h-[96px] rounded-full"></div>
                <motion.div
                  style={{
                    margin: "0 -32px",
                    width: "64px",
                    height: "64px",
                    borderRadius: "100%",
                    border: "solid 2px #7B5AFF",
                    background: "#171717",
                    overflow: "hidden",
                  }}
                  animate={{ margin: relayer ? "0px" : "-32px" }}
                >
                  <img alt="" loading="lazy" src={val.icon} />
                </motion.div>
              </motion.div>
            );
          } else {
            return (
              <motion.div
                style={{
                  margin: "0 -32px",
                  width: "64px",
                  height: "64px",
                  borderRadius: "100%",
                  border: "solid 2px #7B5AFF",
                  background: "#171717",
                  overflow: "hidden",
                }}
                animate={{ margin: relayer ? "0px" : "-32px" }}
                key={i}
              >
                <img alt="" loading="lazy" src={val.icon} />
              </motion.div>
            );
          }
        })}
      </motion.div>
      <div
        className={`w-full flex items-center justify-${
          relayer ? "between" : "center"
        }`}
      >
        <h5>{title}</h5>
        <div
          className={`${relayer ? "flex" : "hidden"} gap-[16px] items-center`}
        >
          <p>IBC transactions:</p>
          <h5>{relayerPeriod}</h5>
        </div>
      </div>
    </div>
  );
};

export default Relayer;
