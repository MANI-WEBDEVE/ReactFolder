import { useState, useRef } from "react";
import "./App.css";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondPassed = 0;
  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
    // console.log(now, startTime);
  }
  return (
    <>
      <h1>Time Passed: {secondPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>START</button>
      <button onClick={handleStop}>STOP</button>
    </>
  );
}
