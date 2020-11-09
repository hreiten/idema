import React from 'react';

import skole1 from '../images/skapValle.jpg';
import skole2 from '../images/skole2.jpg';
import skole3 from '../images/skole3.jpg';
import skole4 from '../images/skole4.jpg';

import vossVgs from '../images/voss-vgs.jpg';
import valleLab from '../images/valle-lab.jpg';
import holmenSkole from '../images/holmenSkole.jpg';

import { skoleProduktliste } from '../helpers/productlist';

import Lobpage from '../components/Lobpage';

const ImageList = [
  {
    src: skole1,
    alt: "skole1"
  },
  {
    src: skole2,
    alt: "skole2"
  },
  {
    src: skole3,
    alt: "skole3"
  },
  {
    src: skole4,
    alt: "skole4"
  }
]

const LinkList = [
  {
    src: holmenSkole,
    alt: "Holmen skole",
    url: "https://www.facebook.com/media/set/?vanity=idemaas&set=a.1725567300798408",
    text: "Holmen skole"
  },
  {
    src: valleLab,
    alt: "Valle VGS",
    url: "https://www.facebook.com/media/set?vanity=idemaas&set=a.1725669087454896",
    text: "Valle VGS"
  },
  {
    src: vossVgs,
    alt: "Voss VGS",
    url: "https://www.facebook.com/media/set?vanity=idemaas&set=a.1725618734126598",
    text: "Voss VGS"
  }
];

const Skole = () => {
  return (
    <Lobpage 
      title={"Undervisning"}  
      description={"All fast innredning til grunnskole, videregående og universitet."}
      imageList={ImageList}
      productList={skoleProduktliste}
      linkList={LinkList} 
    />
  );
};

export default Skole;

