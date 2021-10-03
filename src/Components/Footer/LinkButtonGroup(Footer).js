import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="text" >
        <Button style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}>Privacy Policy</Button>
        <Button style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}>Terms of Use</Button>
        <Button style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}>Sales Policy</Button>
        <Button style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}>Legal</Button>
      </ButtonGroup>
    </div>
  );
}