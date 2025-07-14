import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export interface MemoryItemType {
  imageSrc: string;
  altText: string;
  caption: string;
}

export interface MemoriesYearProps {
  year: number;
  gameName: string;
  imageURL: string;
  description: string;
  memoryImages: MemoryItemType[];
  learnMoreLink: string;
}

interface ImageModalProps {
  imageSrc: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null;

  return (
    <div className="image-modal" onClick={onClose}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <CloseIcon />
        </button>
        <img src={imageSrc} alt="Enlarged view" className="modal-image"/>
      </div>
    </div>
  );
};

// Memory Item component
const MemoryItem: React.FC<MemoryItemType & { onOpenModal: (src: string) => void }> = ({ 
  imageSrc,
  altText,
  caption,
  onOpenModal
}) => {
  return (
    <div className="memory-item">
      <img
        src={imageSrc}
        alt={altText}
        className="memory-image clickable-image"
        onClick={() => onOpenModal(imageSrc)}
      />
      <div className="memory-caption">{caption}</div>
    </div>
  );
};

const MemoriesYear: React.FC<MemoriesYearProps> = ({year, description: discription, gameName, imageURL, memoryImages, learnMoreLink}: MemoriesYearProps) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Function to open image in modal
  const openImageModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Function to close modal with smooth exit animation
  const closeImageModal = () => {
    // Add closing class for exit animation
    const modal = document.querySelector('.image-modal');
    if (modal) {
      modal.classList.add('closing');
      
      // Remove after animation completes
      setTimeout(() => {
        setModalImage(null);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      }, 250);
    } else {
      // Fallback if modal element not found
      setModalImage(null);
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className="year-content">
      <div className="gameImageContainer clickable-image">
        <img
          src={imageURL}
          className="gameImage"
          alt={`${year} ${gameName} Game`}
          onClick={() => openImageModal(imageURL)}
          />
      </div>

      <div className="year-description">
        <h2>{year}: {gameName}</h2>
        <p>{discription}</p>
      </div>

      <div className="memory-gallery">
        {memoryImages.map((memory, index) => (
          <MemoryItem
            key={index}
            imageSrc={memory.imageSrc}
            altText={memory.altText}
            caption={memory.caption}
            onOpenModal={openImageModal}
          />
        ))}
      </div>
      <footer className="footer">
        {/* Apparently rel="noopener noreferrer" is some security stuff */}
        <a className="learn-more-link" href={learnMoreLink} target="_blank" rel="noopener noreferrer">
          Learn More About The {year} Season
        </a>
      </footer>

      {/* Modal for displaying enlarged images */}
      <ImageModal imageSrc={modalImage} onClose={closeImageModal} />
    </div>
  )
}

export default MemoriesYear