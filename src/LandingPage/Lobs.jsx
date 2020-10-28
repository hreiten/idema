import React from 'react';
import styled from 'styled-components';
import LobImage from '../components/LobImage';
import { ScreenSize } from '../shared/ScreenSize';
import { RoutePaths } from '../Menu/Header';
import sykehusbygg from '../images/sykehusbygg.jpg';
import vossvgs from '../images/voss-vgs.jpg';
import barnehage from '../images/tBarnehage.jpg';
import skate from '../images/skate.jpg';

const Wrap = styled.div`
  display: flex;
  margin: 1rem 0;
  @media (max-width: ${ScreenSize.MD_MAX}) {
    flex-wrap: wrap;
    margin:  0;
  }
`;

const Container = styled.div`
  width: 100%;
  @media (max-width: ${ScreenSize.MD_MAX}) {
    flex-direction: column;
    width: 100%;
  } ;
`;

const Lobs = () => {
  return (
    <Wrap>
      <Container>
        <LobImage src={sykehusbygg} alt="Link til facebookside - lhl" url={RoutePaths.HELSE} text="Helse og omsorg" />
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
