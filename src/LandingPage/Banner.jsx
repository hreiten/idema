import React from 'react';
import styled from 'styled-components';
import forsidebilde2 from '../images/orangekjokken.jpg';

const Container = styled.div`
  border: 1px solid grey;
  max-height: 500px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Banner = () => {
  return (
    <Container>
      <Image src={forsidebilde2} alt="forsidebilde" width={3440} height={1174} />
    </Container>
  );
};

export default Banner;
