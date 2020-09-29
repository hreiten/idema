import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TransitionGroup } from 'react-transition-group';
import { ArrowDropDown } from '@styled-icons/remix-line/ArrowDropDown';
import { RoutePaths } from './Header';
import { useOnClickOutside } from '../helpers/useOnClickOutside';

const transitionName = 'example';

const DropdownContainer = styled.div`
  height: 250px; // this value can be higher, but needs to be set
  min-width: 180px;
  position: absolute;
  overflow: hidden;
  z-index: 100;

  &.${transitionName}-enter {
    transform: translateY(-100%);
    transition: 0.3s cubic-bezier(0, 1, 0.5, 1);

    &.${transitionName}-enter-active {
      transform: translateY(0%);
    }
  }

  &.${transitionName}-leave {
    transform: translateY(0%);
    transition: 0.3s ease-in-out;

    &.${transitionName}-leave-active {
      transform: translateY(-100%);
    }
  }
`;

const DropdownList = styled(motion.ul)`
  background-color: whitesmoke;
  padding-top: 1rem;
  cursor: pointer;
  opacity: 100;
`;

const DropdownItems = styled(motion.li)`
  text-transform: uppercase;
  padding: 1rem;
`;

const Nav = styled(motion.div)`
  display: inline-block;
  margin: 2rem auto 0;

  a {
    padding: 0 16px;
  }
`;

const NavItems = styled(motion.ul)`
  text-transform: uppercase;
`;

const NavItem = styled(motion.li)`
  display: inline-block;
  position: relative;
  letter-spacing: 1px;
  cursor: pointer;
`;

const LinkText = styled(Link)`
  padding: 0 16px;
`;

const Icon = styled.a`
  font-weight: 200;
  padding: 0;
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
        <Link to={RoutePaths.BARNEHAGE}>Barnehager</Link>
      </DropdownItems>
      <DropdownItems>
        <Link to={RoutePaths.BYGG}>Næringsliv</Link>
      </DropdownItems>
    </DropdownList>
  );
};

const NavBar = () => {
  const [listIsOpen, setListIsOpen] = React.useState(false);

  return (
    <Nav>
      <NavItems>
        <NavItem onClick={() => setListIsOpen(false)}>
          <LinkText to={RoutePaths.LANDING}>Hjem</LinkText>
        </NavItem>
        <NavItem onMouseLeave={() => setListIsOpen(listIsOpen ? false : true)}>
          <a onMouseEnter={() => setListIsOpen(true)}>
            Forretningsområder
            {/* <ArrowDropDown size="36" /> */}
          </a>
          <TransitionGroup transitionName={transitionName} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            <DropdownContainer>
              {listIsOpen ? (
                <Dropdown onMouseOver={() => setListIsOpen(true)} onMouseLeave={() => setListIsOpen(false)} />
              ) : (
                <div></div>
              )}
            </DropdownContainer>
          </TransitionGroup>
        </NavItem>
        <NavItem onClick={() => setListIsOpen(false)}>
          <LinkText to={RoutePaths.ABOUT}>Om oss</LinkText>
        </NavItem>
        <NavItem onClick={() => setListIsOpen(false)}>
          {' '}
          <LinkText to={RoutePaths.CONTACT}>Kontakt oss</LinkText>
        </NavItem>
      </NavItems>
    </Nav>
  );
};

export default NavBar;
