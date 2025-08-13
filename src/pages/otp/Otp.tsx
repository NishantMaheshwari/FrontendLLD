import React, { useRef, useState } from 'react'
import './styles.css'

interface otpProps {
  count: number
}

const tempArray = ['🙂', '🙂', '🙂', '🙂']

const Otp = ({ count }: otpProps) => {
  const [otp, setOtp] = useState<string[]>(Array.from({ length: count }).map(() => ""));
  const [mask, setMask] = useState<string[]>(Array.from({ length: count }).map(() => ""));
  const inputRefs = useRef<any>([]);

  const shiftFocusRight = (index: number, oldOtp?: string[]) => {
    if (oldOtp) {
      let next = index + 1;
      while (next < count && oldOtp[next] !== '') next++;
      if (next == count) return;
      inputRefs.current[next].focus();
    }
    else {
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  }

  const shiftFocusLeft = (index: number, oldOtp?: string[]) => {
    if (oldOtp) {
      let prev = index - 1;
      while (prev >= 0 && oldOtp[prev] !== '') prev--;
      if (prev == -1) return;
      inputRefs.current[prev].focus();
    }
    else {
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  }

  const handleOtpChange = (e: any, index: number) => {
    const oldOtp = [...otp];
    const oldMask = [...mask];
    const key = e.key;
    if (key === 'Backspace') {
      oldOtp[index] = '';
      oldMask[index] = '';
      shiftFocusLeft(index);
    }
    else if (key === 'ArrowRight') {
      shiftFocusRight(index, oldOtp);
    }
    else if (key === 'ArrowLeft') {
      shiftFocusLeft(index, oldOtp);
    }
    else if (isNaN(key)) return;
    else {
      oldOtp[index] = key;
      oldMask[index] = tempArray[index];
      shiftFocusRight(index);
    }
    setOtp(oldOtp);
    setMask(oldMask)
  }

  const handleInputClick = (e: any, index: number) => {
    e.target.setSelectionRange(1, 1);
  }

  return (
    <div className='flex justify-around w-[50%] m-auto mt-20'>
      {
        Array.from({ length: count }).map((_, index) => {
          return (
            <input
              ref={(inputRef: any) => inputRefs.current[index] = inputRef}
              type='text'
              maxLength={1}
              value={mask[index]}
              inputMode='numeric'
              onKeyUp={(e) => handleOtpChange(e, index)}
              onChange={() => { }}
              onClick={(e) => handleInputClick(e, index)}
              key={index}>
            </input>
          )
        })
      }
    </div>
  )
}

export default Otp