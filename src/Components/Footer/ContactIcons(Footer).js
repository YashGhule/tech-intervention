import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import SmsIcon from '@material-ui/icons/Sms';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

export default function BasicButtonGroup2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button><CallIcon style={{ color: "#00529C" }} /><Typography style={{ color: "#00529C", fontFamily: "Montserrat", fontSize: "12px", textTransform: "capitalize" }}> Call </Typography></Button>
      <Button><EmailIcon style={{ color: "#00529C" }} /><Typography style={{ color: "#00529C", fontFamily: "Montserrat", fontSize: "12px", textTransform: "capitalize" }}> Email </Typography></Button>
      <Button><SmsIcon style={{ color: "#00529C" }} /><Typography style={{ color: "#00529C", fontFamily: "Montserrat", fontSize: "12px", textTransform: "capitalize" }}> SMS </Typography></Button>
      <Button><WhatsAppIcon style={{ color: "#00529C" }} /><Typography style={{ color: "#00529C", fontFamily: "Montserrat", fontSize: "12px", textTransform: "capitalize" }}> WhatsApp </Typography></Button>
    </div>
  );
}