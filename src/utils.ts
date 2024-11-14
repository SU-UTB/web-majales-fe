import type { Colors, CountdownDateValueType, IGFeedType } from './AppTypes';

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
  transparent: '',
};

export const calculateRemainingTime = (targetDate: Date): CountdownDateValueType => {
  const currentDate = new Date();

  const difference = targetDate.getTime() - currentDate.getTime();

  let remainingMonths = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
  let remainingDays = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  let remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  remainingMonths = Math.max(remainingMonths, 0);
  remainingDays = Math.max(remainingDays, 0);
  remainingHours = Math.max(remainingHours, 0);

  return {
    months: remainingMonths,
    days: remainingDays,
    hours: remainingHours,
  };
};
