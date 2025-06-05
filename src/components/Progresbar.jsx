import React, { useEffect, useState } from "react";

export default function Progresbar({ timer }) {
  const [remaningTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const Interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(Interval);
    };
  }, []);
  return (
    <div>
      <progress value={remaningTime} max={timer} />
    </div>
  );
}
