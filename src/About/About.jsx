import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '../shared/ScreenSize';
import ResponsiveImage from '../components/ResponsiveImage';

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  margin-bottom: 5rem;
  width: 100%;
  @media (max-width: ${ScreenSize.SM_MIN}) {
    flex-direction: column;
  } ;
`;

const Column = styled.div`
  border: 1px solid grey;
  margin-right: auto;
  width: 50%;
  padding: 0 15px;
  flex-direction: column;

  @media (max-width: ${ScreenSize.SM_MIN}) {
    width: 100%;
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
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    text-transform: uppercase;
    letter-spacing: 0.7px;
    padding: 1px;
  }
`;

const ImageWrapper = styled.div`
  border: 1px solid grey;
  width: 50%;
  padding: 0 15px;
  flex-direction: column;
  vertical-align: center;

  @media (max-width: ${ScreenSize.SM_MIN}) {
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
              ansatte i prosjekt og administrasjon, og 12 ansatte arbeidsledere og montører. Vi har fokus på riktig
              kvalitet tilpasset kundens behov og være en god samarbeidspartner i prosjektgjennomføring.
            </p>
          </div>
        </TextWrapper>
      </Column>
      <ImageWrapper>
        <ResponsiveImage
          src="https://images.unsplash.com/photo-1597412149254-7b67336fa324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
      </ImageWrapper>
    </Layout>
  );
};

export default About;
