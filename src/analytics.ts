/**
 * @file This file is the single source of truth for all Google Analytics tracking.
 * It provides functions to track events and pageviews.
 * Inicializace probíhá v `Analytics.astro`.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Tracks a custom event with a category, label, and action.
 * @param action - The action of the event (e.g., 'click').
 * @param category - The category of the event (e.g., 'Navigation').
 * @param label - The label of the event (e.g., 'Header/Home').
 */
export const trackEvent = (action: string, category: string, label: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
    console.log(`📡 GA Event: ${action} - Category: ${category}, Label: ${label}`);
  } else {
    console.warn(`⚠️ GA Event skipped (gtag not found): ${action} - Category: ${category}, Label: ${label}`);
  }
};

/**
 * Tracks a pageview event.
 * This should be called on every page load and route change.
 */
export const trackPageview = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: window.location.pathname,
      page_title: document.title,
      transport_type: 'beacon',
    });
    console.log(`📡 GA Pageview: ${window.location.pathname}`);
  } else {
    console.warn(`⚠️ GA Pageview skipped (gtag not found): ${window.location.pathname}`);
  }
};