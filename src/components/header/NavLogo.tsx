import logo from '../../assets/img/logo-icon.svg';

export const NavLogo = () => {
  return (
    <a href="/">
      <img src={logo.src} alt="Majáles logo" width={80} height={80} />
    </a>
  );
};
