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
          <a href="https://www.google.com/maps/place/Nesveien+13,+1344+Haslum/@59.9164783,10.5532062,17z/data=!3m1!4b1!4m5!3m4!1s0x4641132ffed89cfd:0xe6b95102e078aa7a!8m2!3d59.9164783!4d10.5554002">
            Nesveien 13 1344 Haslum
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
        <a href="https://www.google.com/maps/place/Nesveien+13,+1344+Haslum/@59.9164783,10.5532062,17z/data=!3m1!4b1!4m5!3m4!1s0x4641132ffed89cfd:0xe6b95102e078aa7a!8m2!3d59.9164783!4d10.5554002">
        <p>Nesveien 13</p>
        <p>1344 Haslum</p>
        </a>
      </Wrapper>
      <Wrapper>
        <h3><Link to={RoutePaths.CONTACT} > Kontakt Oss </Link></h3>
        <p>67 51 69 00</p>
        <p>post@idema.no</p>
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
