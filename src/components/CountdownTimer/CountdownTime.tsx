import React, { FC, useEffect, useState } from 'react';

const CountdownTimer: FC<{ time: number; cb: (intervalId) => void }> = ({ time, cb }) => {
  const [currentTime, setTime] = useState(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentTime !== 0) tick();
      else cb(intervalId);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTime]);

  const tick = () => {
    setTime((currentTime) => currentTime - 1);
  };

  return <div>{currentTime}</div>;
};

export default CountdownTimer;
