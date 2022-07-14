import React, { useState, useEffect } from "react";
import { ImLocation } from "react-icons/im";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { TiStopwatch } from "react-icons/ti";

const Location = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const timeDifference = +new Date(`08/08/${year}`) - new Date();
    let timeLeft = {};
    if (timeDifference > 0) {
      timeLeft = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDifference / 1000 / 60) % 60),
        seconds: Math.floor((timeDifference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="location-container">
      <div className="location-wrapper">
        <div className="location">
          <p className="icon">
            <ImLocation />
          </p>
          <p className="question">Where?</p>
          <h3>
            10, Bisi Ogbobi Street, Off Obafemi Awolowo Way, Balogun
            Bus-Stop(Opposite Lagoon Hospital) Ikeja
          </h3>
        </div>
        <div className="location">
          <p className="icon">
            <BsFillCalendar2DateFill />
          </p>
          <p className="question">How Long?</p>
          <h3>One-Week Summer Camp. (Aug 8th - 13th)</h3>
        </div>
        <div className="location">
          <p className="icon">
            <TiStopwatch />
          </p>
          <p className="question">How many days left</p>
          <h3>
            {timerComponents.length ? (
              timerComponents
            ) : (
              <span>Summer Experience Begins!</span>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Location;
