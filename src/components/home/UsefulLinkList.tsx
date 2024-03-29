import { usefulLinks } from '../../data/usefulLinks';
import { LinkCard } from './usefulLinks/LinkCard';

export const UsefulLinkList = () => {
  return (
    <div>
      <h2 className="text-orange text-h2-reversed">Mohlo by se vám hodit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-16 py-8 content-center">
        {usefulLinks.map((link) => (
          <LinkCard key={link.linkTo} {...link} />
        ))}
      </div>
    </div>
  );
};
