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
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      
      <div style={{ 
        width: '95vw',
        height: '80vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto'
      }}>
        <img
          src={getCurrentImage()}
          alt={`Image ${currentImageIndex + 1}`}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '95%',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: '8px',
          }}
        />
        
        <button 
          onClick={previousImage}
          style={{
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '50px',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            opacity: 0.7,
            transition: 'opacity 0.2s',
            
          }}
        >
          ←
        </button>

        <button 
          onClick={nextImage}
          style={{
            right: '10rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '50px',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            opacity: 0.7,
            transition: 'opacity 0.2s',
          }}
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carosuel;