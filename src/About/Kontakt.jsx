import React from 'react';
import styled from 'styled-components';

import { ansattList } from './ansattList';
import { ScreenSize } from '../shared/ScreenSize';

const Container = styled.div`
  border: 1px solid grey;
  margin-top: 7rem;
  padding: 5rem;
`;

const Card = styled.div`
  max-width: 250px;
  width: 100vw;
  margin: auto;
  border: 1px solid grey;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;

  @media (min-width: ${ScreenSize.LG_MAX}) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
`;

const Kontakt = () => {
  return (
    <>
      <Container>
        <Grid>
          {ansattList.map((a, i) => (
            <Card key={i}>
              <p>{a.name}</p>
              <p>{a.title}</p>
              <p>{a.phone}</p>
              <p>{a.mail}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Kontakt;
