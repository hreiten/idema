import React from 'react';
import barnehagebilde1 from '../images/barnehage1.jpg';
import barnehagebilde2 from '../images/barnehage2.jpg';
import barnehagebilde3 from '../images/barnehage3.jpg';
import barnehagebilde4 from '../images/barnehage4.jpg';

import Margarinfabrikken from '../images/mfBarnehage.jpg';
import Trosterud from '../images/tbarnehage2.jpg';
import Radarveien from '../images/rbarnehage.jpg';

import { barnehageProduktliste } from '../helpers/productlist';
import Lobpage from '../components/Lobpage';

const ImageList = [
  {
    src: barnehagebilde1,
    alt: "barnehagebilde1"
  },
  {
    src: barnehagebilde2,
    alt: "barnehagebilde1"
  },
  {
    src: barnehagebilde3,
    alt: "barnehagebilde1"
  },
  {
    src: barnehagebilde4,
    alt: "barnehagebilde1"
  },
]

const LinkList = [
  {
    src: Margarinfabrikken,
    alt: "Margarinfabrikken barnehage",
    url: "https://www.facebook.com/media/set/?set=a.738412599513888&type=3",
    text: "Margarinfabrikken barnehage"
  },
  {
    src: Trosterud,
    alt: "Trosterud barnehage",
    url: "https://www.facebook.com/media/set/?set=a.738415462846935&type=3",
    text: "Trosterud barnehage"
  },
  {
    src: Radarveien,
    alt: "Radarveien barnehage",
    url: "https://www.facebook.com/media/set/?set=a.738416386180176&type=3",
    text: "Radarveien barnehage"
  }
];

const Barnehage = () => {
  return (
    <Lobpage 
      title={"Barnehage"}  
      description={"Alt av fast innventar, spesial og standard."}
      imageList={ImageList}
      productList={barnehageProduktliste}
      linkList={LinkList} 
    />
  );
};

export default Barnehage;
