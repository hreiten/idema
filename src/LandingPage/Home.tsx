import React from 'react';
import styled from 'styled-components';
import { useMedia } from '../helpers/useMedia';
import { ScreenSize } from '../shared/ScreenSize';
import ResponsiveImage from '../components/ResponsiveImage';
import Banner from './Banner';
import MobilImg from '../images/lhl-resepsjon.jpg';
import Lobs from './Lobs';

const RootContainer = styled.div`
  width: 100vw;
  max-width: 2000px;
  margin: 0 auto;
  padding: 10px 10%;
  flex: 1;

  @media (max-width: ${ScreenSize.LG_MIN}) {
    padding: 10px 5%;
  }

  @media (max-width: ${ScreenSize.SM_MAX}) {
    padding: 10px 0;
  }
`;

const MobileContainer = styled.div`
  position: relative;
`;

const BannerText = styled.div`
  position: absolute;
  top: 120px;;
  left: 20px;
  
  h2 {
    color: white;
    font-family: 'Fira Sans Condensed', sans-serif;
    font-size: 2em;
    text-transform: uppercase;
  }
`;

const InfoText = styled.div`
  //background-color:var(--idema-color);
  padding: 1rem 5%;
  text-align: center;
  p{
    font-size: 1.5em;
    color: var(--idema-color)
  }
`;

const Text = styled.div`
  padding: 2rem 15rem 0;
  text-align: center;
 // background-color: whitesmoke;

  h2 {
    font-family: 'Libre Franklin', sans-serif;
    color: var(--idema-color);
    text-transform: uppercase;
    font-size: 2em;
    margin-bottom: 0;
    }

  h3 {
    color: var(--idema-color);
    @media (max-width: ${ScreenSize.SM_MAX}) {
      font-size: 25px;
      margin-bottom: 0;
    }
  }

  @media (max-width: ${ScreenSize.SM_MAX}) {
    padding: 1.5rem;
    background-color: white;
  } ;
`;

const Home = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.SM_MAX})`);
  return ( 
    isSmallScreen ? 
    <MobileContainer>
    <ResponsiveImage src={MobilImg} alt="" width={800} height={0}/>
    <BannerText><h2>Innredningsentrepenør</h2></BannerText>
    <Text> 
        <p>Vi leverer komplette innredningsløsninger til offentlig og privat sektor. </p>
      </Text>
    <Lobs/>
    </MobileContainer> :
    <>
      <Banner />
      <Text> 
        <h2>Alt av fast inventar</h2>
        <h3>Vi leverer komplette innredningsløsninger til offentlig og privat sektor. </h3>
      </Text>
      <RootContainer>
        <Lobs />
      </RootContainer>
      <InfoText>
        <p>For spørsmål informasjon eller råd, ta kontakt med oss!</p>
      </InfoText>
    </>
  );
};

export default Home;
