import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
  <div className="flex flex-col items-center justify-center h-auto bg-[rgba(255, 255, 255, 0.8)] text-gray-800 border border-gray-300 rounded-lg">
    <div className="flex items-center space-x-4 text-2xl p-4 bg-gray-300 rounded-lg shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="flex flex-col items-center justify-center bg-gray-200 bg-opacity-50 text-gray-800 p-2 rounded-lg w-14 h-14 md:w-20 md:h-20 backdrop-filter backdrop-blur-lg">
        <span className="font-mono text-3xl md:text-4xl">{String(timeLeft.days || "0").padStart(2, '0')}</span>
        <span className="text-xs md:text-base">Days</span>
      </div>
      <span className="font-bold text-gray-800 text-4xl flex items-center">:</span>
      <div className="flex flex-col items-center justify-center bg-gray-100 bg-opacity-50 text-gray-800 p-2 rounded-lg w-14 h-14 md:w-20 md:h-20 backdrop-filter backdrop-blur-lg">
        <span className="font-mono text-3xl md:text-4xl">{String(timeLeft.hours || "0").padStart(2, '0')}</span>
        <span className="text-xs md:text-base">Hours</span>
      </div>
      <span className="font-bold text-gray-800 text-4xl flex items-center">:</span>
      <div className="flex flex-col items-center justify-center bg-gray-200 bg-opacity-50 text-gray-800 p-2 rounded-lg w-14 h-14 md:w-20 md:h-20 backdrop-filter backdrop-blur-lg">
        <span className="font-mono text-3xl md:text-4xl">{String(timeLeft.minutes || "0").padStart(2, '0')}</span>
        <span className="text-xs md:text-base">Minutes</span>
      </div>
      <span className="font-bold text-gray-800 text-4xl flex items-center">:</span>
      <div className="flex flex-col items-center justify-center bg-gray-100 bg-opacity-50 text-gray-800 p-2 rounded-lg w-14 h-14 md:w-20 md:h-20 backdrop-filter backdrop-blur-lg">
        <span className="font-mono text-3xl md:text-4xl">{String(timeLeft.seconds || "0").padStart(2, '0')}</span>
        <span className="text-xs md:text-base">Seconds</span>
      </div>
    </div>
  </div>
  );
};

export default CountdownTimer;
