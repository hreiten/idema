import React from 'react';
import styled from 'styled-components';
import LinkImage from '../components/LinkImage';
import { ScreenSize } from '../shared/ScreenSize';
import Expandable from '../helpers/Expandable';

import akerbrygge1 from '../images/akerbrygge1.jpg';
import theWell from '../images/theWellGarderobe.jpg';
import romlhl from '../images/rom-lhl.jpg';

import SykehusProsjekter from '../Helse/SykehusProsjekter';
import Skoleprosjekter from '../Skole/Skoleprosjekter';

const Wrapper = styled.div`
  margin-top: 7rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${ScreenSize.SM_MIN}) {
    flex-direction: column;
  } ;
`;

const Projects = () => {
  return (
    <Wrapper>
      <h2>Referanse prosjekter </h2>
      <p>
        Foreløpig kan du se flere referansebilder på vår <a href="https://www.facebook.com/idemaas">facebookside</a>
      </p>
      <Expandable id={1} title={'Sykehus'}>
        {<SykehusProsjekter />}
      </Expandable>
      <hr />
      <Expandable id={2} title={'Skoler'}>
        {<Skoleprosjekter />}
      </Expandable>
      <hr />
      <Expandable id={3} title={'Næringsbygg'}>
        <Container>
          <LinkImage src={romlhl} alt="" url="" text="LHL sykehus Gardemoen" />
          <LinkImage src={theWell} alt="" url="" text="The Well" />
          <LinkImage src={akerbrygge1} alt="" url="" text="Akrebrygge ? " />
        </Container>
      </Expandable>
      <hr />
    </Wrapper>
  );
};

export default Projects;
