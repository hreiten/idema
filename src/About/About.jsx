import React from 'react';
import styled from 'styled-components';

import { ScreenSize } from '../shared/ScreenSize';
import ResponsiveImage from '../components/ResponsiveImage';
import omOss from '../images/omOss.jpg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
  @media (max-width: ${ScreenSize.MD_MIN}) {
    flex-direction: column;
    margin-top: 2rem;
  } ;
`;

const Column = styled.div`
  width: 50%;
  padding: 0 15px;

  @media (max-width: ${ScreenSize.MD_MIN}) {
    width: 100%;
    padding: 0 5px;
  } ;
`;

const TextWrapper = styled.div`
  align-self: center;
  max-width: 500px;
  @media (max-width: ${ScreenSize.SM_MIN}) {
    padding: 1px;
  }

  h1 {
    &:after {
      content: '';
      border-bottom: #f5c26b 0.2rem solid;
      position: relative;
      display: block;
      width: 4.25rem;
      margin: 0 !important;
    }
  }

  h5 {
    font-size: 20px;
  }
`;

const Areas = styled.span`
  display: flex-end;
  max-width: 300px;
  background-color: var(--idema-color);
`;

const ImageWrapper = styled.div`
  width: 50%;
  padding: 0 15px;
  align-self: center;
  margin-top: 2em;

  @media (max-width: ${ScreenSize.MD_MIN}) {
    width: 100%;
    padding: 0 5px;
  } ;
`;

const About = () => {
  return (
    <Container>
      <Column>
        <TextWrapper>
          <h1>OM OSS</h1>
         
          <p>
            IDEMA as er en av landets ledende leverandører av fast inventar til entreprenørbransjen. IDEMA er et firma med historie tilbake til 1985. 
            Omsetning var 145 MNOK i 2020 og firmaet er i fortsatt vekst. Det er 30 ansatte - 12
            ansatte i prosjekt og administrasjon, og 14 ansatte arbeidsledere og montører. Hovedkontoret ligger i nye og moderne lokaler på Rud i Bærum. 
            Bedriften leverer og monterer inventar til ulike typer bygg til offentlige og private kunder. 
            Produktspekteret omfatter kjøkken, bad, garderober, skranker, glassløsninger etc, sykehus-, laboratorie-, naturfag- og spesialinnredninger. 
            {' '}
          </p>{' '}
          <p>
            Vi har fokus på riktig kvalitet tilpasset kundens behov, og være en god samarbeidspartner i
            prosjektgjennomføring.
          </p>
        </TextWrapper>
      </Column>
      <ImageWrapper>
        <ResponsiveImage src={omOss} alt="" width={600} />
      </ImageWrapper>
    </Container>
  );
};

export default About;
