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
            <DialogTitle id="simple-dialog-title">  Is ULIP a good option for investment?</DialogTitle>
            <List>
                <ListItem >
                    A ULIP plan is a policy plan that offers both investments as well as insurance benefits. Besides providing life cover, the ULIP policy also provides the benefit of market-linked returns. ULIP helps inculcate the habit of regular and disciplined savings, which also helps in long-term financial management. Hence, the ULIP insurance plans are a great option for creating life cover with wealth creation benefits for your loved ones and family members.
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

export default function SimpleDialogDemo6() {
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
                    Is ULIP a good option for investment?
                </Typography>
            </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}
