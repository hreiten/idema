import React from 'react';
import styled from 'styled-components';

import { useMedia } from '../helpers/useMedia';
import { ScreenSize } from '../shared/ScreenSize';

import sykehusbilde1 from '../images/sykehus1.jpg';
import sykehusbilde2 from '../images/sykehus2.jpg';
import sykehusbilde3 from '../images/sykehus4.jpg';
import sykehusbilde6 from '../images/sykehus6.jpg';

import SykehusProdukter from './SykehusProdukter';
import SykehusProsjekter from './SykehusProsjekter';

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
  font-size: 4.5em;
  line-height: 1.5em;
 
  @media (max-width: ${ScreenSize.MD_MIN}) {
    width: 100%;
    padding: 0rem;
  } ;

  &:after {
    content: '';
    border-bottom: #ffa500 0.2rem solid;
    position: relative;
    display: block;
    width: 4.25rem;
    margin: 0 !important;
  }
`;

const Description = styled.p`
  padding: 0 1rem;
  @media (max-width: ${ScreenSize.MD_MIN}) {
    padding: 0;
  } ;
`;

const HeadingImages = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  padding-right: 3rem; 
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  align-self: flex-start; 
  padding: 1rem;
`;

const Helse = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.MD_MIN})`);

  return (
    <Container>
      <HeadingWrapper>
        <HeadingText>
          <Title>Helse og omsorg</Title>
          <Description>All fast innredninig til sykehus og sykehjem.</Description>
        </HeadingText>
        {!isSmallScreen && (
          <HeadingImages>
            <Image src={sykehusbilde3} alt="Sykehusbilde 1" />
            <Image src={sykehusbilde6} alt="Sykehusbilde 1" />
            <Image src={sykehusbilde1} alt="Sykehusbilde 2" />
            <Image src={sykehusbilde2} alt="Sykehusbilde 3" />
          </HeadingImages>
        )}
      </HeadingWrapper>
      <SykehusProdukter />
      <SykehusProsjekter />
    </Container>
  );
};

export default Helse;
