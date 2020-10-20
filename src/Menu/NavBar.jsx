import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RoutePaths } from './Header';

const Nav = styled.ul`
  justify-content: flex-end;
  text-transform: uppercase;
`;

const NavItem = styled(Link)`
  padding: 10px 16px;
  position: relative;

  .active {
    border-color: grey;
    border-width: 2px;
    width: 4.5px;
  }
`;

const Item = styled.span`
  padding: 10px 16px;
  position: relative;
`;

const DropdownList = styled.ul`
  position: absolute;
  min-width: 300px;
  min-height: fit-content;
  overflow: hidden;
  background-color: white;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  z-index: 30;
  left: 10px;
`;

const DropdownListItem = styled(Link)`
  padding: 15px 10px;
  margin: 10px 0;
  color: inherit;
`;

const Dropdown = ({ close, items }) => {
  return (
    <DropdownList>
      {items.map(({ path, title }) => (
        <DropdownListItem onClick={close} key={title} to={path}>
          {title}
        </DropdownListItem>
      ))}
    </DropdownList>
  );
};

const NavBar = ({ dropdownMenuItems, menuItems }) => {
  const [listIsOpen, setListIsOpen] = React.useState(false);

  return (
    <Nav>
      <NavItem to={RoutePaths.LANDING} replace >Hjem</NavItem>
      <Item onMouseOver={() => setListIsOpen(true)} onMouseLeave={() => setListIsOpen(false)}>
        Forretningsområder
        {listIsOpen && (
          <Dropdown
            onMouseLeave={() => setListIsOpen(false)}
            close={() => setListIsOpen(false)}
            items={dropdownMenuItems}
          />
        )}
      </Item>
      <NavItem to={RoutePaths.ABOUT} replace>Om oss</NavItem>
      <NavItem to={RoutePaths.CONTACT} replace>Kontakt Oss</NavItem>
    </Nav>
  );
};

export default NavBar;
