import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/entypo-social/Facebook';

import { RoutePaths } from '../Menu/Header';
import { useMedia } from '../helpers/useMedia';
import { ScreenSize } from '../shared/ScreenSize';

const Container = styled.div`
  
  width: 100%;
  background-color: var(--idema-color);
  color: white;
  padding: 10px 5%;
  max-width: 2500px;
  margin: 0 auto;

  @media (max-width: ${ScreenSize.SM_MIN}) {
    flex-direction: column;
    padding: 10px 5%;
  } ;
`;

const Content = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  padding: 1rem 4rem;
  margin: 0 2rem;
  h3, p, a {
    color: white;
  }
`;

const LinkToFace = styled.div`
  padding: 5rem 0.5rem 0rem 1rem;
  margin: 0 2rem;
  align-self: center;

  a {
    color: white;
  }
`;

const MobileWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  p,
  a {
    color: white;
  }
`;

const Copyright = styled.div`
  text-align: center;
  p {
    color: white;
  }
`;

const LargeFooter = () => {
  const isSmallScreen = useMedia(`(max-width:${ScreenSize.SM_MAX})`);

  if (isSmallScreen) {
    return (
      <Container>
        <MobileWrapper>
          <h3>For spørsmål, informasjon eller råd, ta <Link to={RoutePaths.CONTACT}> kontakt med oss!</Link></h3>
          <p>post@idema.no</p>
          <p>67 51 69 00</p>
          <p>Org.nr. 937757875</p>
          <a href="https://www.google.com/maps/place/L%C3%B8xaveien+15,+1351+Rud/@59.9051976,10.486582,17z/data=!3m1!4b1!4m5!3m4!1s0x4641139e8c0911f5:0xdba03f821a0654e1!8m2!3d59.9051976!4d10.4887707">
            Løxaveien 15 1351 Rud
          </a>
          <br />
          <br />
          <a href="https://www.facebook.com/idemaas/">
            {' '}
            <Facebook size="24" />
          </a>
          <Copyright>
            <p>© Idema 2020</p>
          </Copyright>
        </MobileWrapper>
      </Container>
    );
  }

  return (
    <Container>
     <Content>
     <Wrapper>
        <h3>Besøksadresse</h3>
        <a href="https://www.google.com/maps/place/L%C3%B8xaveien+15,+1351+Rud/@59.9051976,10.486582,17z/data=!3m1!4b1!4m5!3m4!1s0x4641139e8c0911f5:0xdba03f821a0654e1!8m2!3d59.9051976!4d10.4887707">
        <p>Løxaveien 15</p>
        <p>1351 Rud</p>
        </a>
      </Wrapper>
      <Wrapper>
        <p>67 51 69 00</p>
        <p>post@idema.no</p>
        <p>Org.nr. 937757875</p>
      </Wrapper>
      <LinkToFace>
      <a href="https://www.facebook.com/idemaas/">
          <Facebook size="36" />
        </a>
      </LinkToFace>
      </Content>
    </Container>
  );
};

export default LargeFooter;
