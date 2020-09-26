import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuItems } from './BurgerMenu';

const menuItemsVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const menuItemsContainerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

const MenuList = styled(motion.ul)`
  margin: 0;
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`;

const ListItem = styled(motion.li)`
  border-radius: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const TextPlaceholder = styled(Link)`
  border-radius: 1px;
  width: 200px;
  flex: 1;
  border: 2px solid var(--idema-color);
  padding: 10px 20px;
  background-color: transparent;

  display: flex;
  align-items: center;
  color: var(--idema-color);
  font-family: var(--sans-serif-bold);
`;

export const Navigation = ({ toggle, menuItems }: { toggle: () => void; menuItems: MenuItems[] }) => (
  <MenuList variants={menuItemsContainerVariants}>
    {menuItems.map((item, i) => (
      <ListItem variants={menuItemsVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} key={i}>
        <TextPlaceholder to={item.path} onClick={() => toggle()}>
          {item.title}
        </TextPlaceholder>
      </ListItem>
    ))}
  </MenuList>
);
