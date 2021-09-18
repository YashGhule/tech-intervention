import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import SimpleDialogDemo from './DialogBox';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

export default function SimpleCard11() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardContent>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
            <HelpIcon/>
        </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>What are some of the advantages of buying a ULIP policy online or offline?</Typography>
          </Grid>
          </Grid>
      </CardContent>
      {/* <CardActions>
        
      </CardActions> */}
      </CardActionArea>
    </Card>
  );
}