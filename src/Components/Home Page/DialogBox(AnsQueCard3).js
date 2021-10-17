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
import Grid from '@material-ui/core/Grid';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },

    type: {
        fontFamily: 'SFPro',
        fontWeight: 'normal',
        fontSize: 15,
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
            <DialogTitle id="simple-dialog-title"> How much life insurance cover do I need?</DialogTitle>
            <List>
                <ListItem >
                    As a rule of the thumb, your life insurance cover should be at least 10 times your annual income. For example, if your annual income is ₹8 lakh, your life insurance cover should be at least ₹80 lakh. Although 80 lakh - 1 crore can seem like a huge sum, you can get it for a monthly premium as low as ₹1000 (for a 30-year-old non-smoker). Your medical bills are also likely to go up with time, and so a substantial amount is needed to cover future medical costs.
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

export default function SimpleDialogDemo3() {
    const classes = useStyles();
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
                <Typography className={classes.type} style={{ fontFamily: "SFPro", fontSize: "15px", textTransform: "capitalize" }}>
                    How much life insurance cover do I need?
                </Typography>
            </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}
