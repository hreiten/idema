import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import { ScreenSize } from '../shared//ScreenSize';
import BusinessAreas from './BusinessAreas';
import Content from './Content';

const Container = styled.div`
  border: 1px solid grey;
  margin: 5rem auto;
  justify-content: space-between;

  @media (max-width: ${ScreenSize.SM_MAX}) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Text = styled.div`
  color: var(--text-color);
  justify-content: center;
  background-color: whitesmoke;
  padding: 2rem;

  h2 {
    text-align: center;
  }

  h3 {
    text-align: center;
  }
`;
const Home = () => {
  //const isSmallScreen = useMedia(`(max-width: ${ScreenSize.LG_MIN})`);
  return (
    // <>
    //   <h1>Hei, Marie ♥️</h1>
    //   <span>Du er fin!</span>
    // </>
    <>
      <Banner />
      <Text>
        <h2>Innredningsentreprenør</h2>
        <h3>Leverer fast innredning hovedsaklig til helse, omsorgs og undervisningssektoren samt næringsbygg.</h3>
      </Text>
      <Container>
        <BusinessAreas />
      </Container>
      <Content />
    </>
  );
};

export default Home;
