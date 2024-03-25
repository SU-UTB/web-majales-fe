import axios from 'axios';

export const fetchInstagramFeed = async (): Promise<any> => {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${import.meta.env.INSTAGRAM_API_LONG_LIVED_TOKEN}`,
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    throw error;
  }
};
