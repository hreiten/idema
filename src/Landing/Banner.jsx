import React from 'react';
import styled from 'styled-components';

import { ScreenSize } from '../Menu/Header';
import forsidebilde2 from '../images/orangekjokken.jpg';
import ResponsiveImage from '../helpers/ResponsiveImage';

const Container = styled.div`
  border: 1px solid grey;
  max-height: 500px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Text = styled.span`
  position: absolute;
  margin-top: 12%;
  left: 10%;
  width: 30%;
  @media (max-width: ${ScreenSize.LG_MIN}) {
    visibility: hidden;
  }

  h1 {
    font-size: var(--font-size-xl);
    color: var(--text-color-light);
  }

  h3 {
    font-size: var(--font-size-s);
    color: var(--text-color-light);
  }
`;

const Banner = () => {
  return (
    <Container>
      <Image src={forsidebilde2} alt="forsidebilde" width={3440} height={1174} />
      <Text>
        <h1>Innredningsentrepenør</h1>
        <h3>Leverer fast innredning hovedsaklig til helse, omsorgs og undervisningssektoren samt næringsbygg.</h3>
      </Text>
    </Container>
  );
};

export default Banner;
