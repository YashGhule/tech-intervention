import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">What's the claim settlement ratio and the reasons for claim repudiation?</DialogTitle>
      <List>
        <ListItem >
          Claim Settlement ratio is the ratio of Claims Settled against claims reported during the year. Some of the reasons for claim repudiation are as listed below:
        </ListItem>
        <ListItem>
          Disclosure of medical adversities
        </ListItem>
        <ListItem>
          Incorrect disclosure of Age
        </ListItem>
        <ListItem>
          Incorrect disclosure of occupation/income
        </ListItem>
        <ListItem>
          Non –disclosure of previous insurance
        </ListItem>
        <ListItem>
          Fraud
        </ListItem>
        <ListItem>
          Please note: The above-mentioned list is only indicative and not an exhaustive list.
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo1() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1"></Typography> */}
      <Button onClick={handleClickOpen}>
        <Typography style={{ textTransform: 'normal' }}>
          What's the claim settlement ratio and the reasons for claim repudiation?
        </Typography>
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
