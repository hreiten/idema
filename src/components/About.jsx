import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography }  from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
      <Container maxWidth="lg">
        <Box pt={15} pb={15} pl={20} pr={20}>
        <Paper className={classes.root}>
        <Typography variant="h2" component="h3">
            Om oss
        </Typography>
        <Typography component="div" variant={"subtitle1"}> 
            {<br/>}
            IDEMA AS er innredningsentrerprenør og totalleverandør av fast innredning til offentlig og privat sektor.
          </Typography>
          <Typography variant={"subtitle1"}>
            Våre største og viktigste forretningsområder er:
            {<br/>}
          </Typography>
          {<br/>}
          <Typography variant={"body1"} >
            Sykehus
            {<br/>} 
            Sykehjem
            {<br/>} 
            Skoler 
            {<br/>}
            Barnehager
            {<br/>} 
            Kulturinstitusjoner 
            {<br/>}
            Næringsbygg 
            {<br/>}
            Hoteller 
            {<br/>}
            {<br/>}
          </Typography>
          <Typography variant={"subtitle1"}>
            {'IDEMA A/S ble etablert i Trondheim i 1985 og har i dag hovedkontor på Haslum, I Bærum.'}
            {<br/>}
            Idema består av 13 ansatte i prosjekt og administrasjon, og 12 ansatte arbeidsledere og montører.
            {<br/>}
            Vi har fokus på riktig kvalitet tilpasset kundens behov og være en god samarbeidspartner i prosjektgjennomføring.  
        </Typography>
        </Paper>
        </Box>
    </Container>
  );
}