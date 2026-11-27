import React, { useEffect, useRef } from 'react';
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
  const currentImageSrc = images && images[currentIndex] ? images[currentIndex].src : '';
  const cleanName = currentImageSrc.split('/').pop()?.split('?')[0] ?? '';
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const actionsRef = useRef({ onClose, onNext, onPrev });
  actionsRef.current = { onClose, onNext, onPrev };

  useEffect(() => {
    if (cleanName && typeof window !== 'undefined' && window.gtag) {
      const label = `gallery_image_view-${cleanName}`;

      window.gtag('event', 'user_interactions', {
        event_category: 'User Interaction',
        event_label: label,
        element_type: 'gallery_view',
        link_url: currentImageSrc,
        transport_type: 'beacon',
      });
    }
  }, [cleanName, currentImageSrc]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        actionsRef.current.onClose();
      } else if (event.key === 'ArrowRight') {
        actionsRef.current.onNext();
      } else if (event.key === 'ArrowLeft') {
        actionsRef.current.onPrev();
      } else if (event.key === 'Tab' && dialogRef.current) {
        const buttons = dialogRef.current.querySelectorAll<HTMLButtonElement>('button:not([disabled])');
        const firstButton = buttons[0];
        const lastButton = buttons[buttons.length - 1];

        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          lastButton?.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault();
          firstButton?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const modalContent = (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Prohlížeč fotografií"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      style={{ zIndex: 9999 }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative flex max-h-full max-w-full flex-col items-center gap-4" onClick={(event) => event.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Zavřít prohlížeč fotografií"
          className="absolute -right-2 -top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-darkPurple text-white shadow-lg transition-colors hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-0 sm:top-0"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>

        <div {...swipeHandlers} className="relative flex max-h-[82vh] max-w-[90vw] items-center justify-center">
          <img
            src={currentImageSrc}
            alt={`Fotografie z Majálesu UTB, ${currentIndex + 1} z ${images.length}`}
            className="max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={onPrev}
            aria-label="Předchozí fotografie"
            className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-darkPurple/90 text-white shadow-lg transition-colors hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-4"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Následující fotografie"
            className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-darkPurple/90 text-white shadow-lg transition-colors hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-4"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};