import React from 'react';
import styled from 'styled-components';

import { ansattList } from './ansattList';
import { ScreenSize } from '../shared/ScreenSize';
import ResponsiveImage from '../components/ResponsiveImage';
import kontaktOss from '../images/kontaktOss.png';

const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem 5rem 5rem 5rem;

  @media (max-width: ${ScreenSize.SM_MAX}) {
    padding: 1rem;
    margin-top: 3rem;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  @media (max-width: ${ScreenSize.SM_MAX}) {
    padding: 0;
  }
`;

const Title = styled.h2`
  padding-left: 2rem;
  padding-bottom: 2rem;
  font-family: var(--sans-serif-font);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;

  @media (min-width: ${ScreenSize.LG_MAX}) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
`;

const Card = styled.div`
  max-width: 250px;
  width: 100vw;
  margin: auto;
  border-bottom: 1px solid grey;

  p {
    line-height: 1.4rem;
  }
`;

const Kontakt = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>IDEMA AS</Title>
          <ResponsiveImage src={kontaktOss} alt="" width={200} />
        </Header>
        <Grid>
          {ansattList.map((a, i) => (
            <Card key={i}>
              <h3>{a.name ? a.name : ' | '}</h3>
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
