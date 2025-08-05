import React from 'react'
import { sliderImages } from '../../data/carousel';
import ImageSliderAnimation from './ImageSliderAnimation';
import ImageSlider from './ImageSlider';

const Carousels = () => {
  return (
    <div>
      <ImageSlider/>
      <ImageSliderAnimation>
        {
          sliderImages.map((imageSrc, index) => (
            <img src={imageSrc} key={index} alt="wallpaper" className='object-cover w-full h-full' />
          ))
        }
      </ImageSliderAnimation>
    </div>
  )
}

export default Carousels;