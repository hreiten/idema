import React from 'react';
import styled from 'styled-components';
import LinkImage from '../components/LinkImage';
import { ScreenSize } from '../shared/ScreenSize';

import vossVgs from '../images/voss-vgs.jpg';
import valleLab from '../images/valle-lab.jpg';
import holmenSkole from '../images/holmenSkole.jpg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: ${ScreenSize.SM_MAX}) {
    flex-direction: column;
  } ;
`;

const SykehusProsjekter = () => {
  return (
    <>
      <h2>Referanseprosjekter</h2>
      <i>*Kommer*</i>
      <p>
        Foreløpig kan du se bilder fra noen av våre prosjekter på vår{' '}
        <a href="https://www.facebook.com/idemaas">facebookside.</a>{' '}
      </p>
      <Container>
        <LinkImage src={holmenSkole} alt="holmen" url="" text="Holmen skole" />
        <LinkImage src={valleLab} alt="valle" url="/idema" text="Valle VGS" />
        <LinkImage src={vossVgs} alt="voss" url="/idema" text="Voss VGS" />
      </Container>
    </>
  );
};

export default SykehusProsjekter;
