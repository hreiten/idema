import React from 'react';
import { Link } from 'react-router-dom';
import IdemaLogo from '../images/logo.jpg';
import styled from 'styled-components';
import { useMedia } from '../helpers/useMedia';
import { ScreenSize } from '../shared/ScreenSize';
import Burger from './BurgerMenu';

export const RoutePaths = {
  PRODUCTS: '/produkter',
  PROJECTS: '/projects',
  CONTACT: '/kontakt',
  BUSINESS_AREAS: '/forretningsområder',
  ABOUT: '/om',
  LANDING: '/',
};

const menuItems = [
  { title: 'Hjem', path: RoutePaths.LANDING },
  { title: 'Produkter', path: RoutePaths.PRODUCTS },
  { title: 'Prosjekter', path: RoutePaths.PROJECTS },
  { title: 'Kontakt oss', path: RoutePaths.CONTACT },
  { title: 'Om oss', path: RoutePaths.ABOUT },
];

const Container = styled.div`
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  max-width: 1800px;
  margin: 0 auto;
  @media (min-width: ${ScreenSize.LG_MAX}) {
    padding: 0 10%;
  }
`;

const MenuItemsWrapper = styled.div`
  display: flex;
`;

const MenuItem = styled(Link)`
  margin-right: 15px;

  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Logo = styled(Link)`
  width: 30%;
  max-width: 150px;
  min-width: 100px;
`;

const Header = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.SM_MAX})`);

  const menuContents = isSmallScreen ? (
    <Burger menuItems={menuItems} />
  ) : (
    <>
      {menuItems.map((item) => (
        <MenuItem key={item.title} to={item.path}>
          {item.title}
        </MenuItem>
      ))}
    </>
  );

  return (
    <Container>
      <MenuItemsWrapper>{menuContents}</MenuItemsWrapper>
      <Logo to={RoutePaths.LANDING}>
        <img src={IdemaLogo} alt="IdemaLogo2" style={{ width: '100%' }} />
      </Logo>
    </Container>
  );
};

export default Header;
