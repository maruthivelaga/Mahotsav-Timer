import { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const eventDate = new Date("Feb 5, 2026 00:00:00").getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const dist = eventDate - now;

      if (dist <= 0) {
        setEventStarted(true);
        return;
      }

      const d = Math.floor(dist / (1000 * 60 * 60 * 24));
      const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((dist % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  if (eventStarted) {
    return (
      <div className="timer event-started">
        🎉 The Event Has Started!
      </div>
    );
  }

  return (
    <div className="timer" id="countdown">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

const TimeUnit = ({ value, label }) => {
  const [prevValue, setPrevValue] = useState(value);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsChanging(true);
      setPrevValue(value);
      const timer = setTimeout(() => setIsChanging(false), 400);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <div className="time-unit">
      <div className={`digit ${isChanging ? 'change' : ''}`}>{value}</div>
      <div className="label">{label}</div>
    </div>
  );
};

export default Timer;
