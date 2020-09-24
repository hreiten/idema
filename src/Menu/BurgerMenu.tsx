import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './BurgerButton';
import { Navigation } from './BurgerContent';
import styled from 'styled-components';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;

const NavBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: lightblue;
`;

export interface MenuItems {
  title: string;
  path: string;
}

const Burger = ({ menuItems, toggleMenu }: { menuItems: MenuItems[]; toggleMenu: () => void }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <Nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <NavBackground variants={sidebar}>
          <MenuToggle toggle={() => toggleOpen()} />

          <Navigation toggle={() => toggleOpen()} menuItems={menuItems} />
        </NavBackground>
      </Nav>
    </>
  );
};

export default Burger;
