import React from 'react';
import styled from 'styled-components';
import LinkImage from '../components/LinkImage';
import { ScreenSize } from '../shared/ScreenSize';

import barnehage1 from '../images/mfBarnehage.jpg';
import barnehage2 from '../images/tbarnehage2.jpg';
import barnehage3 from '../images/rbarnehage.jpg';

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

const Barnehageprosjekter = () => {
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
          src={barnehage1}
          alt="Margarinfabrikken barnehage"
          url="https://www.facebook.com/pg/idemaas/photos/?tab=album&album_id=738412599513888&ref=page_internal"
          text="Margarinfabrikken barnehage"
        />

        <LinkImage
          src={barnehage2}
          alt="Trosterud barnehage"
          url="https://www.facebook.com/pg/idemaas/photos/?tab=album&album_id=738415462846935&ref=page_internal"
          text="Trosterud barnehage"
        />
        <LinkImage
          src={barnehage3}
          alt="Radarveien barnehage"
          url="https://www.facebook.com/pg/idemaas/photos/?tab=album&album_id=738416386180176&ref=page_internal"
          text="Radarveien barnehage"
        />
      </LinkImages>
    </Container>
  );
};

export default Barnehageprosjekter;
