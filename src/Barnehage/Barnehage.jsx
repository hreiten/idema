import React from 'react';
import styled from 'styled-components';

import { useMedia } from '../helpers/useMedia';
import { ScreenSize } from '../shared/ScreenSize';
import barnehagebilde1 from '../images/barnehage1.jpg';
import barnehagebilde2 from '../images/barnehage2.jpg';
import barnehagebilde3 from '../images/barnehage3.jpg';
import barnehagebilde4 from '../images/barnehage4.jpg';

import Barnehageprodukter from './Barnehageprodukter';
import Barnehageprosjekter from './Barnehageprosjekter';

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeadingText = styled.div`
  padding: 1rem 1rem;
  color: var(--idema-color);
  width: 40%;
  @media (max-width: ${ScreenSize.MD_MIN}) {
    width: 100%;
  } ;
`;

const Title = styled.h1`
  display: block;
  padding: 2.5rem 1rem 0rem;
  font-family: var(--sans-serif-font);

  &:after {
    content: '';
    border-bottom: #f5c26b 0.2rem solid;
    position: relative;
    display: block;
    width: 4.25rem;
    margin: 0 !important;
  }
`;

const Description = styled.p`
  padding: 0 1rem;
`;

const HeadingImages = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  padding: 1rem;
`;

const Barnehage = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.MD_MAX})`);

  return (
    <Container>
      <HeadingWrapper>
        <HeadingText>
          <Title>Barnehage</Title>
          <Description>Inventar til barnehager</Description>
        </HeadingText>
        {!isSmallScreen && (
          <HeadingImages>
            <Image src={barnehagebilde1} alt="Sykehusbilde 1" />
            <Image src={barnehagebilde2} alt="Sykehusbilde 1" />
            <Image src={barnehagebilde3} alt="Sykehusbilde 2" />
            <Image src={barnehagebilde4} alt="Sykehusbilde 3" />
          </HeadingImages>
        )}
      </HeadingWrapper>
      <Barnehageprodukter />
      <Barnehageprosjekter />
    </Container>
  );
};

export default Barnehage;
