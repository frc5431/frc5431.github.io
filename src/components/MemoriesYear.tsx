import React, { useEffect, useRef, useState } from "react";
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
  const modalRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!imageSrc) return null;

  return (
    <button
      type="button"
      className="image-modal"
      ref={modalRef}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
          onClose();
        }
      }}
      aria-label="Image viewer"
      tabIndex={0}
      style={{ padding: 0, border: "none", background: "none" }}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          <CloseIcon />
        </button>
        <img src={imageSrc} alt="Enlarged view" className="modal-image" />
      </div>
    </button>
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
      <button
        type="button"
        className="memory-image clickable-image"
        onClick={() => onOpenModal(imageSrc)}
        aria-label={`Enlarge image: ${altText}`}
      >
        <img src={imageSrc} alt={altText} className="memory-image" />
      </button>
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
        <button
          type="button"
          className="gameImageButton"
          onClick={() => openImageModal(imageURL)}
          aria-label={`Enlarge image: ${year} ${gameName} Game`}
          style={{ padding: 0, border: "none", background: "none" }}
        >
          <img
            src={imageURL}
            className="gameImage"
            alt={`${year} ${gameName} Game`}
          />
        </button>
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
