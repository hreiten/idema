import React from 'react';
import styled from 'styled-components';

export const StyledBurger = styled.button`
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? 'black' : 'blue')};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        console.log(open);
        setOpen(!open);
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
