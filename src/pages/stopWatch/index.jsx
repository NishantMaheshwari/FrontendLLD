import React, { useState, useRef } from 'react'
import './styles.css'

const StopWatch = () => {

  const [time, setTime] = useState(0);
  const startTimeRef = useRef(0);
  const timerIdRef = useRef(null);

  function handleStart() {
    startTimeRef.current = Date.now() - time;
    timerIdRef.current = setInterval(() => {
      setTime(Date.now() - startTimeRef.current);
    }, 10);
  }

  function handlePause() {
    clearInterval(timerIdRef.current);
  }

  function handleReset() {
    setTime(0);
    clearInterval(timerIdRef.current);
  }

  function formatTime(currentTime) {
    let timeLeft = currentTime;
    const hours = Math.floor(timeLeft / (60 * 60 * 1000));
    timeLeft %= 60 * 60 * 1000;
    const minutes = Math.floor(timeLeft / (60 * 1000));
    timeLeft %= 60 * 1000;
    const seconds = Math.floor(timeLeft / (1000));
    timeLeft %= 1000;
    const miliSeconds = Math.floor(timeLeft/10);
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
      miliSeconds.toString().padStart(2, '0')
    ];
  }

  const [hours, minutes, seconds, miliSeconds] = formatTime(time);

  return (
    <div className='stop-watch'>
      <div className='stop-watch-time'>{`${hours}:${minutes}:${seconds}:${miliSeconds}`}</div>
      <div className='stop-watch-btn-container'>
        <button className='stop-watch-btn' onClick={handleStart}>Start</button>
        <button className='stop-watch-btn' onClick={handlePause}>Pause</button>
        <button className='stop-watch-btn' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch