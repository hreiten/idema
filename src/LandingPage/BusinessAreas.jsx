import React from 'react';
import styled from 'styled-components';
import { RoutePaths } from '../Menu/Header';
import { ScreenSize } from '../shared/ScreenSize';
import Card from '../components/Card';

import undervisningsLob from '../images/forsideBilde.jpg';
import helseLob from '../images/Lhl-vindu.jpg';
import barnehage from '../images/tBarnehage.jpg';
import statoil from '../images/statoil.jpg';

const Lobs = [
  {
    id: '1',
    title: 'Helse og omsorg',
    description: 'dfghjkf ghjfghj fghjfghj fghjk ghjk ghjk hjfghj fghjk ghjk',
    src: helseLob,
    alt: 'Sykehus',
    url: RoutePaths.HELSE,
  },
  {
    id: '2',
    title: 'Undervisning',
    description: 'dfghjkf ghjfghj fghjfghj fghjk ghjk ghjk',
    src: undervisningsLob,
    alt: 'Skole',
    url: RoutePaths.SKOLE,
  },
  {
    id: '3',
    title: 'Barnehager',
    description: 'dfghjkf ghjfghj fghjfghj fghjk ghjk ghjk hjfghj fghjk ghjk',
    src: barnehage,
    alt: 'hjk',
    url: RoutePaths.BARNEHAGE,
  },
  {
    id: '4',
    title: 'Næringsliv',
    description: 'dfghjkf ghjfghj fghjfghj fghjk ghjk ghjk',
    src: statoil,
    alt: 'njkø',
    url: RoutePaths.NAERINGSBYGG,
  },
];

const Grid = styled.div`
  display: grid;
  max-width: 1400px;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;

  @media (min-width: ${ScreenSize.LG_MAX}) {
    grid-template-columns: repeat(4, minmax(250px, 1fr));
  }
`;

const BusinessAreas = () => {
  return (
    <Grid>
      {Lobs.map((lob) => (
        <Card key={lob.id} title={lob.title} description={lob.description} src={lob.src} alt={lob.alt} url={lob.url} />
      ))}
    </Grid>
  );
};

export default BusinessAreas;
