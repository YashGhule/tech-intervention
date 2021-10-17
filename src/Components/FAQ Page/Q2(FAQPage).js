import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import SimpleDialogDemo6 from './DialogBox(Q2FAQPage)';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#FFF6E2',
    borderRadius: 15
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

export default function SimpleCard7() {
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
              <HelpIcon style={{ color: "#FDBB30" }} />
            </Grid>
            <Grid item xs>
              <SimpleDialogDemo6 />
            </Grid>
          </Grid>
        </CardContent>
        {/* <CardActions>
        
      </CardActions> */}
      </CardActionArea>
    </Card>
  );
}
