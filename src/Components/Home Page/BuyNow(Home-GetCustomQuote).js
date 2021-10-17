import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      borderRadius: 20
    },
  },
}));

export default function ContainedButtons1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" style={{ backgroundColor: '#00529C', color: "#FFFFFF" }} >
        Buy Now
      </Button>
    </div>
  );
}