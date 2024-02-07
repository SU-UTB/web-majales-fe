import logo from '../../assets/img/logo-temp.svg';

export const NavLogo = () => {
  return (
    <a href="/">
      <img src={logo.src} alt="Majáles logo" width={60} height={60} />
    </a>
  );
};
