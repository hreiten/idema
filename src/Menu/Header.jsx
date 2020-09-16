import React from 'react';
import { Link } from 'react-router-dom';
import IdemaLogo from '../images/logo.jpg';
import styled from 'styled-components';
import { useMedia } from '../helpers/useMediaSize';
import useBurgerMenu from './useBurgerMenu';

export const ScreenSize = {
  XS_MIN: '340px',
  XS_MAX: '480px',
  SM_MIN: '481px',
  SM_MAX: '768px',
  MD_MIN: '769px',
  MD_MAX: '992px',
  LG_MIN: '993px',
  LG_MID: '1150px',
  LG_MAX: '1499px',
  XL_MIN: '1500px',
  XL_MAX: '1849px',
};

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

export default function Header() {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.SM_MAX})`);
  const { open, BurgerMenu } = useBurgerMenu();

  return (
    <>
      <span style={{ color: 'red', fontSize: '30px' }}>{open}</span>
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
        <Link to={RoutePaths.LANDING}>
          <img src={IdemaLogo} alt="IdemaLogo2" height="65" width="160" />
        </Link>
      </Container>
    </>
  );
}
