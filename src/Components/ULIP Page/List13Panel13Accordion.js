import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  primary: {
    fontFamily: 'SFPro',
    fontWeight: 'normal',
    fontSize: 14,
  },
}));

export default function List13Panel13() {
  const classes = useStyles();

  return (
    <List className={classes.root} >
      <ListItem>
        <ListItemAvatar >
          <Avatar style={{ backgroundColor: "#FFDEE0", color: "#FF1721", fontFamily: "SFPro", fontSize: "18px" }}>
            1
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography className={classes.primary}>
            Go to the insurance company's official website.
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#FFDEE0", color: "#FF1721", fontFamily: "SFPro", fontSize: "18px" }}>
            2
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography className={classes.primary}>
            Select the Top ULIP plan in which you want to invest.
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#FFDEE0", color: "#FF1721", fontFamily: "SFPro", fontSize: "18px" }}>
            3
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography className={classes.primary}>
            Select the plan's insurance term and premium payment period
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#FFDEE0", color: "#FF1721", fontFamily: "SFPro", fontSize: "18px" }}>
            4
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography className={classes.primary}>
            To make a payment, click Proceed.
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#FFDEE0", color: "#FF1721", fontFamily: "SFPro", fontSize: "18px" }}>
            5
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography className={classes.primary}>
            You have the option of paying monthly, half-yearly, or annually.
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}