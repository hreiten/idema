import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '../shared/ScreenSize';
import { useMedia } from '../helpers/useMedia';
import forsidebilde2 from '../images/orangekjokken.jpg';

const Container = styled.div`
  max-height: 800px;
  position: relative;
  display: inline-block;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Text = styled.div`
  position: absolute;
  margin: 0 auto;
  padding: 2rem;
  left: 0;
  top: 5%;
  color: #fff;
  width: 60%;

  h1 {
    font-size: 4em;
    line-height: 1.15;
    font-family: var(--sans-serif-font);
  }

  h2 {
    padding-left: 2rem;
    font-size: 2em;
    font-family: var(--sans-serif-font);
    text-transform: uppercase;
  }

  @media (max-width: ${ScreenSize.LG_MAX}) {
    top: 17%;
    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 1.7em;
      padding-left: 0.5rem;
    }
  }
`;

const MobileText = styled.div`
  position: absolute;
  margin: 0 auto;
  padding: 0.5rem;
  left: 0;
  right: 0;
  top: 60%;
  background: rgba(2, 24, 97, 0.9);
  color: #fff;
  width: 75%;
  text-align: center;

  h1 {
    font-size: 1.5em;
    font-family: var(--sans-serif-font);
  }

  h2 {
    font-size: 1.2em;
    font-weight: 300;
    font-family: var(--sans-serif-font);
    text-transform: uppercase;
  }
`;

const Banner = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.SM_MAX})`);
  return (
    <Container>
      <Image src={forsidebilde2} alt="forsidebilde" width={3440} height={1174} />
      {isSmallScreen ? (
        <MobileText>
          <h1>Innredningsentreprenør</h1>
          <h2>- Alt av fast inventar</h2>
        </MobileText>
      ) : (
        <Text>
          <h1>Innredningsentreprenør</h1>
          <h2>- Alt av fast inventar</h2>
        </Text>
      )}
    </Container>
  );
};

export default Banner;
