import React from 'react'
import './styles.css'

const ProgressBar = ({ value, max }) => {
  const shift = `${(value / max) * 100}%`
  return (
    <div className='outer-container'>
      <div className="inner-container"
        role='progressbar'
        aria-valuenow={shift}
        aria-valuemin={0}
        aria-valuemax={max}
        style={{ transform: `translateX(${shift})` }}></div>
    </div>
  )
}

export default ProgressBar