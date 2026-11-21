import { trackEvent } from './analytics';

declare global {
  interface Window {
    __declarativeTrackingInitialized?: boolean;
  }
}

/**
 * Initializes a global click listener to track events declaratively.
 * It looks for 'data-track-*' attributes on clicked elements.
 */
export const initDeclarativeTracking = () => {
  if (typeof window === 'undefined' || window.__declarativeTrackingInitialized) {
    return;
  }

  window.__declarativeTrackingInitialized = true;

  document.body.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const trackableElement = target.closest('[data-track-event]');

    if (trackableElement) {
      const event = trackableElement.getAttribute('data-track-event');
      const category = trackableElement.getAttribute('data-track-category') || 'Unknown';
      const label = trackableElement.getAttribute('data-track-label') || 'Unknown';

      if (event) {
        trackEvent(event, category, label);
      }
    }
  });
};
