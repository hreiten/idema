import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ScreenSize } from '../shared/ScreenSize';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 2.5rem;
  @media (max-width: ${ScreenSize.SM_MAX}) {
    max-height: 350px;
    max-width: 350px;
    padding: 5px 0 3px;
    margin: auto;
  }
`;

const Image = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  align-self: flex-start; 
  transition: 0.5s ease;
  backface-visibility: hidden;
  padding: 0.5px;
  background: rgba(0, 0, 0, 0.3);
  ${Container}:hover & {
    opacity: 0.5;
  }
`;

const Middle = styled.div`
  //border: 1px solid var(--idema-color);
  opacity: 1;
  position: absolute;
  top: 30%;
  left: 50%;
  text-align: center;
  display: inline-flex;
  width: fit-content;
  min-height: 20%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  ${Container}:hover & {
    transition: 0.5s ease;
    opacity: 1;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgba(256, 256, 256, 0.7);
  }
`;

const Text = styled(Link)`
  color: white;
  opacity: 1;
  font-size: 25px;
  padding: 16px 32px;
  min-width: 80%;
  align-self: center;
  text-transform: uppercase;
  font-weight: bold;

  ${Container}:hover & {
    color: var(--idema-color);
  }
`;

export const LobImage = ({ src, alt, url, text }) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
      <Middle>
        <Text to={url}>{text}</Text>
      </Middle>
    </Container>
  );
};

export default LobImage;

LobImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
};
