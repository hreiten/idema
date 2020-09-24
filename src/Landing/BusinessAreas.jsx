import React from 'react';
import styled from 'styled-components';
import { ScreenSize, RoutePaths } from '../Menu/Header';
import Card from '../helpers/Card';

import undervisningsLob from '../images/forsideBilde.jpg';
import helseLob from '../images/Lhl-vindu.jpg';
import omsorgsLob from '../images/the-well-stoler.jpg';
import statoil from '../images/statoil.jpg';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;

  @media (min-width: ${ScreenSize.LG_MIN}) {
    grid-template-columns: repeat(4, minmax(250px, 1fr));
  }
`;

const Lobs = [
  {
    id: '1',
    title: 'Helse og omsorg',
    description: 'dfghjkfghjfghj fghjfghj fghjk ghjk ghjk',
    src: helseLob,
    alt: 'Sykehus',
    url: RoutePaths.HELSE,
  },
  {
    id: '2',
    title: 'Undervisning',
    description: 'dfghjkfghjfghj fghjfghj fghjk ghjk ghjk',
    src: undervisningsLob,
    alt: 'Skole',
    url: RoutePaths.UNDERVISNING,
  },
  {
    id: '3',
    title: 'Barnehager',
    description: 'dfghjkfghjfghj fghjfghj fghjk ghjk ghjk',
    src: omsorgsLob,
    alt: 'hjk',
    url: RoutePaths.BARNEHAGE,
  },
  {
    id: '4',
    title: 'Næringsliv',
    description: 'dfghjkfghjfghj fghjfghj fghjk ghjk ghjk',
    src: statoil,
    alt: 'njkø',
    url: RoutePaths.NAERINGSBYGG,
  },
];

const BusinessAreas = () => {
  return (
    <Grid>
      {Lobs.map((lob) => (
        <Card key={lob.id} title={lob.title} description={lob.description} src={lob.src} alt={lob.alt} url={lob.url} />
      ))}
      ;
    </Grid>
  );
};

export default BusinessAreas;
