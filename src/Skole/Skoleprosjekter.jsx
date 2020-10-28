import React from 'react';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/entypo-social/Facebook';
import LinkImage from '../components/LinkImage';
import { ScreenSize } from '../shared/ScreenSize';

import vossVgs from '../images/voss-vgs.jpg';
import valleLab from '../images/valle-lab.jpg';
import holmenSkole from '../images/holmenSkole.jpg';

const Container = styled.div`
  margin: 2rem 2rem 5rem;
  @media (max-width: ${ScreenSize.MD_MIN}) {
    margin: 1rem 1rem 3rem;
  } ;

  h2 {
    color: var(--idema-color);
    font-family: var(--sans-serif-font);
  }
`;

const FaceIcon = styled.span`
  a {
    color: var(--idema-color);
  }
`;

const LinkImages = styled.div`
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
    <Container>
      <h2>Referanseprosjekter</h2>
      <p>
      Se bilder fra noen av våre gjennomførte prosjekter på vår{' '}
        <a href="https://www.facebook.com/idemaas">facebookside.</a>{' '}
     
      <FaceIcon>
          <a href="https://www.facebook.com/idemaas/photos/?tab=album&ref=page_internal">
          <Facebook size="28" />
        </a>
        </FaceIcon>
        </p>
      <LinkImages>
        <LinkImage src={holmenSkole} alt="holmen" url="" text="Holmen skole" />
        <LinkImage src={valleLab} alt="valle" url="/idema" text="Valle VGS" />
        <LinkImage src={vossVgs} alt="voss" url="/idema" text="Voss VGS" />
      </LinkImages>
    </Container>
  );
};

export default SykehusProsjekter;
