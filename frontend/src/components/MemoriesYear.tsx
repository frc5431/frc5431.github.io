import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export interface MemoryItemType {
  imageSrc: string;
  altText: string;
  caption: string;
}

export interface YouTubeVideoType {
  videoId: string;
  title: string;
}

export interface MemoriesYearProps {
  year: number;
  gameName: string;
  imageURL: string;
  description: string;
  memoryImages: MemoryItemType[];
  youtubeVideos?: YouTubeVideoType[];
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
        <img src={imageSrc} alt="Enlarged view" className="modal-image" />
      </div>
    </div>
  );
};

// YouTube Video component
const YouTubeVideo: React.FC<YouTubeVideoType> = ({ videoId, title }) => {
  return (
    <div className="memory-item youtube-video-item">
      <div className="memory-caption">{title}</div>
      <div className="youtube-video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="youtube-video"
        />
      </div>
    </div>
  );
};

// Memory Item component
const MemoryItem: React.FC<
  MemoryItemType & { onOpenModal: (src: string) => void }
> = ({ imageSrc, altText, caption, onOpenModal }) => {
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

const MemoriesYear: React.FC<MemoriesYearProps> = ({
  year,
  description,
  gameName,
  imageURL,
  memoryImages,
  youtubeVideos,
  learnMoreLink,
}: MemoriesYearProps) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Function to open image in modal
  const openImageModal = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  // Function to close modal with smooth exit animation
  const closeImageModal = () => {
    // Add closing class for exit animation
    const modal = document.querySelector(".image-modal");
    if (modal) {
      modal.classList.add("closing");

      // Remove after animation completes
      setTimeout(() => {
        setModalImage(null);
      }, 250);
    } else {
      // Fallback if modal element not found
      setModalImage(null);
    }
  };

  return (
    <main className="year-content" aria-labelledby={`year-title-${year}`}>
      <figure className="gameImageContainer clickable-image">
        <img
          src={imageURL}
          className="gameImage"
          alt={`${year} ${gameName} Game`}
          onClick={() => openImageModal(imageURL)}
        />
      </figure>

      <div className="year-description">
        <h2>
          {year}: {gameName}
        </h2>
        <p>{description}</p>
      </div>

      {memoryImages.length > 0 && (
        <section aria-label="Photo Gallery">
          <div className="content-divider" role="presentation">
            <div className="divider-line" aria-hidden="true"></div>
            <div className="divider-text">
              {memoryImages.length > 1 ? "Photos" : "Photo"}
            </div>
            <div className="divider-line" aria-hidden="true"></div>
          </div>
          <article className="memory-gallery">
            {memoryImages.map((memory, index) => (
              <MemoryItem
                key={index}
                imageSrc={memory.imageSrc}
                altText={memory.altText}
                caption={memory.caption}
                onOpenModal={openImageModal}
              />
            ))}
          </article>
        </section>
      )}

      {youtubeVideos && youtubeVideos.length > 0 && (
        <section aria-label="Video Gallery">
          <div className="content-divider" role="presentation">
            <div className="divider-line" aria-hidden="true"></div>
            <div className="divider-text">
              {youtubeVideos.length > 1 ? "Videos" : "Video"}
            </div>
            <div className="divider-line" aria-hidden="true"></div>
          </div>
          <article className="memory-gallery">
            {youtubeVideos.map((video, index) => (
              <YouTubeVideo
                key={index}
                videoId={video.videoId}
                title={video.title}
              />
            ))}
          </article>
        </section>
      )}

      <nav aria-label="Learn More" className="footer">
        <a
          className="learn-more-link"
          href={learnMoreLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About The {year} Season
        </a>
      </nav>

      {/* Modal for displaying enlarged images */}
      <ImageModal imageSrc={modalImage} onClose={closeImageModal} />
    </main>
  );
};

export default MemoriesYear;
