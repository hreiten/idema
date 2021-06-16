import React from 'react';
import styled from 'styled-components';
import { useMedia } from '../helpers/useMedia';
import { ScreenSize } from '../shared/ScreenSize';

const Container = styled.div`
  padding: 20px 5%;
  border-top: 1px solid lightgrey;
`;

const Content = styled.div`
  margin: 0 auto;
  width: fit-content;
  text-align: center;
`;

const Footer = () => {
  const isSmallScreen = useMedia(`(max-width:${ScreenSize.SM_MAX})`);

  if (isSmallScreen) {
    return (
      <Container>
        <Content>
          <span>© Idema 2020</span>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        IDEMA As | post@idema.no {'| '}
        <a href="https://www.google.com/maps/place/L%C3%B8xaveien+15,+1351+Rud/@59.9051976,10.486582,17z/data=!3m1!4b1!4m5!3m4!1s0x4641139e8c0911f5:0xdba03f821a0654e1!8m2!3d59.9051976!4d10.4887707">
          Løxaveien 15 1351 Rud
        </a>
        {' | '}
        <a href="https://www.facebook.com/idemaas/">Facebook</a>
        <p>© Idema 2020</p>
      </Content>
    </Container>
  );
};

export default Footer;
