import React from 'react';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/entypo-social/Facebook';

import LinkImage from '../components/LinkImage';
import { ScreenSize } from '../shared/ScreenSize';

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

  @media (max-width: ${ScreenSize.SM_MAX}) {
    flex-direction: column;
  } ;
`;

const Prosjekter = ({linkList}) => {
  return (
    <Container>
      <h2>Referanseprosjekter</h2>
      <p>
      Se bilder fra noen av våre gjennomførte prosjekter på vår{' '}
        <a href="https://www.facebook.com/idemaas/photos/?tab=album&ref=page_internal">facebookside</a>{' '}
        <FaceIcon>
          <a href="https://www.facebook.com/idemaas/photos/?tab=album&ref=page_internal">
          <Facebook size="28" />
        </a>
        </FaceIcon>
      </p>
      <LinkImages>
        <LinkImage
          src={linkList[0].src}
          alt={linkList[0].alt}
          url={linkList[0].url}
          text={linkList[0].text}
        />
        <LinkImage
          src={linkList[1].src}
          alt={linkList[1].alt}
          url={linkList[1].url}
          text={linkList[1].text}
        />
        <LinkImage
          src={linkList[2].src}
          alt={linkList[2].alt}
          url={linkList[2].url}
          text={linkList[2].text}
        />
      </LinkImages>
    </Container>
  );
};

export default Prosjekter;
