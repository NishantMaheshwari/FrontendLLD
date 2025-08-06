import React from 'react'
import { sliderImages } from '../../data/carousel';
import ImageSliderFadeAnimation from './ImageSliderFadeAnimation';
import ImageSlider from './ImageSlider';
import ImageSliderSlideAnimation from './ImageSliderSlideAnimation';

const Carousels = () => {
  return (
    <div>
      <ImageSlider/>
      <ImageSliderFadeAnimation>
        {
          sliderImages.map((imageSrc, index) => (
            <img src={imageSrc} key={index} alt="wallpaper" className='object-cover w-full h-full' />
          ))
        }
      </ImageSliderFadeAnimation>
      <ImageSliderSlideAnimation/>
    </div>
  )
}

export default Carousels;