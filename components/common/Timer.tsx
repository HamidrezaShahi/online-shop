"use client";
import React from "react";

import { useTimer } from "react-timer-hook";
interface TimerProps {
  expiryTimestamp: Date;
}
function Timer({ expiryTimestamp }: TimerProps) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex">
      <div className="font-extrabold text-3xl">
        <span className="text-red-700">{String(days).padStart(2, "0")}</span>:
        <span className="text-red-700">{String(hours).padStart(2, "0")}</span>:
        <span className="text-red-700">{String(minutes).padStart(2, "0")}</span>
        :
        <span className="text-red-700">{String(seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

export default Timer;
