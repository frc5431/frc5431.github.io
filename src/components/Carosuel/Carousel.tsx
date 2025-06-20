import { useState } from 'react'
import './Carousel.css'
import { CarouselItem } from '../../pages/Homepage/Home';

interface CarouselProps {
  data: CarouselItem[];
}

function Carosuel({ data }: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const numberOfImages = data.length - 1; // minus it by 1

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === numberOfImages ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? numberOfImages : prevIndex - 1
    );
  };

  // Function to get current image based on index
  const getCurrentImage = () => {
    if (data[currentImageIndex]) {
      return data[currentImageIndex].imagePath;
    } else {
      return ''; // Fallback in case of an error
    }
  };

  return (
  <div className="carousel">
      <img
        src={getCurrentImage()}
        key={getCurrentImage()}
        alt={`Image ${currentImageIndex + 1}`}
        className="carousel-image"
      />
      
      <button 
        onClick={previousImage}
        className='carousel-button left'
      >
        ←
      </button>

      <button 
        onClick={nextImage}
        className='carousel-button right'
      >
        →
      </button>
    </div>
  )
}

export default Carosuel;