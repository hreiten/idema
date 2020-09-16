import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

import ImageGridList from './ImageGridlist'

import { skoleProduktliste } from '../helpers/productlist'

import sykehusImg1 from '../images/Lhl-vindu.jpg'
import sykehusImg2 from '../images/forsideBilde.jpg'
import sykehusImg3 from '../images/ulriksdalSykehus.jpg'


const sykehusBilder = [
    {
        img: sykehusImg1,
        title: 'Image',
        cols: 2
    },
    {
        img: sykehusImg3,
        title: 'Image2',
        cols: 2
    },
    {
        img: sykehusImg2,
        title: 'Image3',
        cols: 2
    }
]

const useStyles = makeStyles(theme => ({
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
  }));



export default function Skole(){
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return(       
        <Container maxWidth="lg" >
            <Typography className={classes.title} variant="h4" gutterBottom color="textSecondary" >
                Skole
            </Typography>
            <ImageGridList cols={6} tileData={sykehusBilder}/>
            <Typography className={classes.title} variant="h6" gutterBottom color="textSecondary" >
            Produktområder
            </Typography>
            <Grid container spacing={2} style={{padding: '24px'}}>
    
            {skoleProduktliste.map( p => 
                <Grid key={p.id} item xs={12} sm={6} md={4} lg={4} xl={3}>   
                    <ListItem> 
                        {p.title ? bull : ''}
                        {p.title}
                    </ListItem>
                    {/* <ListItem> 
                        {p.title2 ? bull : ''}
                        {p.title2}
                    </ListItem> 
                    <ListItem> 
                        {p.title3 ? bull : ''}
                        {p.title3}
                    </ListItem> 
                    <ListItem> 
                        {p.title4 ? bull : ''}
                        {p.title4}
                    </ListItem> 
                    <ListItem> 
                        {p.title5 ? bull : ''}
                        {p.title5}
                    </ListItem>              */}
                </Grid>        
            )}
            </Grid>
        </Container>
    )
}

