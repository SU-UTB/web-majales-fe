import type { Colors, IGFeedType } from './AppTypes';

export const classNames = (...args: any[]) => {
  return args.filter(Boolean).join(' ');
};

export const getInstragramPhotoFeed = (feed: IGFeedType[]) =>
  feed.filter((item: IGFeedType) => item.media_type === 'CAROUSEL_ALBUM' || item.media_type === 'IMAGE');

export const colorHexMap: Record<Colors, string> = {
  white: '#FFFFFF',
  black: '#000000',
  beige: '#FFFCD9',
  orange: '#EF5A23',
  blue: '#4400FF',
  purple: '#EA92F4',
};
