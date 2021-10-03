import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import SimpleDialogDemo5 from './DialogBox(Q1FAQPage)';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#BFE5F5'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard6() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Grid container wrap="nowrap" spacing={2}
            direction="row"
            alignItems="center"
          >

            <Grid item>
              <HelpIcon style={{ color: "#0096D6" }} />
            </Grid>
            <Grid item xs>
              <SimpleDialogDemo5 />
            </Grid>
          </Grid>
        </CardContent>
        {/* <CardActions>
        
      </CardActions> */}
      </CardActionArea>
    </Card>
  );
}
