import React from 'react';

import sykehusbilde1 from '../images/sykehus1.jpg';
import sykehusbilde2 from '../images/lhlresep.jpg';
import sykehusbilde3 from '../images/sykehus4.jpg';
import sykehusbilde6 from '../images/sykehus6.jpg';

import { Produktliste } from './produktliste';

import bodoSykehus from '../images/bodoSykehus.jpg';
import lhlsykehus from '../images/Lhl-vindu.jpg';
import ulriksdalsykehus from '../images/ulriksdalSykehus.jpg';

import Lobpage from '../components/Lobpage';

const ImageList = [
  {
    src: sykehusbilde2,
    alt: "sykehus2"
  },
  {
    src: sykehusbilde6,
    alt: "sykehus6"
  },
  {
    src: sykehusbilde3,
    alt: "sykehus3"
  },
  {
    src: sykehusbilde1,
    alt: "sykehus1"
  }
]

const LinkList = [
  {
    src: lhlsykehus,
    alt: "LHL sykehus Gardemoen",
    url: "https://www.facebook.com/media/set?vanity=idemaas&set=a.1725563717465433",
    text: "LHL sykehus Gardemoen"
  },
  {
    src: bodoSykehus,
    alt: "Bodø sykehus",
    url: "https://www.facebook.com/media/set/?vanity=idemaas&set=a.1025602947461517",
    text: "Bodø sykehus"
  },
  {
    src: ulriksdalsykehus,
    alt: "Haukeland sykehus - BUS",
    url: "https://www.facebook.com/media/set/?vanity=idemaas&set=a.1725572527464552",
    text: "Haukeland sykehus - BUS "
  }
];

const Helse = () => {
  return (
    <Lobpage 
      title={"Helse og omsorg"}  
      description={"All fast innredninig til sykehus og sykehjem."}
      imageList={ImageList}
      productList={Produktliste}
      linkList={LinkList} 
    />
  );
};

export default Helse;


