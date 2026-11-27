import type { CountdownDateValueType, IGFeedType } from './AppTypes';

export const classNames = (...args: any[]) => {
  return args.filter(Boolean).join(' ');
};

export const getInstragramPhotoFeed = (feed: IGFeedType[]) =>
  feed.filter((item: IGFeedType) => item.media_type === 'CAROUSEL_ALBUM' || item.media_type === 'IMAGE');

export const calculateRemainingTime = (targetDate: Date): CountdownDateValueType => {
  const currentDate = new Date();

  const difference = targetDate.getTime() - currentDate.getTime();

  let remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  let remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

  remainingDays = Math.max(remainingDays, 0);
  remainingHours = Math.max(remainingHours, 0);
  remainingMinutes = Math.max(remainingMinutes, 0);
  remainingSeconds = Math.max(remainingSeconds, 0);

  return {
    days: remainingDays,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
  };
};
