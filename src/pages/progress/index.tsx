import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

const MAX_VALUE = 100;

const ProgressBarWrapper = () => {

  const [value,setValue] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prev) => (prev+10)%MAX_VALUE);
    },3000);
    return () => {
      clearInterval(intervalId);
    }
  },[]);

  function onStart(){
    console.log('Progress Started');
  }

  function onComplete(){
    console.log('Progress Ended');
  }

  return (
    <div className='flex justify-center items-center w-full mt-20'>
      <ProgressBar max={MAX_VALUE} value={value}/>
    </div>
  )
}

export default ProgressBarWrapper