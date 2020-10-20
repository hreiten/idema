import React from 'react';
import styled from 'styled-components';
import LinkImage from '../components/LinkImage';
import { ScreenSize } from '../shared/ScreenSize';

import bodoSykehus from '../images/bodoSykehus.jpg';
import lhlsykehus from '../images/sykehusvegg.jpg';
import ulriksdalsykehus from '../images/ulriksdalSykehus.jpg';

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

const LinkImages = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${ScreenSize.SM_MAX}) {
    flex-direction: column;
  } ;
`;

const SykehusProsjekter = () => {
  return (
    <Container>
      <h2>Referanseprosjekter</h2>
      <i>*Kommer*</i>
      <p>
        Foreløpig kan du se bilder fra noen av våre prosjekter på vår{' '}
        <a href="https://www.facebook.com/idemaas">facebookside.</a>{' '}
      </p>
      <LinkImages>
        <LinkImage
          src={lhlsykehus}
          alt="LHL sykehus Gardemoen"
          url="https://www.facebook.com/media/set?vanity=idemaas&set=a.1725563717465433"
          text="LHL sykehus Gardemoen"
        />

        <LinkImage
          src={bodoSykehus}
          alt="Bodø sykehus"
          url="https://www.facebook.com/media/set/?vanity=idemaas&set=a.1025602947461517"
          text="Bodø sykehus"
        />

        <LinkImage
          src={ulriksdalsykehus}
          alt="Haukeland sykehus - BUS"
          url="https://www.facebook.com/media/set/?vanity=idemaas&set=a.1725572527464552"
          text="Haukeland sykehus - BUS "
        />
      </LinkImages>
    </Container>
  );
};

export default SykehusProsjekter;
