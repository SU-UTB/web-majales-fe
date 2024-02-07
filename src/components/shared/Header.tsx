import { AnimatePresence, motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { mobNavItemVariants, navItems } from '../../data/header';
import { NavLink } from '../header/NavLink';
import { NavLogo } from '../header/NavLogo';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header className="w-full bg-transparent max-w-screen-2xl mx-auto">
      <nav className="relative z-10 flex flex-col items-center xl:flex-row xl:justify-between xl:py-4">
        <div className="hidden xl:block">
          <NavLogo />
        </div>
        <div className="z-20 w-full flex justify-between items-center pt-4 px-4 xl:hidden">
          <NavLogo />
          <Hamburger rounded toggled={isOpen} toggle={setIsOpen} />
        </div>
        {isOpen && (
          <AnimatePresence>
            <motion.ul
              className="flex flex-col items-center gap-y-6 xl:hidden absolute top-[20vh] w-full h-[100svh]"
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
            <li>
              <NavLink key={navItem.text} {...navItem} />
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
