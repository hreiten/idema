import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import IdemaLogo from '../images/logo.jpg';

const useStyles = makeStyles(theme => ({
  toolbarLogo: {
    alignItems: 'flex-end'
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
   // justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.divider}`,
    overflowX: 'auto',
    alignItems: 'baseline',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    textTransform: 'uppercase',
    flexShrink: 0,
  },
}));

const sections = [
  { title: 'Hjem', url: '/'},
  { title: 'Produkter', url: '/produkter' },
  { title: 'Prosjekter', url: '/prosjekter' },
  { title: 'Kontakt oss', url: '/kontakt' },
  { title: 'Om oss', url: '/om'} 
];

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="regular"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
         <Box pt={2} pl={5} pr={10} mr={0} ml={"auto"}>
          <Link
            href={'/'}
          >
           <img src={IdemaLogo} alt="IdemaLogo2" height="65" width="160"/>
          </Link>
        </Box>
      </Toolbar>
    </React.Fragment>
  );
}

  
        
        
        {/* Øverste toolbar
            <Toolbar className={classes.toolbar}>
        <Button disabled size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >   
        </Typography>
        <Box pt={2} className={classes.toolbarLogo}>
          <img src={IdemaLogo2} alt="IdemaLogo2" height="70" width="180"/>
        </Box>
      </Toolbar>
          <IconButton aria-label="delete" disableRipple="true" className={classes.logo}>
          <img src={IdemaLogo2} alt="IdemaLogo2" height="50" width="150"/>
        </IconButton> */}
        
         