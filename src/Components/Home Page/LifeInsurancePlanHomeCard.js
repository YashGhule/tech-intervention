import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InsetDividers from './LifeInsurancePlanHomeList';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#BFD3E6',
    borderRadius: 15
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});

export default function SimpleCard1() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item >
      <Card className={classes.root}>
        <CardContent >
          <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={12}>
              <Typography className={classes.title}>
                Life Insurance Plan For Every Possibility
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              {/* <CardActions > */}
              <InsetDividers />
              {/* </CardActions> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
