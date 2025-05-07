"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getTimeRemaining(date: string) {
  const total = Date.parse(date) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function CountDown({ date }: { date: string }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(date));
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  const renderValue = (value: number) => (
    <AnimatePresence mode="wait">
      <motion.p
        key={value}
        className="h2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
      >
        {String(value).padStart(2, "0")}
      </motion.p>
    </AnimatePresence>
  );

  return (
    <div className="p-[30px] flex flex-col border border-[#FFFFFF26] rounded-2xl">
      <p className="p1">Avant la prochaine session</p>
      <div className="mt-6 flex gap-4 items-center">
        <div className="flex gap-2 flex-col justify-center items-center">
          {renderValue(timeLeft.days)}
          <p className="p1">Jours</p>
        </div>
        <span className="w-3 h-3 bg-[#6B8DFF] rounded-full" />
        <div className="flex gap-2 flex-col justify-center items-center">
          {renderValue(timeLeft.hours)}
          <p className="p1">Heures</p>
        </div>
        <span className="w-3 h-3 bg-[#6B8DFF] rounded-full" />
        <div className="flex gap-2 flex-col justify-center items-center">
          {renderValue(timeLeft.minutes)}
          <p className="p1">Minutes</p>
        </div>
        <span className="w-3 h-3 bg-[#6B8DFF] rounded-full" />
        <div className="flex gap-2 flex-col justify-center items-center">
          {renderValue(timeLeft.seconds)}
          <p className="p1">Secondes</p>
        </div>
      </div>
    </div>
  );
}
