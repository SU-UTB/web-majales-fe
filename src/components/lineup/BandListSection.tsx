import { useState, useEffect } from 'react';
import { CAN_SHOW_BANDS } from '../../config/constants';
import { bands } from '../../data/bands';
import { SectionContainer } from '../shared/SectionContainer';
import { BandListItem } from './bandlist/BandListItem';
import { BandListItemHeadliner } from './bandlist/BandListItemHeadliner';
import { BublyCircles } from '../svg/shapes/BublyCircles';
import { AskewStrip } from '../svg/shapes/AskewStrip';
import { Arc } from '../svg/shapes/Arc';
import { Rays } from '../svg/shapes/Rays';
import { DotsSquare } from '../svg/shapes/DotsSquare';
import { SquaredSquare } from '../svg/shapes/SquaredSquare';
import { DotsTriangle } from '../svg/shapes/DotsTriangle';
import { OpenTriangles } from '../svg/shapes/OpenTriangles';

export const BandListSection = () => {
  // Use null as initial state to represent "time not fetched yet"
  const [now, setNow] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServerTime = async () => {
      try {
        const response = await fetch('https://time.now/developer/api/timezone/Europe/Prague');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Parse the UTC/timezone aware datetime string from the API into a JS Date object
        setNow(new Date(data.datetime));
      } catch (error) {
        console.error('Failed to fetch server time, falling back to local device time:', error);
        // Fallback to local device time if the API fails or is blocked by an adblocker
        setNow(new Date());
      } finally {
        setIsLoading(false);
      }
    };

    fetchServerTime();
  }, []);

  // Show a loading state while fetching to prevent flickering or layout shifts
  if (isLoading || !now) {
    return (
      <SectionContainer
        id="kapely"
        bgColor="bg-yellow"
        className="min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center items-center py-20 sm:py-28 md:py-36 relative overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center text-center my-auto py-12 relative z-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center text-orange tracking-tight">
            Na koho se můžete těšit?
          </h2>
          <p className="text-lg sm:text-2xl md:text-3xl font-medium text-darkPurple text-center mt-3 sm:mt-4 animate-pulse">
            Načítání interpretů...
          </p>
        </div>
      </SectionContainer>
    );
  }

  // Calculate if there are still bands waiting to be revealed based on the securely fetched time
  const hasHiddenBands = bands.some((band) => now < band.visibleFrom);

  return (
    <SectionContainer
      id="kapely"
      bgColor="bg-yellow"
      className="min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center py-20 sm:py-28 md:py-36 relative overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center text-center relative z-20">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center text-orange tracking-tight">
          Na koho se můžete těšit?
        </h2>

        {!CAN_SHOW_BANDS && (
          <p className="text-lg sm:text-2xl md:text-3xl font-medium text-darkPurple text-center mt-3 sm:mt-4">
            Již brzy prozradíme
          </p>
        )}
      </div>

      {CAN_SHOW_BANDS && (
        <div className="relative z-20 mt-10 md:mt-16 w-full">
          {/* Headliners */}
          <div className="md:px-4">
            {bands
              .slice(0, 2)
              .filter((band) => now >= band.visibleFrom)
              .map((band) => (
                <BandListItemHeadliner key={band.title} {...band} />
              ))}
          </div>

          {/* Remaining bands */}
          <div className="pt-6 md:px-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bands
              .slice(2)
              .filter((band) => now >= band.visibleFrom)
              .map((band) => (
                <BandListItem key={band.title} {...band} />
              ))}
          </div>

          {hasHiddenBands && (
            <p className="text-xl sm:text-2xl md:text-3xl py-12 font-medium text-darkPurple text-center relative z-20">
              Brzy představíme další...
            </p>
          )}
        </div>
      )}

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <Rays className="absolute top-0 md:top-0 left-0 md:left-0 h-24 md:h-48" colorMain="stroke-darkPurple" colorBg="fill-lightGreen" />
          <DotsSquare className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-darkPurple" />
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <BublyCircles className="absolute top-0 md:top-0 right-0 md:right-0 h-12 md:h-24 rotate-180" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          {/* Badge v pravém horním rohu */}
          <div className="absolute top-0 right-12 md:right-24 z-10">
            <span className="inline-flex items-center justify-center h-12 md:h-24 bg-lightGreen text-orange text-xl xs:text-xl sm:text-3xl md:text-5xl font-semibold px-4 xs:px-6 sm:px-8">
              Lineup
            </span>
          </div>
          <AskewStrip className="absolute top-12 md:top-24 right-0 md:right-0 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-lightGreen" />
          <Arc className="absolute top-12 md:top-24 right-12 md:right-24 h-8 md:h-16 rotate-180" colorMain="fill-orange" />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <SquaredSquare className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <OpenTriangles className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
          <DotsTriangle className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-transparent" />
        </div>
      </div>
    </SectionContainer>
  );
};