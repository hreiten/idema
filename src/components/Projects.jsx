import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { Link } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import vossVgs from '../images/voss-vgs.jpg';
import fornebuporten from '../images/kjokkenFornebu.jpg';
import lhlResep from '../images/lhl-resepsjon.jpg';
import valleLab from '../images/valle-lab.jpg';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
})
);


export default function Projects () {
    const projectList = [
        {
            id: 1,
            name: 'LHL-sykehuset Gardemoen',
            image: lhlResep,
            text: 'LHL-sykehuset på Gardemoen'
        },
        {
            id: 2,
            name: 'Valle VGS',
            image: valleLab,
            text: 'Naturfagsrommet, skolekjøkken ... '
        },
        {
            id: 3,
            name: 'Voss VGS',
            image: vossVgs,
            text: 'Skap, klasserom, mat og helserom '
        },
        {
            id: 4,
            name: 'Fornebuporten',
            image: fornebuporten,
            text: 'Fornebuporten, toaletter garderobe '
        }
    ]

    const classes = useStyles();

    return(
        <Container maxWidth="lg" >
            <Typography className={classes.title} variant="h5" gutterBottom  >
                Referanseprosjekter
            </Typography>
            <Typography className={classes.title} variant="body1" gutterBottom  >
                For flere referansebilder se vår
            <Link color="primary" target="_blank" rel="noreferrer" href="https://tinyurl.com/vy9d8h7">
            {' facebookside'} 
            </Link>
            </Typography>
            <Grid container spacing={10} style={{padding: '24px'}}>
            {projectList.map( project => 
                <Grid key={project.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
                   
                        <ProjectCard 
                        key={project.id}
                        name={project.name}
                        text={project.text} 
                        image={project.image}
                        />
                 </Grid>        
            )}
            </Grid>
            </Container>
    )
}
