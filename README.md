# Web Majáles frontend

## Instagram connection

Each 3 months, there's a need to revalidate and change the Instagram token.

### How to get the Instagram token?

[Read the docs if lost](https://developers.facebook.com/docs/instagram-basic-display-api/)

**CLIENT_ID = Instagram App ID - Basic display**
**CLIENT_SECRET = Instagram App secret**

1. Authenticate test user - [GET] `https://api.instagram.com/oauth/authorize?client_id={CLIENT_ID}&redirect_uri={REDIRECT_URL}&scope=user_profile,user_media&response_type=code`
2. Exchange the Code for a short-lived token - [POST] `https://api.instagram.com/oauth/access_token`

   - `client_id`: Instagram app ID
   - `client_secret`: Instagram app secret
   - `grant_type`: `authorization_code`
   - `redirect_uri`
   - `code`: code (response) from step 4 (withouth hashtah and underscore)

3. Get a long-lived token - [GET] `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret={IG_APP_SECRET}&access_token={SHORT_LIVED_TOKEN}`
4. Refresh a long-lived token - [GET] `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={LONG_LIVED_TOKEN}` (when long-lived token expired, need to go all the way from the start)

## Resources:

- [Astro](https://astro.build/)
- [Trunk based development](https://trunkbaseddevelopment.com/)
- [React](https://react.dev/)
- [Headless UI](https://headlessui.com/)
