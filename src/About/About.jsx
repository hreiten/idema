import React from 'react';
import styled from 'styled-components';

import { ScreenSize } from '../shared/ScreenSize';
import ResponsiveImage from '../components/ResponsiveImage';
import omOss from '../images/omOss.jpg';

const Layout = styled.div`
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
  margin-right: auto;
  width: 50%;
  padding: 0 15px;
  flex-direction: column;

  @media (max-width: ${ScreenSize.MD_MIN}) {
    width: 100%;
    padding: 0 5px;
  } ;
`;

const TextWrapper = styled.div`
  align-self: center;
  padding: 5rem;
  @media (max-width: ${ScreenSize.SM_MIN}) {
    padding: 1px;
  } ;
`;

const Areas = styled.ul`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid grey;

  li {
    letter-spacing: 0.7px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  padding: 0 15px;
  flex-direction: column;
  align-self: center;
  margin-top: 2em;

  @media (max-width: ${ScreenSize.MD_MIN}) {
    width: 100%;
  } ;
`;

const About = () => {
  return (
    <Layout>
      <Column>
        <TextWrapper>
          <h1>Om oss</h1>
          <div>
            <p>
              {' '}
              IDEMA AS er innredningsentrerprenør og totalleverandør av fast innredning til offentlig og privat sektor.{' '}
            </p>
            <hr />
            <p> Våre største og viktigste forretningsområder er: </p>
            <Areas>
              <li>Sykehus</li>
              <li>Sykehjem</li>
              <li>Skoler</li>
              <li>Barnehager</li>
              <li>Kulturinstitusjoner</li>
              <li>Næringsbygg</li>
              <li>Hoteller</li>
            </Areas>
            <p>
              IDEMA A/S ble etablert i Trondheim i 1985 og har i dag hovedkontor på Haslum, I Bærum. Idema består av 13
              ansatte i prosjekt og administrasjon, og 12 ansatte arbeidsledere og montører.{' '}
            </p>{' '}
            <p>
              Vi har fokus på riktig kvalitet tilpasset kundens behov og være en god samarbeidspartner i
              prosjektgjennomføring.
            </p>
          </div>
        </TextWrapper>
      </Column>
      <ImageWrapper>
        <ResponsiveImage src={omOss} alt="" width={600} />
      </ImageWrapper>
    </Layout>
  );
};

export default About;
