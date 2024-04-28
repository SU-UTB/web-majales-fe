import { AnimatePresence, motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { mobNavItemVariants, navItems } from '../../data/header';
import { NavLink } from '../header/NavLink';
import { NavLogo } from '../header/NavLogo';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent mx-auto sticky top-0 left-0 z-10">
      <nav className="relative z-20 bg-blue text-white">
        <div className="max-w-screen-xl flex flex-col items-center xl:flex-row xl:justify-between xl:py-4 mx-auto">
          <div className="hidden xl:block">
            <NavLogo />
          </div>
          <div className="z-30 w-full flex justify-between items-center p-4 xl:hidden">
            <NavLogo />
            <Hamburger rounded toggled={isOpen} toggle={setIsOpen} />
          </div>
          {isOpen && (
            <AnimatePresence>
              <motion.ul
                className="flex flex-col items-center justify-center gap-y-6 xl:hidden absolute w-full h-[100svh] bg-blue z-20"
                variants={mobNavItemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {navItems.map((navItem) => (
                  <motion.li key={navItem.text} variants={mobNavItemVariants}>
                    <NavLink {...navItem} onClick={() => setIsOpen(false)} />
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          )}
          <ul className="hidden xl:flex items-center space-x-8">
            {navItems.map((navItem) => (
              <li key={navItem.text}>
                <NavLink {...navItem} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
