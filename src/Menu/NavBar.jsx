import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useOnClickOutside } from '../helpers/useOnClickOutside';

export const RoutePaths = {
  PRODUCTS: '/idema/produkter',
  PROJECTS: '/idema/prosjekter',
  CONTACT: '/idema/kontakt',
  BUSINESS_AREAS: '/idema/forretningsomrader',
  ABOUT: '/idema/om',
  LANDING: '/idema',
  HELSE: '/idema/helse',
  SKOLE: '/idema/skole',
};

const DropdownList = styled(motion.ul)`
  position: fixed;
  margin-left: 9%;
  top: 4rem;
  left: 0px;
  background-color: #ebebeb;
  color: #0544f9;
  cursor: pointer;
  opacity: 100;
`;

const DropdownItems = styled(motion.li)`
  text-transform: uppercase;
  padding: 2rem;
  color: #0544f9;
`;

const NavItems = styled(motion.ul)`
  display: flex;
`;

const NavItem = styled(motion.li)`
  margin-right: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Nav = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 200px;
`;

const Dropdown = () => {
  return (
    <DropdownList>
      <DropdownItems whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }}>
        <Link to={RoutePaths.HELSE}>Helse og omsorg</Link>
      </DropdownItems>
      <DropdownItems whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }}>
        <Link to={RoutePaths.SKOLE}>Undervisning</Link>
      </DropdownItems>
      <DropdownItems>
        <Link to={RoutePaths.HELSE}>Barnehager</Link>
      </DropdownItems>
      <DropdownItems>
        <Link to={RoutePaths.HELSE}>Næringsliv</Link>
      </DropdownItems>
    </DropdownList>
  );
};

const NavBar = () => {
  const [listIsOpen, setListIsOpen] = React.useState(false);

  return (
    <NavItems>
      <NavItem onMouseOver={() => setListIsOpen(true)} onMouseLeave={() => setListIsOpen(listIsOpen ? false : true)}>
        Forretningsområder
      </NavItem>
      <Nav>
        {listIsOpen ? (
          <Dropdown onMouseOver={() => setListIsOpen(true)} onMouseLeave={() => setListIsOpen(false)} />
        ) : null}
      </Nav>
      <NavItem onClick={() => setListIsOpen(false)}>
        <Link to={RoutePaths.LANDING}>Hjem</Link>
      </NavItem>
      <NavItem onClick={() => setListIsOpen(false)}>
        <Link to={RoutePaths.PROJECTS}>Prosjekter</Link>
      </NavItem>
      <NavItem onClick={() => setListIsOpen(false)}>
        <Link to={RoutePaths.ABOUT}>Om oss</Link>
      </NavItem>
      <NavItem onClick={() => setListIsOpen(false)}>
        {' '}
        <Link to={RoutePaths.CONTACT}>Kontakt oss</Link>
      </NavItem>
    </NavItems>
  );
};

export default NavBar;
