import { useEffect, useState } from 'react';

declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
    }
  }  

function getCookie(name: string): string | undefined {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1];
}

function setCookie(name: string, value: string, maxAgeSeconds: number): void {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAgeSeconds}`;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie('cookieConsent');
    if (consent !== 'accepted') {
      setVisible(true);
    }
  }, []);

  //https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced
  const acceptConsent = () => {
    if (window.gtag) {
      window.gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_personalization': 'denied',
        'ad_user_data': 'denied'
      });
    }

    setCookie('cookieConsent', 'accepted', 31536000); // 1 year
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>  
      <div
        className="
          fixed bottom-4 z-50
          w-[calc(100%-2rem)] max-w-sm
          bg-white shadow-xl p-4 rounded-xl
          flex flex-col justify-between
          left-1/2 -translate-x-1/2
          md:left-auto md:right-4 md:translate-x-0
          md:max-w-xs md:w-auto md:rounded-lg
        "
      >
        <p className="text-gray-700 text-sm mb-3">
          Tento web používá cookies k zajištění optimální funkce a analýzy návštěvnosti.
        </p>
        <button
          onClick={acceptConsent}
          className="bg-lightpink text-white py-2 px-4 rounded hover:bg-lightpink/90 transition-colors w-full"
        >
          Přijmout
        </button>
      </div>
    </>
  );  
}
