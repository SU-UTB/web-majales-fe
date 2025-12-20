import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSwipeable } from 'react-swipeable';

interface LightboxModalProps {
  images: { src: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  // 1. Helper to get clean filename
  const getCleanFileName = (src: string) => {
    const fileName = src.split('/').pop() || 'unknown';
    return fileName.split('?')[0];
  };

  const currentImageSrc = images && images[currentIndex] ? images[currentIndex].src : '';
  const cleanName = getCleanFileName(currentImageSrc);

  // 2. THIS IS THE TRACKING LOGIC
  // We manually fire the 'user_interactions' event here because 
  // the global auto-tracker only listens to clicks, not "views/swipes".
  useEffect(() => {
    if (cleanName && typeof window !== 'undefined' && window.gtag) {
      
      const label = `gallery_image_view-${cleanName}`;

      window.gtag('event', 'user_interactions', {
        event_category: 'User Interaction',
        event_label: label,      // e.g. "gallery_image_view-img_11.webp"
        element_type: 'gallery_view', // distinguishing this from 'button' clicks
        link_url: currentImageSrc,
        transport_type: 'beacon'
      });
    }
  }, [cleanName, currentImageSrc]); 

  const swipeHandlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const modalContent = (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      <div {...swipeHandlers} onClick={(e) => e.stopPropagation()} className="relative">

        {/* Invisible swipe zones - No aria-label needed (we track the view, not the click) */}
        <div
          className="absolute left-0 top-0 h-full w-1/5 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        ></div>
        <div
          className="absolute right-0 top-0 h-full w-1/5 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        ></div>

        <img
          src={currentImageSrc}
          alt="Enlarged gallery item"
          className="max-h-[80vh] max-w-[90vw] rounded-md shadow-lg"
        />

        {/* Buttons have generic labels to prevent the Global Auto-Tracker 
           from reporting the CSS classes. 
           (The useful data comes from the useEffect above).
        */}
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 focus:outline-none"
        >
          ‹
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 focus:outline-none"
        >
          ›
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};