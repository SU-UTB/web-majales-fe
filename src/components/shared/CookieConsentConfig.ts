import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  root: '#cc-container',

  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {
      enabled: false, // Defaultně vypnuto
      services: {
        ga4: {
          label: 'Google Analytics 4 (GA4)',
          onAccept: () => {
            console.log('✅ GA4 consent granted');
            window.gtag('consent', 'update', {
              analytics_storage: 'granted',
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
            });
          },
          onReject: () => {
            console.log('❌ GA4 consent rejected');
            window.gtag('consent', 'update', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
            });
          },
        },
      },
    },
  },
  language: {
    default: 'cs',
    autoDetect: 'browser',
    translations: {
      cs: {
        consentModal: {
          title: 'Používáme cookies 🍪',
          description:
            'Používáme Google Analytics, abychom věděli, co vás na Majálesu nejvíce zajímá. Data jsou anonymizovaná. Více informací naleznete v <a href="/privacypolicy">Zásadách ochrany osobních údajů</a>.',
          acceptAllBtn: 'Souhlasím',
          acceptNecessaryBtn: 'Jen nezbytné',
          showPreferencesBtn: 'Nastavení',
        },
        preferencesModal: {
          title: 'Nastavení cookies',
          acceptAllBtn: 'Souhlasím se vším',
          acceptNecessaryBtn: 'Odmítnout vše',
          savePreferencesBtn: 'Uložit nastavení',
          sections: [
            {
              title: 'Nezbytné cookies',
              description: 'Tyto cookies jsou nutné pro fungování webu.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytické cookies',
              description: 'Pomáhají nám pochopit, jak web používáte (Google Analytics).',
              linkedCategory: 'analytics',
            },
          ],
        },
      },
      en: {
        consentModal: {
          title: 'We use cookies 🍪',
          description:
            'We use Google Analytics to know what you are most interested in at Majáles. Data is anonymized. For more information, see our <a href="/zasady-ochrany-osobnich-udaju">Privacy Policy</a>.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Only necessary',
          showPreferencesBtn: 'Settings',
        },
        preferencesModal: {
          title: 'Cookie settings',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save settings',
          sections: [
            {
              title: 'Necessary cookies',
              description: 'These cookies are necessary for the website to function.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytical cookies',
              description: 'They help us understand how you use the website (Google Analytics).',
              linkedCategory: 'analytics',
            },
          ],
        },
      },
    },
  },
};
