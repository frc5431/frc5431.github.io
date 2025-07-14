import { useState, useEffect } from 'react'
import './Carousel.css'
import { CarouselItem } from '../../pages/Homepage/Home';

interface CarouselProps {
  data: CarouselItem[];
}

function Carosuel({ data }: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const numberOfImages = data.length - 1;

  // Auto-pan functionality
  useEffect(() => {
    if (isAutoPaused || data.length <= 1 || isTransitioning) return;

    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [numberOfImages, isAutoPaused, data.length, isTransitioning]);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsAutoPaused(true);
    setSlideDirection('right');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === numberOfImages ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 600);
    
    setTimeout(() => setIsAutoPaused(false), 10000);
  };

  const previousImage = () => {
    if (isTransitioning) return;
    setIsAutoPaused(true);
    setSlideDirection('left');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? numberOfImages : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 600);
    
    setTimeout(() => setIsAutoPaused(false), 10000);
  };

  const getCurrentImage = () => {
    if (data[currentImageIndex]) {
      return data[currentImageIndex].imagePath;
    } else {
      return '';
    }
  };

  const getNextImage = () => {
    const nextIndex = slideDirection === 'right' 
      ? (currentImageIndex === numberOfImages ? 0 : currentImageIndex + 1)
      : (currentImageIndex === 0 ? numberOfImages : currentImageIndex - 1);
    return data[nextIndex]?.imagePath || '';
  };

  return (
  <div className="carousel">
      <div className="carousel-track">
        <div className={`carousel-image-wrapper current ${isTransitioning ? `slide-out-${slideDirection}` : ''}`}>
          <img
            src={getCurrentImage()}
            alt={`Image ${currentImageIndex + 1}`}
            className="carousel-image"
          />
        </div>
        {isTransitioning && (
          <div className={`carousel-image-wrapper next slide-in-${slideDirection}`}>
            <img
              src={getNextImage()}
              alt={`Next image`}
              className="carousel-image"
            />
          </div>
        )}
      </div>
      
      <button 
        onClick={previousImage}
        className='carousel-button left'
        aria-label="Previous image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>

      <button 
        onClick={nextImage}
        className='carousel-button right'
        aria-label="Next image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
    </div>
  )
}

export default Carosuel;