import React, { useState } from 'react'

const DragDrop = () => {
  const [list, setList] = useState(Array.from({ length: 100 }).map((_, ind) => ind + 1));
  const [startIndex, setStartIndex] = useState(-1);
  const [swapIndex, setSwapIndex] = useState(-1);

  function reset() {
    setStartIndex(-1);
    setSwapIndex(-1)
  }

  function swapArrayElements(arr, first, second) {
    [arr[first], arr[second]] = [arr[second], arr[first]];
    return arr;
  }

  return (
    <div className='mt-10 m-auto w-[30vw] overflow-y-auto h-[40vw]'>
      {
        list.map((ele, ind) => {
          return (
            <div
              key={ind}
              className={`w-full h-[3vw] border flex items-center justify-center cursor-grab active:cursor-grabbing ${startIndex === ind && 'bg-amber-600 opacity-40'}
              ${swapIndex === ind && 'bg-blue-600'}`}
              draggable='true'
              onDragStart={() => {
                setStartIndex(ind);
              }}
              onDragEnd={() => {
                reset();
              }}
              // onDragEnter={() => {
              //   setSwapIndex(ind);
              // }}
              // onDragLeave={() => {
              //   if(ind != swapIndex) setStartIndex(-1);
              // }}
              onDragOver={(e) => {
                e.preventDefault();
                setSwapIndex(ind);
              }}
              onDrop={(e) => {
                e.preventDefault();
                const newList = [...list];
                setList(swapArrayElements(newList, startIndex, swapIndex));
                reset();
              }}
            >
              {ele}
            </div>
          )
        })
      }
    </div>
  )
}

export default DragDrop