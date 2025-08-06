import React, { useEffect, useState } from 'react'
import { sliderImages } from '../../data/carousel'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const numImages = sliderImages.length;

  // useEffect(() => {
  //   const imageInterval = setInterval(() => {
  //     handleNextScroll();
  //   }, 3000);
  //   return () => {
  //     clearInterval(imageInterval);
  //   }
  // }, [])

  const handleNextScroll = () => {
    setActiveImage((prev) => {
      return ((prev + 1) % numImages);
    })
  }

  const handlePrevScroll = () => {
    setActiveImage((prev) => {
      return ((prev - 1 + numImages) % numImages);
    })
  }

  return (
    <div className='flex items-center justify-center gap-2 w-[50vw]  m-auto mt-20'>
      <IoIosArrowBack className="text-6xl text-gray-600 hover:text-black cursor-pointer" onClick={handlePrevScroll} />
      <div className='w-[32vw] h-[20vw]'>
        <img src={sliderImages[activeImage]} alt="wallpaper" className='object-cover w-full h-full' />
      </div>
      <IoIosArrowForward className="text-6xl text-gray-600 hover:text-black cursor-pointer" onClick={handleNextScroll} />
    </div>
  )
}

export default ImageSlider