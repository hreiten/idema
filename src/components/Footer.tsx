import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  margin: 0 auto;
  align-items: center;
  border-top: 1px solid black;
`;

const Footer = () => {
  return (
    <Container>
      <span>
        IDEMA As | post@idema.no {'| '}
        <a href="https://www.google.com/maps/place/Nesveien+13,+1344+Haslum/@59.9164783,10.5532062,17z/data=!3m1!4b1!4m5!3m4!1s0x4641132ffed89cfd:0xe6b95102e078aa7a!8m2!3d59.9164783!4d10.5554002">
          Nesveien 13 1344 Haslum
        </a>
        {' | '}
        <a href="https://www.facebook.com/idemaas/">Facebook</a>
      </span>
      <span>© Idema 2020</span>
    </Container>
  );
};

export default Footer;
