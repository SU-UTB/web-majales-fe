import { useState, useEffect } from 'react';
import { CAN_SHOW_BANDS } from '../../config/constants';
import { bands } from '../../data/bands';
import { SectionContainer } from '../shared/SectionContainer';
import { BandListItem } from './bandlist/BandListItem';
import { BandListItemHeadliner } from './bandlist/BandListItemHeadliner';

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
      <SectionContainer id="kapely" bgColor="violet" className="text-white">
        <h2 className="text-3xl p-6 md:text-6xl font-medium text-center relative z-20">
          Na koho se můžete těšit?
        </h2>
        <div className="flex justify-center items-center py-12 relative z-20">
          <p className="text-xl md:text-3xl font-normal text-center animate-pulse">
            Načítání interpretů...
          </p>
        </div>
      </SectionContainer>
    );
  }

  // Calculate if there are still bands waiting to be revealed based on the securely fetched time
  const hasHiddenBands = bands.some((band) => now < band.visibleFrom);

  return (
    <SectionContainer id="kapely" bgColor="violet" className="text-white">
      <h2 className="text-3xl p-6 md:text-6xl font-medium text-center relative z-20">
        Na koho se můžete těšit?
      </h2>
      
      {CAN_SHOW_BANDS ? (
        <div className="relative z-20">
          {/* Headliners */}
          <div className="space-y-4 md:space-y-8 md:px-4">
            {bands
              .slice(0, 2)
              .filter((band) => now >= band.visibleFrom)
              .map((band) => (
                <BandListItemHeadliner key={band.title} {...band} />
              ))}
          </div>

          {/* Remaining bands */}
          <div className="pt-6 md:px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {bands
              .slice(2)
              .filter((band) => now >= band.visibleFrom)
              .map((band) => (
                <BandListItem key={band.title} {...band} />
              ))}
          </div>
          
          {hasHiddenBands && (
            <p className="text-xl md:text-3xl py-12 font-normal text-center relative z-20">
              Brzy představíme další...
            </p>
          )}
        </div>
      ) : (
        <p className="text-xl md:text-3xl py-12 font-normal text-center relative z-20">
          Již brzy prozradíme
        </p>
      )}
    </SectionContainer>
  );
};