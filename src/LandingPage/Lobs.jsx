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
  margin-bottom: 5rem;
  @media (max-width: ${ScreenSize.MD_MAX}) {
    flex-wrap: wrap;
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
  background: rgba(256, 256, 256, 0.8);
  color: rgba(10, 25, 94, 0.8);
  width: 50%;
  padding: 10px;
  margin-right: 3rem;

  h3 {
    font-size: 25px;
    font-weight: 300;
    font-family: var(--sans-serif-font);

    @media (max-width: ${ScreenSize.SM_MAX}) {
      font-size: 20px;
    }
  }

  @media (max-width: ${ScreenSize.MD_MAX}) {
    padding: 10px;
    text-align: center;
    width: 100%;
    margin-right: 0;
    margin-top: 6rem;
  }

  @media (max-width: ${ScreenSize.SM_MAX}) {
  }
`;

const Lobs = () => {
  return (
    <Wrap>
      <Text>
        <h3>Komplette innredningsleveranser til helse-, omsorgs- og undervisningssektoren samt næringsbygg.</h3>
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
