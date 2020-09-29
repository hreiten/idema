import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ExpandMore } from '@styled-icons/material-sharp/ExpandMore';
import { ExpandLess } from '@styled-icons/material-sharp/ExpandLess';

const ExpandableContainer = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h4`
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
  cursor: pointer;
`;

const Content = styled.div`
  border: 1px solid grey;
  transition-timing-function: ease-in;
  transition: opacity 0.5s;
  opacity: 1;
`;

const handleKeyDown = (e) => {
  if (e.key === 'Enter' || e.key === 'Spacebar' || e.key === ' ') {
    e.preventDefault();
    e.target.click();
  }
};

const Expandable = ({ id, title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [icon, setIcon] = React.useState(<ExpandMore size="36" />);

  const toggle = () => {
    setIsOpen(!isOpen);
    setIcon(!isOpen ? <ExpandLess size="36" /> : <ExpandMore size="36" />);
  };

  return (
    <ExpandableContainer>
      <Title
        aria-expanded="true"
        aria-controls={id}
        tabIndex="0"
        onClick={() => toggle(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        {title} {icon}
      </Title>
      {isOpen && (
        <Content role="region" id={id} tabIndex="0">
          {children}
        </Content>
      )}
    </ExpandableContainer>
  );
};

export default Expandable;

Expandable.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  initialState: PropTypes.bool,
};
