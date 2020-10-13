import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '../shared/ScreenSize';
import { Produktliste } from './produktliste';

const Container = styled.div`
  border-bottom: 1px solid grey;
  margin: 2rem 2rem 5rem;
  padding-bottom: 4rem;

  h2 {
    color: var(--idema-color);
    font-family: var(--sans-serif-font);
  }
`;

const Grid = styled.div`
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
  return (
    <Container>
      <h2>Produktområder</h2>
      <Grid>
        {Produktliste.map((p, i) => (
          <ListItem key={i}>{p.title}</ListItem>
        ))}
      </Grid>
    </Container>
  );
};

export default SykehusProdukter;
