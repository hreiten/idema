import React from 'react';
import styled from 'styled-components';

import { useMedia } from '../helpers/useMedia';
import { ScreenSize } from '../shared/ScreenSize';
import skole1 from '../images/skapValle.jpg';
import skole2 from '../images/skole2.jpg';
import skole3 from '../images/skole3.jpg';
import skole4 from '../images/skole4.jpg';

import Skoleprodukter from './Skoleprodukter';
import Skoleprosjekter from './Skoleprosjekter';

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
  padding: 2.5rem 2.5rem 0rem;
  
  font-size: 4em;
  line-height: 1.5em;

  @media (max-width: ${ScreenSize.LG_MID}) {
    padding: 0;
    font-size: 2.5em;
    line-height: 1.5em;
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
  padding: 0 2.5rem;
  @media (max-width: ${ScreenSize.LG_MID}) {
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

const Skole = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.MD_MIN})`);

  return (
    <Container>
      <HeadingWrapper>
        <HeadingText>
          <Title>Undervisning</Title>
          <Description>All fast innredning til grunnskole, videregående og universitet.</Description>
        </HeadingText>
        {!isSmallScreen && (
          <HeadingImages>
            <Image src={skole1} alt="Sykehusbilde 1" />
            <Image src={skole2} alt="Sykehusbilde 1" />
            <Image src={skole3} alt="Sykehusbilde 1" />
            <Image src={skole4} alt="Sykehusbilde 1" />
          </HeadingImages>
        )}
      </HeadingWrapper>
      <Skoleprodukter />
      <Skoleprosjekter />
    </Container>
  );
};

export default Skole;
