import React from 'react';
import { Link } from 'react-router-dom';
import IdemaLogo from '../images/IDEMALOGO.jpg';
import styled from 'styled-components';
import { useMedia } from '../helpers/useMedia';
import { ScreenSize } from '../shared/ScreenSize';
import BurgerMenu from './BurgerMenu';
import NavBar from './NavBar';

export const RoutePaths = {
  PRODUCTS: '/produkter',
  PROJECTS: '/prosjekter',
  CONTACT: '/kontakt',
  BUSINESS_AREAS: '/forretningsområder',
  ABOUT: '/om',
  LANDING: '/',
  HELSE: '/helse',
  SKOLE: '/undervisning',
  BARNEHAGE: '/barnehager',
  BYGG: '/naeringsbygg',
};

const menuItems = [
  { title: 'Hjem', path: RoutePaths.LANDING },
  { title: 'Om oss', path: RoutePaths.ABOUT },
  { title: 'Kontakt oss', path: RoutePaths.CONTACT },
];

const dropdownItems = [
  { title: 'Helse og omsorg', path: RoutePaths.HELSE },
  { title: 'Undervisning', path: RoutePaths.SKOLE },
  { title: 'Barnehage', path: RoutePaths.BARNEHAGE },
  { title: 'Næringsbygg', path: RoutePaths.BYGG },
];

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 2500px;
  margin: 0 auto;
  padding: 30px 5% 10px 5%;

  @media (max-width: ${ScreenSize.LG_MIN}) {
    padding: 10px 10%;
  }
`;

const MenuItemsWrapper = styled.div`
  display: flex;
`;

const Logo = styled(Link)`
  width: 30%;
  max-width: 150px;
  min-width: 100px;
`;

const Header = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.SM_MAX})`);

  return (
    <div style={{ borderBottom: '1px solid lightgrey' }}>
      <Container>
        <MenuItemsWrapper>
          {isSmallScreen ? (
            <BurgerMenu menuItems={[...menuItems, ...dropdownItems]} />
          ) : (
            <NavBar dropdownMenuItems={dropdownItems} menuItems={menuItems} />
          )}
        </MenuItemsWrapper>
        <Logo to={RoutePaths.LANDING}>
          <img src={IdemaLogo} alt="IdemaLogo2" style={{ width: '100%' }} />
        </Logo>
      </Container>
    </div>
  );
};

export default Header;
