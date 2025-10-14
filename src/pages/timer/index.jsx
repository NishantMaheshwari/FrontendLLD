import React, { useRef, useState } from 'react'
import './styles.css'

const config = {
  hour: {
    value: '',
    factor: 60 * 60 * 1000,
    placeholder: 'HH'
  },
  minute: {
    value: '',
    factor: 60 * 1000,
    placeholder: 'MM'
  },
  second: {
    value: '',
    factor: 1000,
    placeholder: 'SS'
  },
}

const order = ['hour', 'minute', 'second'];

const Timer = () => {
  const [timeConfig, setTimeConfig] = useState(structuredClone(config));
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const endTimeRef = useRef(null);

  function msToConfig(newTimeConfig, miliSeconds) {
    const hourValue = Math.floor(miliSeconds / (60 * 60 * 1000));
    miliSeconds = miliSeconds % (60 * 60 * 1000);
    const minValue = Math.floor(miliSeconds / (60 * 1000));
    miliSeconds = miliSeconds % (60 * 1000);
    const secValue = Math.floor(miliSeconds / (1000));
    newTimeConfig.hour.value = hourValue;
    newTimeConfig.minute.value = minValue;
    newTimeConfig.second.value = secValue;
    return newTimeConfig;
  }

  function configToMs(newTimeConfig) {
    let miliSeconds = 0;
    order.forEach((unit) => {
      miliSeconds += (Number(newTimeConfig[unit].value) * newTimeConfig[unit].factor);
    });
    return miliSeconds;
  }

  function handleTimeChange(value, unit) {
    const newTimeConfig = structuredClone(timeConfig);
    newTimeConfig[unit].value = value;
    const miliSeconds = configToMs(newTimeConfig);
    msToConfig(newTimeConfig, miliSeconds);
    setTimeConfig(newTimeConfig);
  }

  function handleStart() {
    setIsRunning(true);
    endTimeRef.current = Date.now() + configToMs(timeConfig);
    timerRef.current = setInterval(() => {
      setTimeConfig(prev => {
        const newTimeConfig = structuredClone(prev);
        const timeRemaining = endTimeRef.current - Date.now();
        if(timeRemaining<=0){
          handleReset();
          alert('Time over');
        }
        return msToConfig(newTimeConfig, endTimeRef.current - Date.now());
      })
    },10);
  }

  function handlePause() {
    setIsRunning(false);
    clearInterval(timerRef.current);
  }

  function handleReset(){
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimeConfig(structuredClone(config));
  }

  return (
    <div className='timer-container'>
      <div className="timer-value">
        {
          order.map((unit) => {
            return (<input key={timeConfig[unit].placeholder} type='number' value={timeConfig[unit].value} onChange={(e) => handleTimeChange(e.target.value, unit)} placeholder={timeConfig[unit].placeholder}></input>)
          })
        }
      </div>
      <div className='timer-btn-container'>
        <button className='timer-btn' onClick={!isRunning ? handleStart : handlePause}>{!isRunning ? 'Start' : 'Pause'}</button>
        <button className='timer-btn' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Timer