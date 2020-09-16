import React from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import FacebookOutlinedIcon from '@material-ui/icons/Facebook';
import theme from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex'
  },
  inline: {
    display: 'inline',
  },
  section1: {
    margin: theme.spacing(0.5, 1),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    color: 'rgb(255, 255, 255)'
  },
  pos: {
    marginBottom: 12,
    color: 'rgb(255, 255, 255)'
  },
  heading: {
    color: 'rgb(255, 255, 255)'
  }
}));

const ansattList = [
  {
    name: "Roar Buøen",
    title: "Daglig leder/ prosjektleder",
    phone: "+47 920 20 762",
    mail: "roar.buoen@idema.no"
  },
  {
    name: "Aleksander Borge",
    title: "Prosjektleder",
    phone: "+47 480 20 042",
    mail: "aleksander.borge@idema.no"
  },
  {
    name: "Andreas Buøen",
    title: "Prosjektleder",
    phone: "+47 907 51 610",
    mail: "andreas.buoen@idema.no"
  },
  {
    name: "Kjetil Thøgersen",
    title: "Prosjektleder",
    phone: "+47 901 46 592",
    mail: "kjetil.thogersen@idema.no"
  },
  {
    name: "Ole Mørk Olsen",
    title: "Økonomiansvarlig",
    phone: "+47 902 11 232",
    mail: "ole.mork.olsen@idema.no"
  },
  {
    name: "Sentralbord",
    title: "",
    phone: "67 51 69 00",
    mail: "post@idema.no"
  }
]


export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <React.Fragment>
     
      <Container maxWidth="lg">
      <Box pt={5} >
          <Grid container spacing={10} style={{padding: '30px'}}>
            {ansattList.map( ansatt => 
                <Grid item xs={12} md={4}>
                <div className={classes.section1}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={ansatt.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          gutterBottom
                          color="textPrimary"
                        >
                          {ansatt.title}
                        </Typography>
                        <br/>
                        {ansatt.phone}
                        <br/>
                        {ansatt.mail}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                </div>
                <Divider variant="middle"  />
                </Grid>   
            )}
          </Grid>
        </Box>
      </Container>
      <Box pt={10} pl={15} pr={15} pb={10} mt={1} bgcolor={theme.palette.primary.main}>
            <Grid container spacing={2} >
              <Grid xs={4} component="span">
                <Typography variant="h6"  className={classes.heading}> 
                Besøksadresse
                </Typography>
                <Typography className={classes.pos} >
                Nesveien 13
                </Typography>
                <Typography className={classes.pos} >
                1344 Haslum
                </Typography>
              </Grid>
              <Grid xs={4} component="span">
                <Typography variant="h6"  className={classes.heading}>
                  Kontakt
                </Typography>
                <Typography className={classes.pos} >
                  67 51 69 00
                </Typography>
                <Typography  className={classes.pos}>
                  {'post@idema.no'}
                  <IconButton aria-label="share" href="https://www.facebook.com/idemaas/" target="_blank">
                   <FacebookOutlinedIcon style={{ color: 'rgb(255, 255, 255)' }}/>
                </IconButton>
                </Typography>
              </Grid>
            </Grid>
          {/* </CardActions>
        </Card> */}
      </Box>
      </React.Fragment>
        );
      }

    
   
