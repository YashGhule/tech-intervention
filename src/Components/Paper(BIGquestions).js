import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(200),
      height: theme.spacing(6),
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
  },
}));

export default function SimplePaper1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.header}>
        <Typography>Are these your life's BIG questions?</Typography>
      </Paper>
    </div>
  );
}
