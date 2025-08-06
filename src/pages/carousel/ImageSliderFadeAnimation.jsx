import React, { useEffect, useState, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './sliderAnimation.css';

const ImageSliderFadeAnimation = ({ children }) => {
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      handleNextClick();
    }, 3000);
  }

  const handleNextClick = () => {
    const slides = containerRef.current?.children;
    const count = slides?.length || 0;
    setActiveImage((prev) => {
      clearInterval(intervalRef.current);
      const nextImage = (prev + 1) % count;
      console.log('called handle next')
      if (slides) {
        [...slides].forEach((slide, ind) => {
          slide.setAttribute('data-visible', ind === nextImage);
        });
      }
      startAutoScroll();
      return nextImage;
    })
  };

  const handlePrevClick = () => {
    const slides = containerRef.current?.children;
    const count = slides?.length || 0;
    setActiveImage(() => {
      clearInterval(intervalRef.current);
      const prevImage = (activeImage - 1 + count) % count;

      if (slides) {
        [...slides].forEach((slide, ind) => {
          slide.setAttribute('data-visible', ind === prevImage);
        });
      }
      startAutoScroll();
      return prevImage;
    })
  }

  useEffect(() => {
    const slides = containerRef.current?.children;
    [...slides].forEach((slide, ind) => {
      slide.setAttribute('data-visible', ind === activeImage);
    });
    // startAutoScroll();
    // return () => {
    //   clearInterval(intervalRef.current);
    // }
  }, []);

  return (
    <div className='mt-20 mb-20 w-full flex justify-center'>
      <div className='slider-box flex items-center relative justify-center gap-2 w-[50vw]'>
        <IoIosArrowBack className="text-6xl text-gray-600 hover:text-black cursor-pointer" onClick={handlePrevClick} />
        <div ref={containerRef} className='img-container w-full h-[28vw]'>
          {children}
        </div>
        <IoIosArrowForward className="text-6xl text-gray-600 hover:text-black cursor-pointer" onClick={handleNextClick} />
      </div>
    </div>
  );
}

export default ImageSliderFadeAnimation