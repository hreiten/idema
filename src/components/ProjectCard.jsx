import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 380,
  },
  media: {
    height: 250,
  },
});

export default function MediaCard({name, text, image}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
    
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography> */}
        </CardContent>
    </Card>
  );
}