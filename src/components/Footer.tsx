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
        <a href="https://www.google.com/maps/place/Nesveien+13,+1344+Haslum/@59.9164783,10.5532062,17z/data=!3m1!4b1!4m5!3m4!1s0x4641132ffed89cfd:0xe6b95102e078aa7a!8m2!3d59.9164783!4d10.5554002">
          Nesveien 13 1344 Haslum
        </a>
        {' | '}
        <a href="https://www.facebook.com/idemaas/">Facebook</a>
        <p>© Idema 2020</p>
      </Content>
    </Container>
  );
};

export default Footer;
