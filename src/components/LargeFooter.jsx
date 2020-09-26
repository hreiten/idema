import React from 'react';
import styled from 'styled-components';

import { ScreenSize } from '../shared/ScreenSize';

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--idema-color);
  color: white;

  @media (max-width: ${ScreenSize.SM_MIN}) {
    flex-direction: column;
  } ;
`;

const VisitWrapper = styled.div`
  border: 1px solid white;
  padding: 5rem;

  p {
    color: white;
  }
`;

const ContactWrapper = styled.div`
  border: 1px solid white;
  padding: 5rem;

  p {
    color: white;
  }
`;

const LargeFooter = () => {
  return (
    <Container>
      <VisitWrapper>
        <h3>Besøksadresse</h3>
        <p>Nesveien 13</p>
        <p>1344 Haslum</p>
      </VisitWrapper>
      <ContactWrapper>
        <h3>Kontakt</h3>
        <p>67 51 69 00</p>
        <p>post@idema.no</p>
      </ContactWrapper>
    </Container>
  );
};

export default LargeFooter;
