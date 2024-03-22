import { ExternalLink } from '../shared/ExternalLink';

export const Register = () => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-8 items-center">
      <ExternalLink
        link="https://docs.google.com/forms/d/113IkYHtUnrcFXTQybnU9GNiz4d0crpIdnoFt3w1alew/viewform"
        text="Registrovat"
        className="inline-block px-6 py-2 text-black bg-beige rounded-xl"
      />
      <p className="-skew-x-3 bg-beige px-2">registrace se spouští od 1. 4. 2024</p>
    </div>
  );
};
