import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { BurgerButton } from './BurgerButton';
import { Navigation } from './BurgerContent';
import styled from 'styled-components';
import { ScreenSize } from '../shared/ScreenSize';

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
    clipPath: 'circle(0px at 40px 40px)',
    transition: {
      delay: 0.3,
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
  z-index: 10;
`;

const NavBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: lightblue;

  @media (max-width: ${ScreenSize.SM_MIN}) {
    width: 100vw;
  }
`;

export interface MenuItems {
  title: string;
  path: string;
}

const Burger = ({ menuItems }: { menuItems: MenuItems[] }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div initial={false} animate={isOpen ? 'open' : 'closed'}>
      <Nav>
        <NavBackground variants={sidebar}>
          <Navigation toggle={toggleOpen} menuItems={menuItems} />
        </NavBackground>
      </Nav>

      <BurgerButton toggle={toggleOpen} />
    </motion.div>
  );
};

export default Burger;
