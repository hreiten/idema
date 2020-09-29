import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 250px;
  width: 100vw;
  margin: auto;
  border: 1px solid grey;
`;

const Title = styled.h3`
  text-align: center;
  color: var(--idema-color);
`;

const Description = styled.p`
  padding-left: 0.5rem;
`;

const Action = styled.p`
  color: var(--text-color);
  padding-right: 2rem;
  text-align: end;
`;

const Image = styled.img`
  width: 100%;
`;

const Card = ({ title, description, src, alt, url }) => {
  return (
    <Container>
      {src && <Image src={src} alt={alt} />}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Action>
        {' '}
        <Link to={url}>Les mer</Link>
      </Action>
    </Container>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
};
