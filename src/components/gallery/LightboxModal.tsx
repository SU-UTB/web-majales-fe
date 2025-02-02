import React from 'react';
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
    const swipeHandlers = useSwipeable({
        onSwipedLeft: onNext,
        onSwipedRight: onPrev,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    const modalContent = (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
            style={{ zIndex: 9999 }} // ensure this is above the header
            onClick={onClose}
        >
            <div {...swipeHandlers} onClick={(e) => e.stopPropagation()} className="relative">

                {/* Invisible left swipe zone (20% width) */}
                <div
                    className="absolute left-0 top-0 h-full w-1/5 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                ></div>
                {/* Invisible right swipe zone (20% width) */}
                <div
                    className="absolute right-0 top-0 h-full w-1/5 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                ></div>
                <img
                    src={images[currentIndex].src}
                    alt="Enlarged gallery item"
                    className="max-h-[80vh] max-w-[90vw] rounded-md shadow-lg"
                />
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
