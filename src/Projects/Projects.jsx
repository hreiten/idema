import React from 'react';
import styled from 'styled-components';
import LinkImage from '../components/LinkImage';
import { ScreenSize } from '../shared/ScreenSize';

import valleLab from '../images/valle-lab.jpg';
import akerbrygge1 from '../images/akerbrygge1.jpg';
import bodoSykehus from '../images/bodoSykehus.jpg';
import holmenSkole from '../images/holmenSkole.jpg';
import theWell from '../images/theWellGarderobe.jpg';
import romlhl from '../images/rom-lhl.jpg';

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
    <>
      <h2>Referanse prosjekter </h2>
      <p>
        Foreløpig kan du se flere referansebilder på vår <a href="https://www.facebook.com/idemaas">facebookside</a>
      </p>

      <Container>
        <LinkImage src={valleLab} alt="h" url="/idema" text="Valle VGS" />;
        <LinkImage src={bodoSykehus} alt="" url="" text="Bodø sykehus" />;
        <LinkImage src={akerbrygge1} alt="" url="" text="Akrebrygge ? " />;
      </Container>
      <Container>
        <LinkImage src={holmenSkole} alt="" url="" text="Holmen skole" />;
        <LinkImage src={theWell} alt="" url="" text="The Well" />;
        <LinkImage src={romlhl} alt="" url="" text="LHL sykehus Gardemoen" />;
      </Container>
    </>
  );
};

export default Projects;
