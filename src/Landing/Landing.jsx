import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import { useMedia } from '../helpers/useMediaSize';
import { ScreenSize } from '../Menu/Header';
import BusinessAreas from './BusinessAreas';
import Content from './Content';

const Container = styled.div`
  border: 1px solid grey;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 10rem;
  @media (max-width: ${ScreenSize.SM_MAX}) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Text = styled.span`
  color: var(--text-color);
  justify-content: center;

  h2 {
    text-align: center;
  }

  h3 {
    text-align: center;
  }
`;

const LandingPage = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.LG_MIN})`);
  console.log('issmallscreen', isSmallScreen);
  return (
    <>
      <Banner />
      <Container>
        {isSmallScreen && (
          <Text>
            <h2>Innredningsentrepenør</h2>
            <h3>Leverer fast innredning hovedsaklig til helse, omsorgs og undervisningssektoren samt næringsbygg.</h3>
          </Text>
        )}
        <BusinessAreas />
      </Container>
      <Content />
    </>
  );
};

export default LandingPage;
