import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';
import SimpleDialogDemo3 from './DialogBox(AnsQueCard3)';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#FFECE8',
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

export default function SimpleCard4() {
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
              <HelpIcon style={{ color: "#FF735D" }} />
            </Grid>
            <Grid item xs>
              <SimpleDialogDemo3 />
            </Grid>
          </Grid>
        </CardContent>
        {/* <CardActions>
        
      </CardActions> */}
      </CardActionArea>
    </Card>
  );
}
