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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function List13Panel13() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            1
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Go to the insurance company's official website." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            2
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Select the Top ULIP plan in which you want to invest." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            3
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Select the plan's insurance term and premium payment period." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            4
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="To make a payment, click Proceed." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            5
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="You have the option of paying monthly, half-yearly, or annually." />
      </ListItem>
    </List>
  );
}