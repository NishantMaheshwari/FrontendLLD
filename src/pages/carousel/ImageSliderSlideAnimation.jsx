import React, { useState } from 'react';
import { sliderImages } from '../../data/carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './slideInAnimation.css';

const ImageSliderSlideAnimation = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [direction, setDirection] = useState('next');

  const imagesCount = sliderImages.length;

  const handlePrevClick = () => {
    setDirection('prev');
    setActiveImage((prev) => (prev - 1 + imagesCount) % imagesCount);
  };

  const handleNextClick = () => {
    setDirection('next');
    setActiveImage((prev) => (prev + 1) % imagesCount);
  };

  return (
    <div className='mb-20 w-full'>
      <div className='w-[60vw] flex justify-center gap-2 m-auto items-center'>
        <IoIosArrowBack className="text-6xl text-gray-600 hover:text-black cursor-pointer z-10" onClick={handlePrevClick} />
        <div className='w-[36vw] h-[22vw] relative overflow-hidden'>
          {sliderImages.map((image, index) => {
            let className = 'absolute default-image';
            const prevImage = (direction == 'next' ? ((activeImage - 1 + imagesCount) % imagesCount) : ((activeImage + 1) % imagesCount));
            if (index === activeImage) {
              className += direction === 'next' ? ' slide-in-right' : ' slide-in-left';
            } else if (index === prevImage) {
              className += direction === 'next' ? ' slide-out-left' : ' slide-out-right';
            }
            return (
              <img
                key={index}
                src={image}
                alt="wallpaper"
                className={className}
              />
            );
          })}
        </div>
        <IoIosArrowForward className="text-6xl text-gray-600 hover:text-black cursor-pointer z-10" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default ImageSliderSlideAnimation;