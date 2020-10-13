import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '../shared/ScreenSize';
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
  left: 7%;
  top: 5%;
  color: #fff;
  width: 60%;

  h2 {
    font-size: 4em;
    line-height: 1;
    font-family: var(--sans-serif-font);
  }

  h2 {
    padding-left: 2rem;
    font-size: 2em;
    font-family: var(--sans-serif-font);
  }
  @media (max-width: ${ScreenSize.MD_MIN}) {
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

const Banner = () => {
  return (
    <Container>
      <Image src={forsidebilde2} alt="forsidebilde" width={3440} height={1174} />
      <Text>
        <h2>Innredningsentreprenør</h2>
        <h2>- Alt av fast inventar</h2>
      </Text>
      )
    </Container>
  );
};

export default Banner;
