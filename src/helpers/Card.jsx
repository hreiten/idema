import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 250px;
  width: 100%;
  margin: auto;
  border: 1px solid grey;
`;

const Content = styled.div`
  background-color: var(--background-color-dark);
`;

const Title = styled.h3`
  color: var(--title-color);
`;

const Description = styled.p`
  color: var(--text-color);
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

      <Title>{title}</Title>
      <Description>{description}</Description>
      <Action to={url} exact>
        Les mer
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
