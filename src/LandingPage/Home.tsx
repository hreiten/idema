import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import { ScreenSize } from '../shared//ScreenSize';
import BusinessAreas from './BusinessAreas';
import Lobs from './Lobs';
import Content from './Content';
import { RootContainer } from '../shared/StyledComponents';

const Container = styled.div`
  border: 1px solid grey;
  margin: 5rem;
  justify-content: space-between;
  display: flex;

  @media (max-width: ${ScreenSize.SM_MAX}) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Home = () => {
  //const isSmallScreen = useMedia(`(max-width: ${ScreenSize.LG_MIN})`);
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
