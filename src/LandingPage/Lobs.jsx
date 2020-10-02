import React from 'react';
import styled from 'styled-components';
import LobImage from '../components/LobImage';
import { ScreenSize } from '../shared/ScreenSize';
import { RoutePaths } from '../Menu/Header';
import romlhl from '../images/rom-lhl.jpg';
import vossvgs from '../images/voss-vgs.jpg';
import barnehage from '../images/tBarnehage.jpg';
import skate from '../images/skate.jpg';

const Wrap = styled.div`
  display: flex;
  margin: 10rem 4rem;
  @media (max-width: ${ScreenSize.MD_MAX}) {
    flex-wrap: wrap;
    margin: 2rem 0;
  }
`;

const Container = styled.div`
  width: 50%;
  @media (max-width: ${ScreenSize.MD_MAX}) {
    flex-direction: column;
    width: 100%;
  } ;
`;

const Text = styled.div`
  display: flex;
  align-self: center;
  text-align: right;
  width: 50%;
  padding: 10px;
  margin-right: 3rem;

  h3 {
    color: white;
    font-family: var(--sans-serif-font);
    @media (min-width: ${ScreenSize.SM_MAX}) {
      font-size: 25px;
      color: var(--idema-color);
    }
  }

  @media (max-width: ${ScreenSize.MD_MAX}) {
    text-align: center;
    width: 100%;
    margin-right: 0;
    margin-top: 6rem;
    padding: 2.5rem 1rem;
  }

  @media (max-width: ${ScreenSize.MD_MAX}) {
    margin-top: 0;
    padding: 1rem;
  } ;
`;

const Lobs = () => {
  return (
    <Wrap>
      <Text>
        <h3>Vi leverer komplette innredninger til helse-, omsorgs- og undervisningssektoren samt næringsbygg.</h3>
      </Text>
      <Container>
        <LobImage src={romlhl} alt="Link til facebookside - lhl" url={RoutePaths.HELSE} text="Helse og omsorg" />
        <LobImage src={barnehage} alt="" url={RoutePaths.BARNEHAGE} text="Barnehager" />
      </Container>
      <Container>
        <LobImage src={vossvgs} alt="" url={RoutePaths.SKOLE} text="Undervisning" />
        <LobImage src={skate} alt="" url={RoutePaths.BYGG} text="Næringsbygg" />
      </Container>
    </Wrap>
  );
};

export default Lobs;
