import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Path = (props: any) => (
  <motion.path fill="transparent" strokeWidth="2" stroke="var(--idema-color)" strokeLinecap="round" {...props} />
);

const Burgers = styled.button`
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;

  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  position: relative;
`;

export const BurgerButton = ({ toggle }: { toggle: () => void }) => (
  <Burgers onClick={toggle}>
    <svg width="100%" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </Burgers>
);
