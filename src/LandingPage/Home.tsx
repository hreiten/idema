import React from 'react';
import styled from 'styled-components';

import { ScreenSize } from '../shared/ScreenSize';
import Banner from './Banner';
import Lobs from './Lobs';

export const RootContainer = styled.div`
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

const Home = () => {
  return (
    <>
      <Banner />
      <RootContainer>
        <Lobs />
      </RootContainer>
    </>
  );
};

export default Home;
