import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        Idema
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl">
        {/* <Typography variant="h6" align="center" gutterBottom>
          {'IDEMA'}
        </Typography> */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p" backgroundColor="primary">
          {'IDEMA As |  post@idema.no | '}
          <Link color="primary" target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Nesveien+13,+1344+Haslum/@59.9164783,10.5532062,17z/data=!3m1!4b1!4m5!3m4!1s0x4641132ffed89cfd:0xe6b95102e078aa7a!8m2!3d59.9164783!4d10.5554002">
         {'Nesveien 13 1344 Haslum'}
          </Link>
       {'  |  '}
          <Link color="primary" target="_blank" rel="noreferrer" href="https://www.facebook.com/idemaas/">
      {' Facebook'} 
          </Link>

        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
