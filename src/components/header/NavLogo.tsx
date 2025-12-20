import { NavLogoIcon } from '../svg/NavLogoIcon';

export const NavLogo = () => {
  return (
    <a
      href="/"
      aria-label="header_logo"
      data-track-event="click"
      data-track-category="Header"
      data-track-label="Header/Logo"
    >
      <NavLogoIcon />
    </a>
  );
};
