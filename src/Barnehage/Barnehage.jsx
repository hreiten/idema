import React from 'react';
import styled from 'styled-components';

import { useMedia } from '../helpers/useMedia';
import { ScreenSize } from '../shared/ScreenSize';
import ResponsiveImage from '../components/ResponsiveImage';
import sykehusbilde1 from '../images/lhl-resepsjon.jpg';

import Barnehageprodukter from './Barnehageprodukter';
import Barnehageprosjekter from './Barnehageprosjekter';

const Container = styled.div`
  border-bottom: 1px solid grey;
  width: 100%;
  height: auto;
`;

const HeadingWrapper = styled.div`
  display: flex;
  background-color: var(--idema-color);
  justify-content: space-between;
`;

const HeadingText = styled.div`
  padding: 1rem 1rem;
  color: white;
  width: 50%;
  @media (max-width: ${ScreenSize.MD_MAX}) {
    width: 100%;
  } ;
`;

const Title = styled.h2`
  display: block;
  padding: 2.5rem;
  color: white;
  font-family: var(--sans-serif-font);
`;

const Description = styled.p`
  color: var(--text-color-light);
  padding: 2rem;
`;

const HeadingImage = styled.div`
  width: 50%;
`;

const Helse = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.MD_MAX})`);

  return (
    <Container>
      <HeadingWrapper>
        <HeadingText>
          <Title>Barnehage</Title>
          <Description>
            Vi leverer alt av fast innreding til barnehager som feks lekerom, garderober ... se produktlisten under
          </Description>
        </HeadingText>
        {!isSmallScreen && (
          <HeadingImage>
            <ResponsiveImage src={sykehusbilde1} alt="Sykehusbilde 1" witdh={800} height={400} />
          </HeadingImage>
        )}
      </HeadingWrapper>
      <Barnehageprodukter />
      <Barnehageprosjekter />
    </Container>
  );
};

export default Helse;
