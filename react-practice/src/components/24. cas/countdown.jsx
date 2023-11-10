import { useEffect, useState } from "react";

const CountDown = () => {
  function calculateTimeUntilNovember11() {
    const targetDate = new Date("2023-11-11T00:00:00Z");

    const currentDate = new Date();

    const difference = targetDate - currentDate;
    if (difference < 0) return { hours: 0, minutes: 0, seconds: 0 };

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  }

  const [count, setCount] = useState(calculateTimeUntilNovember11());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(calculateTimeUntilNovember11());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      {count.hours}:{count.minutes}:{count.seconds}
    </div>
  );
};

export default CountDown;
