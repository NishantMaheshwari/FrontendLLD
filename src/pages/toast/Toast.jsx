import React, { useEffect, useRef, useState } from 'react'

const Toast = ({ toast: { type, text, id, duration }, onClose }) => {

  const [currTime, setCurrTime] = useState(duration);
  const [exiting, setExiting] = useState(false);
  const intervalId = useRef(null);

  const handleSlideOutClose = () => {
    setExiting(true);
    setTimeout(() => {onClose(id)},400);
  }

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCurrTime(prevTime => {
        const nextTime=prevTime-100;
        if(nextTime<=0){
          handleSlideOutClose();
          return 0;
        }
        return nextTime;
      })
    },100);
    return () => {
      clearInterval(intervalId.current);
    }
  },[]);
  return (
    <div data-type={type} className={`toast ${exiting ? 'exit' : ''}`}>
      <div className='toast-text'>
        {text}
      </div>
      <div className='toast-cross' onClick={handleSlideOutClose}>
        X
      </div>
      <div className='toast-progress-par'>
        <div className="toast-progress-child"
          style={{
            transform: `translateX(-${((duration - currTime) / duration) * 100}%)`
          }}>

        </div>
      </div>
    </div>
  )
}

export default Toast