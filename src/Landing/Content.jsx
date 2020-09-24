import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '../Menu/Header';

const Content = () => {
  /* Clear floats after the columns */
  const Row = styled.div`
    padding-top: 5rem;
    &:after {
      content: '';
      display: table;
      clear: both;
    }
  `;

  const Text = styled.div`
    background-color: pink;
    float: left;
    width: 50%;
    padding: 10px;
    height: auto;

    @media (max-width: ${ScreenSize.SM_MIN}) {
      width: 100%;
    } ;
  `;

  const Image = styled.div`
    background-color: blue;
    float: left;
    width: 50%;
    padding: 10px;
    height: auto;

    @media (max-width: ${ScreenSize.SM_MIN}) {
      width: 100%;
    } ;
  `;

  return (
    <Row>
      <Image>Et bilde</Image>
      <Text>
        <h4>Hva gjør vi?</h4>
        <p>lalala allala lala allalaa </p>
      </Text>
    </Row>
  );
};

export default Content;
