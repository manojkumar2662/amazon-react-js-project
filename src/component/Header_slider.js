import React, { useState, useEffect } from 'react'
import header1 from '../assets/header1.jpg'
import header2 from '../assets/header2.jpg'
import header3 from '../assets/header3.jpg'
import header4 from '../assets/header4.jpg'
import header5 from '../assets/header5.jpg'
import header6 from '../assets/header6.jpg'
import './Header_slider.css'

function Header_slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: header1,
      alt: "First banner image"
    },
    {
      image: header2,
      alt: "Second banner image"
    },
    {
      image: header3,
      alt: "Third banner image"
    },
    {
      image: header4,
      alt: "Fourth banner image"
    },
    {
      image: header5,
      alt: "Fifth banner image"
    },
    {
      image: header6,
      alt: "Sixth banner image"
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide(current => 
          current === slides.length - 1 ? 0 : current + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="header-slider-container">
      <div className="header-slider">
        {/* <button 
          className="slider-button prev" 
          onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button 
          className="slider-button next" 
          onClick={() => goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
          aria-label="Next slide"
        >
          &#8250;
        </button> */}
        
        <div className="slider-wrapper" style={{
          transform: `translateX(-${currentSlide * 100}%)`
        }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img 
                src={slide.image} 
                alt={slide.alt}
                className="slide-image"
              />
            </div>
          ))}
        </div>
        
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header_slider;