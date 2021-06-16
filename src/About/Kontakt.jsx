import React from 'react';
import styled from 'styled-components';

import { ansattList } from './ansattList';
import { ScreenSize } from '../shared/ScreenSize';

const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem 5rem 5rem 5rem;

  @media (max-width: ${ScreenSize.SM_MAX}) {
    padding: 1rem;
    margin-top: 3rem;
  }
`;
const Header = styled.div`
  text-align: center;
  padding-bottom: 4rem;
  border-bottom: 2px solid var(--idema-color);
  @media (max-width: ${ScreenSize.SM_MAX}) {
    padding: 1rem;
  }

  h5 {
    font-family: 'Work Sans', sans-serif;
    font-size: 1em;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  padding-top: 3rem;
  @media (min-width: ${ScreenSize.LG_MAX}) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
`;

const Card = styled.div`
  max-width: 250px;

  p {
    line-height: 1.4rem;
    font-family: 'Work Sans', sans-serif;
  }

  @media (max-width: ${ScreenSize.SM_MAX}) {
    text-align: center;
    justify-self: center;
  }
`;

const Kontakt = () => {
  return (
    <Container>
      <Header>
        <h2>IDEMA AS</h2>
        <h5>67 51 69 00 {' '} post@idema.no</h5>
        <a href="https://www.google.com/maps/place/L%C3%B8xaveien+15,+1351+Rud/@59.9051976,10.486582,17z/data=!3m1!4b1!4m5!3m4!1s0x4641139e8c0911f5:0xdba03f821a0654e1!8m2!3d59.9051976!4d10.4887707">
          Løxaveien 15, 1351 Rud
        </a>
      </Header>
      <Grid>
        {ansattList.map((a, i) => (
          <Card key={i}>
            <h3>{a.name}</h3>
            <h5>{a.title}</h5>
            <p>{a.phone}</p>
            <p>{a.mail}</p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Kontakt;
