import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper, Container, Divider } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import SchoolIcon from '@material-ui/icons/School';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BusinessIcon from '@material-ui/icons/Business';

import romLhl from '../images/rom-lhl.jpg';
import forsidebilde from '../images/forsideBilde.jpg';
import forsidebilde2 from '../images/orangekjokken.jpg';
import skapValle from '../images/skapValle.jpg';
import statoil from '../images/statoil.jpg';

import imageList from './ImageListHome';

import styled from 'styled-components';

const BusinessCardTitle = styled.span`
  color: var(--title-color);
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },

  image: {
    position: 'relative',
    width: '100%',
  },
  text1: {
    position: 'absolute',
    top: '100px',
    left: 15,
    width: '35%',
    padding: '50px',
    color: 'rgb(255,255,255)',
  },
  text2: {
    position: 'absolute',
    top: '180px',
    left: 15,
    width: '35%',
    padding: '50px',
    color: 'rgb(255,255,255)',
  },
  text3: {
    color: 'rgb(4,24,97)',
  },
  text4: {
    background: 'rgb(4,24,97)',
    color: 'rgb(255,255,255)',
  },
  card: {
    display: 'flex',
    paddingTop: '15px',
    borderRadius: '0px',
    boxShadow: 'none',
  },
  paper: {
    borderRadius: '0',
    boxShadow: 'none',
    color: 'rgb(4,24,97)',
    height: 250,
    width: 200,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 250,
  },
  content: {
    flex: '1 0 auto',
    margin: '50px',
  },
  cover: {
    width: 600,
    height: 350,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export function BusinessCard() {
  const classes = useStyles();
  const areaList = [
    { title: 'Helse og omsorg', subtitle: 'En kort setning', id: 1 },
    { title: 'Utdanning', subtitle: 'En kort setning eventuelt 2 setninger', id: 2 },
    {
      title: 'Næringsbygg',
      subtitle: 'En kort setning eventuelt 2 setninger, eller bare en litt lang som forklarer',
      id: 3,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
          {areaList.map((sektor) => (
            <Grid key={sektor.id} item>
              <Paper className={classes.paper}>
                <Typography component="h5" variant="h6" align="center">
                  {sektor.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" align="center">
                  {sektor.subtitle}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {imageList}
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <BusinessCardTitle>Helse og omsorg</BusinessCardTitle>
            <Typography variant="subtitle1" color="textSecondary">
              Sykehus...
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cover} image={skapValle} title="Lhl-sykehuset" />
      </Card>
      <Card className={classes.card}>
        <CardMedia className={classes.cover} image={romLhl} title="Valle VGS" />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" align="center">
              Utdanning
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Skoler...
            </Typography>
          </CardContent>
          <div className={classes.controls}></div>
        </div>
      </Card>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" align="center">
              Næringsbygg
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Diverse næringsbygg...
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cover} image={statoil} title="Statoil resepsjonsdisk" />
      </Card>
    </Container>
  );
}

const Home = () => {
  const classes = useStyles();
  const businessArea = BusinessCard();

  return (
    <>
      <Box pt={2} pr={-20} pl={-20} mb={-2}>
        <Grid container spacing={0} alignItems="center">
          <div className={classes.image}>
            <img src={forsidebilde2} alt="" className={classes.image} style={{ width: '100%', height: '600px' }} />
            <Typography className={classes.text1} variant="h2" gutterBottom color="textSecondary">
              Innredningsentrepentør
            </Typography>
            <Typography className={classes.text2} variant="h5" gutterBottom color="#041861">
              Leverer fast innredning hovedsaklig til helse, omsorgs og undervisningssektoren samt næringsbygg.
            </Typography>
          </div>
        </Grid>
      </Box>

      <Box pl={10} pr={10} pt={20} mb={10}>
        {businessArea}
      </Box>
      <Divider />
    </>
  );
};

export default Home;
