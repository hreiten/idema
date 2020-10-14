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
  font-family: var(--sans-serif-font);
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

const Bygg = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.MD_MAX})`);

  return (
    <Container>
      <HeadingWrapper>
        <HeadingText>
          <Title>Næringsbygg</Title>
          <Description>Kulturbygg, hoteller og andre næringsbygg.</Description>
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
