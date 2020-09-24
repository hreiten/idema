import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '../Menu/Header';

import { Produktliste } from './produktliste';

const Container = styled.div`
  border-bottom: 1px solid grey;
  margin: 2rem 10rem 5rem;
  padding-bottom: 4rem;
`;

const Title = styled.div`
  padding: 2rem;

  h2 {
    font-size: var(--font-size-l);
    color: var(--title-color);
  }
`;

const Bullet = styled.span`
  display: inline-block;
  margin: 0 2px;
  transform: scale(0.8);
  color: var(--text-color);
`;

const Produkter = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;

  @media (min-width: ${ScreenSize.LG_MIN}) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
`;

const ListItem = styled.span`
  font-size: var(--font-size-xs);
  color: var(--text-color);
`;

const SykehusProdukter = () => {
  const bull = <Bullet>•</Bullet>;

  return (
    <Container>
      <Title>
        <h2>Produktområder</h2>
      </Title>
      <ProductGrid>
        {Produktliste.map((p, i) => (
          <ListItem key={i}>{p.title}</ListItem>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default SykehusProdukter;
