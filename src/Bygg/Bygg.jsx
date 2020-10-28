import React from 'react';
import styled from 'styled-components';

import { useMedia } from '../helpers/useMedia';
import { ScreenSize } from '../shared/ScreenSize';
import nbygg1 from '../images/nbygg1.jpg';
import nbygg2 from '../images/nbygg2.jpg';
import nbygg3 from '../images/nbygg3.jpg';
import nbygg4 from '../images/nbygg5.jpg';

import Byggrodukter from './Byggprodukter';
import Byggprosjekter from './Byggprosjekter';

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
  font-size: 4em;
  line-height: 1.5em;

  @media (max-width: ${ScreenSize.LG_MID}) {
    padding: 0;
    font-size: 2.5em;
    line-height: 1.5em;
  } ;

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

const Bygg = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.MD_MAX})`);

  return (
    <Container>
      <HeadingWrapper>
        <HeadingText>
          <Title>Næringsbygg</Title>
          <Description>All fast innrednig til kontor og kulturbygg, spesial og standard.</Description>
        </HeadingText>
        {!isSmallScreen && (
          <HeadingImages>
            <Image src={nbygg4} alt="Sykehusbilde 1" />
            <Image src={nbygg3} alt="Sykehusbilde 1" />
            <Image src={nbygg1} alt="Sykehusbilde 2" />
            <Image src={nbygg2} alt="Sykehusbilde 3" />
          </HeadingImages>
        )}
      </HeadingWrapper>
      <Byggrodukter />
      <Byggprosjekter />
    </Container>
  );
};

export default Bygg;
