import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px',
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
        <Button style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}><Typography style={{ fontFamily: "SFPro", fontSize: "12px", textTransform: "capitalize" }}> Privacy Policy </Typography></Button>
        <Button style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}><Typography style={{ fontFamily: "SFPro", fontSize: "12px", textTransform: "capitalize" }}> Terms of Use </Typography></Button>
        <Button style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}><Typography style={{ fontFamily: "SFPro", fontSize: "12px", textTransform: "capitalize" }}> Sales Policy </Typography></Button>
        <Button style={{ color: "#FFFFFF", borderColor: "#FFFFFF" }}><Typography style={{ fontFamily: "SFPro", fontSize: "12px", textTransform: "capitalize" }}> Legal </Typography></Button>
      </ButtonGroup>
    </div>
  );
}