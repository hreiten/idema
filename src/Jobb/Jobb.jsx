import React from 'react';
import styled from 'styled-components';

import { ScreenSize } from '../shared/ScreenSize';
import ResponsiveImage from '../components/ResponsiveImage';
import folk from '../images/folk.jpg'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
  height: auto;
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

const Box = styled.div`
  //position: relative;
  //background-color: #f2eeed;
  margin: auto;
`;

const Box2 = styled.div`
  padding-bottom: 2rem;
  display: flex;
  @media (max-width: ${ScreenSize.MD_MIN}) {
    flex-direction: column;
    margin-top: 2rem;
  };  
`;

const Box3 = styled.div`
  padding-top: 2rem; 
`;

const Ul = styled.ul`
  list-style-type: circle;
  padding: 0 1rem 0 2rem;
`;

const Li = styled.li`
  
`;

const Jobb = () => {
  return (
    <Container>
      {/* <Column>
        <ResponsiveImage src={folk} alt="" width={600} />
      </Column> */}
    <Box>  
      <h4> Vi ser etter nye folk!</h4>
        <p>IDEMA as er en av landets ledende leverandører av fast inventar til entreprenørbransjen. IDEMA er et firma med historie tilbake til 1985. Omsetning var 145 MNOK i 2020 og firmaet er i fortsatt vekst. Det er 30 ansatte og bedriften har hovedkontor i nye og moderne lokaler på Rud i Bærum. 
          Bedriften leverer og monterer inventar til ulike typer bygg til offentlige og private kunder. Produktspekteret omfatter kjøkken, bad, garderober, skranker, glassløsninger etc, sykehus-, laboratorie-, naturfag- og spesialinnredninger.
          IDEMA gjennomfører prosjekter fra Kristiansand i sør til Hammerfest i nord og søker derfor etter dyktige innredningsmontører fra hele Norge.
        </p>
        
        <h2>Ledige stillinger:</h2>
       
        <h2>Innredningsmontør</h2>
        <Box2>
          <div>
            <h3>Vi tilbyr:</h3>
            <Ul>
              <Li>En spennende og variert stilling i et selskap i vekst.</Li>
              <Li>Flat organisasjon og korte beslutningsveier.</Li>
              <Li>Rent, tørt, ryddig og variert montasjearbeid.</Li>
              <Li>Bruk av moderne verktøy fra Festool og andre ledende leverandører.</Li>
              <Li>God opplæring og oppfølging med ryddige arbeidsforhold.</Li>
              <Li>Godt arbeidsmiljø i samarbeid med ledelse og øvrige montører.</Li>
              <Li>Mulighet til løse utfordringer relatert til arbeidet.</Li>
              <Li>Utviklingsmuligheter for engasjerte og dyktige medarbeidere.</Li>
              <Li>Konkurransedyktige betingelser.</Li>
              <Li>Bilordning.</Li>
              <Li>Snarlig oppstart.</Li>
            </Ul>
          </div>
          <div>
            <h3>Ønskede kvalifikasjoner/egenskaper:</h3>
            <Ul>
              <Li>Relevant erfaring fra bygg, tømrer, møbelsnekker eller annen montasje.</Li>
              <Li>Førerkort kl. B.</Li>
              <Li>God kunnskap i norsk eller engelsk, skriftlig og muntlig.</Li>
              <Li>Serviceinnstilt overfor kunder.</Li>
              <Li>Fleksibel og samarbeidsvillig. </Li>
              <Li>Opptrer som profesjonell overfor kunder og samarbeidspartnere.</Li>
              <Li>En strukturert arbeidsform som gir gode resultater.</Li>
              <Li>Effektiv og nøyaktig.</Li>
              <Li>Evne til å kunne jobbe selvstendig.</Li>
            </Ul>
          </div>
        </Box2>
        
        <Box3>
        <p>Har du spørsmål, eller vil du søke stillingen – send oss en epost til: </p>
        <p><bold>mette.fundingsrud@idema.no</bold></p>
        <p>Vi intervjuer og ansetter fortløpende. </p>
        </Box3>
      </Box>
    </Container>
  );
}

export default Jobb;