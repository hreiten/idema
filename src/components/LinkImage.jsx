import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

const Image = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  padding: 0.5px;

  ${Container}:hover & {
    opacity: 0.3;
  }
`;

const Middle = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  width: fit-content;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const Text = styled.a`
  background-color: var(--idema-color);
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  min-width: 80%;
`;

export const LinkImage = ({ src, alt, url, text }) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
      <Middle>
        <Text href={url} target="_blank">
          {text}
        </Text>
      </Middle>
    </Container>
  );
};

export default LinkImage;

LinkImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
};
