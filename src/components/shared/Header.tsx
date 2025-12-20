import { AnimatePresence, motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { INSTAGRAM_URL } from '../../config/constants';
import { mobNavItemVariants, navItems } from '../../data/header';
import { NavLink } from '../header/NavLink';
import { NavLogo } from '../header/NavLogo';
import { IgIcon } from '../shared/Icons';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent mx-auto sticky top-0 left-0 z-10">
      <nav className="relative z-20 bg-violet text-white">
        <div className="max-w-screen-xl flex flex-col items-center xl:flex-row xl:justify-between xl:py-4 mx-auto">
          <div className="hidden xl:block">
            <NavLogo />
          </div>
          
          <div className="z-30 w-full flex justify-between items-center p-4 xl:hidden">
            <NavLogo />
            
            <button
              type="button"
              className="focus:outline-none"
              data-track-event="click"
              data-track-category="Header"
              data-track-label="Header/MobileMenuToggle"
            >
              <Hamburger rounded toggled={isOpen} toggle={setIsOpen} />
            </button>
          </div>

          {isOpen && (
            <AnimatePresence>
              <motion.ul
                className="flex flex-col items-center justify-center gap-y-6 xl:hidden absolute w-full h-[100svh] bg-darkDarkBlue z-20"
                variants={mobNavItemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {navItems.map((navItem) => (
                  <motion.li key={navItem.text} variants={mobNavItemVariants}>
                    <NavLink
                      {...navItem}
                      onClick={() => setIsOpen(false)}
                      data-track-event="click"
                      data-track-category="Header"
                      data-track-label={`Header/Mobile/${navItem.text}`}
                    />
                  </motion.li>
                ))}
                
                {/* Mobile Instagram */}
                <motion.li variants={mobNavItemVariants} className="mt-4">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-orange transition-colors duration-200 [&>svg]:w-6 [&>svg]:h-6 [&_path]:fill-current"
                    data-track-event="click"
                    data-track-category="Header"
                    data-track-label="Header/Mobile/Instagram"
                  >
                    <IgIcon />
                  </a>
                </motion.li>
              </motion.ul>
            </AnimatePresence>
          )}

          <ul className="hidden xl:flex items-center space-x-8">
            {navItems.map((navItem) => (
              <li key={navItem.text}>
                <NavLink
                  {...navItem}
                  data-track-event="click"
                  data-track-category="Header"
                  data-track-label={`Header/Desktop/${navItem.text}`}
                />
              </li>
            ))}
            
            {/* Desktop Instagram */}
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange transition-colors duration-200 [&>svg]:w-6 [&>svg]:h-6 [&_path]:fill-current"
                data-track-event="click"
                data-track-category="Header"
                data-track-label="Header/Desktop/Instagram"
              >
                <IgIcon />
              </a>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  );
};