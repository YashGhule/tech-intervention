import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import SmsIcon from '@material-ui/icons/Sms';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


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
      <Button><CallIcon />Call</Button>
      <Button><EmailIcon />Email</Button>
      <Button><SmsIcon />SMS</Button>
      <Button><WhatsAppIcon />Whatsapp</Button>
    </div>
  );
}