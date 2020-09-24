import React from 'react';
import { Link } from 'react-router-dom';
import IdemaLogo from '../images/logo.jpg';
import styled from 'styled-components';
import { useMedia } from '../helpers/useMedia';
import useBurgerMenu from './useBurgerMenu';
import { ScreenSize } from '../shared/ScreenSize';
import { LocalGasStation } from '@material-ui/icons';

export const RoutePaths = {
  PRODUCTS: '/produkter',
  PROJECTS: '/projects',
  CONTACT: '/kontakt',
  BUSINESS_AREAS: '/forretningsområder',
  ABOUT: '/om',
  LANDING: '/',
};

const sections = [
  { title: 'Hjem', url: RoutePaths.LANDING },
  { title: 'Produkter', url: RoutePaths.PRODUCTS },
  { title: 'Prosjekter', url: RoutePaths.PROJECTS },
  { title: 'Kontakt oss', url: RoutePaths.CONTACT },
  { title: 'Om oss', url: RoutePaths.ABOUT },
];

const Container = styled.div`
  border-bottom: 1px solid grey;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const MenuItemsWrapper = styled.div`
  display: flex;
`;

const MenuItem = styled(Link)`
  margin-right: 15px;
`;

const Logo = styled(Link)`
  width: 200px;

  @media (max-width: ${ScreenSize.SM_MAX}) {
    width: 150px;
  }
`;

export default function Header() {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.SM_MAX})`);
  const { open, BurgerMenu } = useBurgerMenu();

  return (
    <>
      <Container>
        <MenuItemsWrapper>
          {isSmallScreen ? (
            <BurgerMenu />
          ) : (
            sections.map((section) => (
              <MenuItem key={section.title} to={section.url}>
                {section.title}
              </MenuItem>
            ))
          )}
        </MenuItemsWrapper>
        <Logo to={RoutePaths.LANDING}>
          <img src={IdemaLogo} alt="IdemaLogo2" style={{ width: '100%' }} />
        </Logo>
      </Container>
    </>
  );
}
