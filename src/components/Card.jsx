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

const Description = styled.p`
  padding: 0.5rem;
`;

const Action = styled(Link)`
  color: var(--text-color);
`;

const Image = styled.img`
  width: 100%;
`;

const Card = ({ title, description, src, alt, url }) => {
  return (
    <Container>
      {src && <Image src={src} alt={alt} />}
      <h3>{title}</h3>
      <Description>{description}</Description>
      <Action to={url}>Les mer</Action>
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
