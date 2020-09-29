import React from 'react';
import styled from 'styled-components';
import LinkImage from '../components/LinkImage';
import { ScreenSize } from '../shared/ScreenSize';

import bodoSykehus from '../images/bodoSykehus.jpg';
import romlhl from '../images/rom-lhl.jpg';
import ulriksdalsykehus from '../images/ulriksdalSykehus.jpg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

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
        <LinkImage
          src={romlhl}
          alt="Link til facebookside - lhl"
          url="https://www.facebook.com/media/set?vanity=idemaas&set=a.1725563717465433"
          text="LHL sykehus Gardemoen"
        />

        <LinkImage
          src={bodoSykehus}
          alt=""
          url="https://www.facebook.com/media/set/?vanity=idemaas&set=a.1025602947461517"
          text="Bodø sykehus"
        />

        <LinkImage
          src={ulriksdalsykehus}
          alt=""
          url="https://www.facebook.com/media/set/?vanity=idemaas&set=a.1725572527464552"
          text="Haukeland sykehus - BUS "
        />
      </Container>
    </>
  );
};

export default SykehusProsjekter;
