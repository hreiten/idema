import React from 'react';
import { Link } from 'react-router-dom';
import IdemaLogo from '../images/logo.jpg';
import styled from 'styled-components';
import { useMedia } from '../helpers/useMedia';
import { ScreenSize } from '../shared/ScreenSize';
import BurgerMenu from './BurgerMenu';

export const RoutePaths = {
  PRODUCTS: '/idema/produkter',
  PROJECTS: '/idema/projects',
  CONTACT: '/idema/kontakt',
  BUSINESS_AREAS: '/idema/forretningsområder',
  ABOUT: '/idema/om',
  LANDING: '/idema',
};

const menuItems = [
  { title: 'Hjem', path: RoutePaths.LANDING },
  { title: 'Produkter', path: RoutePaths.PRODUCTS },
  { title: 'Prosjekter', path: RoutePaths.PROJECTS },
  { title: 'Kontakt oss', path: RoutePaths.CONTACT },
  { title: 'Om oss', path: RoutePaths.ABOUT },
];

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1800px;
  margin: 0 auto;

  padding: 10px 10%;

  @media (max-width: ${ScreenSize.LG_MIN}) {
    padding: 10px 5%;
  }
`;

const MenuItemsWrapper = styled.div`
  display: flex;
`;

const MenuItem = styled(Link)`
  margin-right: 20px;
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
            <BurgerMenu menuItems={menuItems} />
          ) : (
            <>
              {menuItems.map((item) => (
                <MenuItem key={item.title} to={item.path}>
                  {item.title}
                </MenuItem>
              ))}
            </>
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
