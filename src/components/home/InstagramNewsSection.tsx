import type { IGFeedType } from '../../AppTypes';
import { SectionContainer } from '../shared/SectionContainer';

type Props = {
  igFeed: IGFeedType[];
};

export const InstagramNewsSection = ({ igFeed }: Props) => {
  return (
    <SectionContainer id="novinky">
      <h2 className="text-blue text-h2-reversed">Novinky</h2>
      <div className="flex flex-wrap gap-6 py-8 justify-center">
        {igFeed.slice(0, 8).map(({ id, media_url, permalink }) => (
          <a className="size-[200px] lg:size-[250px] group overflow-hidden" key={id} href={permalink} target="_blank">
            <img
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
              width={200}
              height={200}
              src={media_url}
              alt="Instagram feed"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </SectionContainer>
  );
};
