import React, { useState, useEffect } from "react";
import "./Banner.css";

export default function Banner() {
  const [time, setTime] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="promo-banner">
      <div className="promo-left">
        <p className="category">Categories</p>
        <h2 className="title">
          Enhance Your <br /> Music Experience
        </h2>

        <div className="countdown">
          <div className="time-box">
            <span>{time.hours.toString().padStart(2, "0")}</span>
            <p>Hours</p>
          </div>
          <div className="time-box">
            <span>{time.days.toString().padStart(2, "0")}</span>
            <p>Days</p>
          </div>
          <div className="time-box">
            <span>{time.minutes.toString().padStart(2, "0")}</span>
            <p>Minutes</p>
          </div>
          <div className="time-box">
            <span>{time.seconds.toString().padStart(2, "0")}</span>
            <p>Seconds</p>
          </div>
        </div>

        <button className="buy-btn">Buy Now!</button>
      </div>

      <div className="promo-right">
        <img
          src="https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Speakers%20and%20Media%20Players/Images/302520_3_t5qpic.png?tr=w-600"
          alt="Speaker"
        />
      </div>
    </div>
  );
}
