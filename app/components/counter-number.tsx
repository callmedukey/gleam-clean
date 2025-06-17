"use client";

import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

interface CounterNumberProps {
  value: number;
  suffix?: string;
}

export function CounterNumber({ value, suffix = "" }: CounterNumberProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <motion.div
      className="font-black text-[5.11rem] leading-[1.6] text-center bg-gradient-to-r from-[#1E92D2] via-[#126BB0] to-[#144894] bg-clip-text text-transparent"
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true, margin: "-100px" }}
    >
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  );
}
