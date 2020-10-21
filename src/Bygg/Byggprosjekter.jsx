import React from 'react';
import styled from 'styled-components';
import LinkImage from '../components/LinkImage';
import { ScreenSize } from '../shared/ScreenSize';

import akerbrygge1 from '../images/akerbrygge1.jpg';
import theWell from '../images/theWellGarderobe.jpg';
import fornebu from '../images/kjokkenFornebu.jpg';

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

const Byggprosjekter = () => {
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
          src={fornebu}
          alt=""
          url="https://www.facebook.com/pg/idemaas/photos/?tab=album&album_id=1725627557459049&ref=page_internal"
          text="Fornebuporten"
        />
        <LinkImage
          src={theWell}
          alt=""
          url="https://www.facebook.com/pg/idemaas/photos/?tab=album&album_id=1725580857463719&ref=page_internal"
          text="The Well"
        />
        <LinkImage
          src={akerbrygge1}
          alt=""
          url="https://www.facebook.com/pg/idemaas/photos/?tab=album&album_id=1329740403714435&ref=page_internal"
          text="F16 Akerbrygge"
        />
      </LinkImages>
    </Container>
  );
};

export default Byggprosjekter;