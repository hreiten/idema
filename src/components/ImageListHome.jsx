
import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ImageGridList from './ImageGridlist'

import romLhl from '../images/rom-lhl.jpg';
import forsidebilde from '../images/forsideBilde.jpg';
import forsidebilde2 from '../images/orangekjokken.jpg';
import skapValle from '../images/skapValle.jpg';
import statoil from '../images/statoil.jpg'


export default function imageList () {


    const forsideBilder = [
        {
            img: romLhl,
            title: 'Image',
            cols: 2
        },
        {
            img: forsidebilde2,
            title: 'Image2',
            cols: 3
        },
        {
            img: skapValle,
            title: 'Image3',
            cols: 2
        },
        {
            img: statoil,
            title: 'Image4',
            cols: 3
        }
    ]

return(
    <ImageGridList cols={6} tileData={forsideBilder}/>
)
}
