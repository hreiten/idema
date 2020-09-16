import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography'

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SchoolIcon from '@material-ui/icons/School';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BusinessIcon from '@material-ui/icons/Business';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';

import undervisningsLob from '../images/forsideBilde.jpg';
import helseLob from '../images/Lhl-vindu.jpg';
import omsorgsLob from '../images/the-well-stoler.jpg';
import statoil from '../images/statoil.jpg';

import Sykehus from './Sykehus';
import Skole from './Skole';
import Barnehage from './Barnehage';
import Naeringsbygg from './Naeringsbygg';

export const tileData = [
    {
        img: helseLob,
        title: 'Helsesektoren',
        description: 'Sykehus, Labriatorier'
    },
    {
        img: undervisningsLob,
        title: 'Undervisningssektoren',
        description: 'Skoler, barnehager ++'
    },
    {
        img: omsorgsLob,
        title: 'Omsorgssektoren',
        description: 'Sykehjem, Velværesenter, '
    },
    {
        img: statoil,
        title: 'Privat næring',
        description: 'Diverse næringsbygg'
    }
]


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        marginTop:"95px",
        paddingTop: "100px"
      },
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.secondary,
        padding: theme.spacing(3),
      },
  }));



export default function BusinessArea(){
    const classes = useStyles();

    return(
        <React.Fragment>
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                <List>
                    <ListItem button >
                        <ListItemIcon>
                            <LocalHospitalIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Sykehus'} />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <SchoolIcon/>
                        </ListItemIcon>
                    <ListItemText primary={'Skole'} />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <ChildCareIcon/>
                        </ListItemIcon>
                    <ListItemText primary={'Barnehage'} />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <AccessibleForwardIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Sykehjem'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <BusinessIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Næringsbygg'} />
                    </ListItem>
                    <Divider />
                </List>
                </Drawer>
                <Container maxWidth="xl" > 
                {/* <Box pt={5} ml={-5} mr={-5}  pl={20}  bgcolor={theme.palette.primary.main}>
                    <Bredcrumb/>
                    <Typography variant="h6">
                        En beskrivelse/ intro ?? 
                    </Typography>
                </Box>  */}
                    <Box pt={5} pb={10}>
                        <Sykehus/>    
                    </Box> 
                    <Divider/>
                    <Box pt={5} pb={10}>
                        <Skole/>     
                    </Box> 
                    <Divider/>
                    <Box pt={5} pb={5}>
                        <Barnehage/>
                    </Box> 
                    <Divider/>  
                    <Box pt={5} pb={5}>
                        <Naeringsbygg/>
                    </Box> 
                    <Divider/> 
                </Container>
            </div>
        </React.Fragment>
    )
}

