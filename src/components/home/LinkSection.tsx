import { usefulLinks } from '../../data/usefulLinks';
import { Container } from '../shared/Container';
import { LinkCard } from './usefulLinks/LinkCard';

export const LinkSection = () => {
  return (
    <section id="mohlo-by-se-hodit">
      <Container>
        <h2 className="text-orange text-h2-reversed">Mohlo by se vám hodit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-16 py-8 content-center">
          {usefulLinks.map((link) => (
            <LinkCard {...link} />
          ))}
        </div>
      </Container>
    </section>
  );
};
