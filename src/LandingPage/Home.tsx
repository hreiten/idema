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

const Text = styled.div`
  position: absolute;
  top: 100px;;
  left: 20px;
  
  h2 {
    color: white;
    font-family: var(--sans-serif-font)
  }
`;

const Home = () => {
  const isSmallScreen = useMedia(`(max-width: ${ScreenSize.SM_MAX})`);
  return ( 
    isSmallScreen ? 
    <MobileContainer>
    <ResponsiveImage src={MobilImg} alt="" width={600} height={50}/>
    <Text><h2>Innredningsentrepenør<br/>- Alt av fast innrednig</h2></Text>
    <Lobs/>
    </MobileContainer> :
    <>
      <Banner />
      <RootContainer>
        <Lobs />
      </RootContainer>
    </>
  );
};

export default Home;
