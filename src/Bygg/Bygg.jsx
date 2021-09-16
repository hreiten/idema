import React from 'react';

import nbygg1 from '../images/nbygg1.jpg';
import nbygg2 from '../images/nbygg2.jpg';
import nbygg3 from '../images/nbygg3.jpg';
import nbygg4 from '../images/nbygg5.jpg';

import akerbrygge1 from '../images/akerbrygge1.jpg';
import theWell from '../images/theWellGarderobe.jpg';
import fornebu from '../images/kjokkenFornebu.jpg';

import { naeringsbyggProduktliste } from '../helpers/productlist';
import Lobpage from '../components/Lobpage';

const ImageList = [
  {
    src: nbygg4,
    alt: "næringsbygg4"
  },
  {
    src: nbygg3,
    alt: "næringsbygg3"
  },
  {
    src: nbygg1,
    alt: "næringsbygg1"
  },
  {
    src: nbygg2,
    alt: "næringsbygg2"
  },
]

const LinkList = [
  {
    src: fornebu,
    alt: "Fornebuporten",
    url: "https://www.facebook.com/media/set/?set=a.1725627557459049&type=3",
    text: "Fornebuporten"
  },
  {
    src: theWell,
    alt: "The Well",
    url: "https://www.facebook.com/media/set/?set=a.1725580857463719&type=3",
    text: "The Well"
  },
  {
    src: akerbrygge1,
    alt: "F16 Akerbrygge",
    url: "https://www.facebook.com/media/set/?set=a.1329740403714435&type=3",
    text: "F16 Akerbrygge"
  }
];

const Bygg = () => {
  return (
    <Lobpage 
      title={"Næringsbygg"}  
      description={"All fast innrednig til kontor og kulturbygg, spesial og standard."}
      imageList={ImageList}
      productList={naeringsbyggProduktliste}
      linkList={LinkList} 
    />
  );
};

export default Bygg;

