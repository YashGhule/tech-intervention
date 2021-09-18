import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Button>Icon</Button>
        <Button>Icon</Button>
        <Button>Icon</Button>
        <Button>Icon</Button>
        <Button>Icon</Button>
    </div>
  );
}