import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '../shared/ScreenSize';
import forsidebilde2 from '../images/orangekjokken.jpg';

const Container = styled.div`
  border: 1px solid grey;
  max-height: 800px;
  position: relative;
  display: inline-block;
  margin-bottom: 150px;
  @media (max-width: ${ScreenSize.MD_MAX}) {
    margin-bottom: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Text = styled.div`
  position: absolute;
  z-index: 20;
  margin: 0 auto;
  padding: 2rem;
  left: 0;
  top: 5%;
  background: rgba(2, 24, 97, 0.1);
  color: #fff;
  width: 60%;

  h1 {
    font-size: 4em;
    line-height: 1.15;
    font-family: var(--sans-serif-font);
    text-shadow: (255, 255, 255) 0px 0px 32px;
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

  @media (max-width: ${ScreenSize.SM_MAX}) {
    visibility: hidden;
  }
`;

const Text2 = styled.div`
  position: absolute;
  z-index: 20;
  margin: 0 auto;
  padding: 3rem;
  left: 0;
  right: 0;
  top: 75%;
  background: rgba(2, 24, 97, 0.9);
  color: #fff;
  width: 60%;
  text-align: center;

  h2 {
    font-size: 3em;
    font-family: var(--sans-serif-font);
  }

  h3 {
    font-size: 30px;
    font-weight: 300;
    font-family: var(--sans-serif-font);
  }
`;

const Banner = () => {
  return (
    <Container>
      <Image src={forsidebilde2} alt="forsidebilde" width={3440} height={1174} />
      <Text>
        <h1>Innredningsentreprenør</h1>
        <h2>- Alt av fast inventar</h2>
      </Text>
      {/* <Text2>
        <h1>Innredningsentreprenør</h1>
        <h2>- Alt av fast inventar</h2>
      </Text2> */}
    </Container>
  );
};

export default Banner;
