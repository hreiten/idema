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
    font-family: var(--sans-serif-font);
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
            IDEMA AS er innredningsentrerprenør og totalleverandør av fast innredning til offentlig og privat sektor.{' '}
          </p>
          <Areas>
            <p> Våre største og viktigste forretningsområder er: </p>
            <p> Sykehus, Sykehjem, Skoler, Barnehager, Kulturinstitusjoner, Næringsbygg og Hoteller</p>
          </Areas>
          <p>
            IDEMA A/S ble etablert i Trondheim i 1985 og har i dag hovedkontor på Haslum, I Bærum. Idema består av 13
            ansatte i prosjekt og administrasjon, og 12 ansatte arbeidsledere og montører.{' '}
          </p>{' '}
          <p>
            Vi har fokus på riktig kvalitet tilpasset kundens behov og være en god samarbeidspartner i
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
