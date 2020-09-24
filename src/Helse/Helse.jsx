import React from 'react';
import styled from 'styled-components';

import ResponsiveImage from '../helpers/ResponsiveImage';
import sykehusbilde1 from '../images/lhl-resepsjon.jpg';
import sykehusbilde2 from '../images/ulriksdalSykehus.jpg';
import sykehusbilde3 from '../images/rom-lhl.jpg';
import sykehusbilde4 from '../images/Lhl-vindu.jpg';

import SykehusProdukter from './SykehusProdukter';

const Container = styled.div`
  border-bottom: 1px solid grey;
  width: 100%;
`;

const HeadingWrapper = styled.div`
  display: flex;
  background-color: var(--background-color-dark);
  justify-content: space-between;
`;

const HeadingText = styled.div`
  border: 1px solid gray;
  padding: 5rem 5rem;
`;

const Title = styled.span`
  border: 1px solid gray;
  display: block;
  padding: 2.5rem;
  font-size: var(--font-size-m);
  color: var(--text-color-light);
`;

const Description = styled.span`
  border: 1px solid gray;
  color: var(--text-color-light);
  font-size: var(--font-size-xs);
  padding: 5rem 2rem;
  max-width: 500px;
`;

const HeadingImage = styled.div`
  border: 1px solid gray;
`;

const Images = styled.div`
  border: 1px solid gray;
  display: flex;
`;

const Image = styled.img`
  max-width: 600px;
  max-height: 500px;
`;

const Helse = () => {
  return (
    <Container>
      <HeadingWrapper>
        <HeadingText>
          <Title>Sykehus</Title>
          <Description>
            Vi leverer innreding til sykehus, som feks isolasjonsrom venterom resepsjoner.... se produktlisten under
          </Description>
        </HeadingText>
        <HeadingImage>
          <ResponsiveImage src={sykehusbilde1} alt="Sykehusbilde 1" witdh={1200} height={800} />
        </HeadingImage>
      </HeadingWrapper>
      <SykehusProdukter />
      <Images>
        <Image src={sykehusbilde2} alt="Sykehusbilde 2"></Image>
        <Image src={sykehusbilde3} alt="Sykehusbilde 1"></Image>
        <Image src={sykehusbilde4} alt="Sykehusbilde 2"></Image>
      </Images>
    </Container>
  );
};

export default Helse;
