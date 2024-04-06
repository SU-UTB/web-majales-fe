import { usefulLinks } from '../../data/usefulLinks';
import { ExternalLink } from '../shared/ExternalLink';
import { LinkCard } from './usefulLinks/LinkCard';

export const UsefulLinkList = () => {
  return (
    <div className="grid gap-8 lg:gap-12">
      <div>
        <h2 className="text-orange text-h2-reversed">Mohlo by se vám hodit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-16 py-8 content-center">
          {usefulLinks.map((link) => (
            <LinkCard key={link.linkTo} {...link} />
          ))}
        </div>
      </div>
      <ExternalLink
        className="inline-flex justify-self-center"
        link="https://www.kudyznudy.cz/?utm_source=kzn&utm_medium=partneri_kzn&utm_campaign=banner"
        icon={
          <img
            width={300}
            height={300}
            src="https://www.kudyznudy.cz/getmedia/f15722f4-8d08-4872-b431-18e73f2dbf75/1012102023-online-bannery-hq-300x300.jpg.aspx"
            alt="Kudyznudy.cz - nejlepší začátek výletu"
            className="rounded-2xl"
          />
        }
      />
    </div>
  );
};
