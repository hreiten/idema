import React from 'react';
import Burger from './Burger';
import Menu from './Menu';
import { useOnClickOutside } from '../helpers/useOnClickOutside';

const BurgerMenu = ({ ref, open, setOpen }) => (
  <div ref={ref}>
    <Burger open={open} setOpen={setOpen} />
    <Menu open={open} setOpen={setOpen} />
  </div>
);

const useBurgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return {
    open,
    setOpen,
    BurgerMenu: () => <BurgerMenu ref={node} open={open} setOpen={setOpen} />,
  };
};

export default useBurgerMenu;
