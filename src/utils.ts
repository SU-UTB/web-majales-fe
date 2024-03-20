import type { IGFeedType } from './AppTypes';

export const classNames = (...args: any[]) => {
  return args.filter(Boolean).join(' ');
};

export const getInstragramPhotoFeed = (feed: IGFeedType[]) =>
  feed.filter((item: IGFeedType) => item.media_type === 'CAROUSEL_ALBUM' || item.media_type === 'IMAGE');
