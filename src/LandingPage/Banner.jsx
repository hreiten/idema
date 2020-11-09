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
  top: 18%;
  color: #fff;
  width: 60%;

  h1 {
    font-family: 'Libre Franklin', sans-serif;
    padding-left: 2.5rem;
    text-transform: uppercase;
    font-size: 3em;
  }

  @media (max-width: ${ScreenSize.LG_MAX}) {
    top: 15%;
    h1 {
      font-size: 2.5em;
    }
  }
`;

const Banner = () => {
  return (
    <Container>
      <Image src={forsidebilde2} alt="forsidebilde" width={3440} height={1174} />
      <Text>
        <h1>Innredningsentreprenør</h1>
      </Text>
    </Container>
  );
};

export default Banner;
