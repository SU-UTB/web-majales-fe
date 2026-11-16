import { AnimatePresence, motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { INSTAGRAM_URL } from '../../config/constants';
import { mobNavItemVariants, navItems } from '../../data/header';
import { NavLink } from '../header/NavLink';
import { NavLogo } from '../header/NavLogo';
import { Lada } from '../svg/Lada';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent mx-auto sticky top-0 left-0 z-10">
      <nav className="relative z-20 bg-darkPurple text-yellow">
        <div className="w-full max-w-screen-xl flex flex-col lg:flex-row lg:items-center lg:justify-between lg:py-4 px-4 sm:px-6 lg:px-8 mx-auto relative">
          <div className="hidden lg:flex items-center">
            <NavLogo />
          </div>

          <div className="z-30 w-full flex justify-between items-center py-4 lg:hidden">
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
                className="flex flex-col items-center justify-start pt-12 sm:pt-16 gap-y-6 lg:hidden absolute top-full left-0 w-full h-[100svh] bg-darkPurple z-20"
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
                <motion.li variants={mobNavItemVariants} className="mt-4 [&>svg]:w-8 [&>svg]:h-8">
                    <Lada fillColor="fill-yellow group-hover:fill-lightGreen duration-200" />
                </motion.li>
              </motion.ul>
            </AnimatePresence>
          )}

          {/* Centered Desktop NavItems */}
          <ul className="hidden lg:flex items-center space-x-20 xl:space-x-28 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
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
          </ul>

          {/* Right-aligned Desktop Instagram */}
          <div className="hidden lg:flex items-center [&>svg]:w-auto [&>svg]:h-8">
            <Lada fillColor="fill-yellow group-hover:fill-lightGreen duration-200" />
          </div>

        </div>
      </nav>
    </header>
  );
};