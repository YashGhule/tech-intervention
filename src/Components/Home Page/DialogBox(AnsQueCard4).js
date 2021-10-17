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
            <DialogTitle id="simple-dialog-title">What are the benefits of buying life insurance?</DialogTitle>
            <List>
                <ListItem >
                    Life insurance offers three major benefits:
                </ListItem>
                <ListItem>
                    <Grid item xs={12} sm={12} md={12}>
                        <h4>
                            Protection
                        </h4>
                        Life is full of uncertainties; investing in a life insurance plan provides a safety net. Your insurance provider is liable to pay your beneficiary or nominee the pre-determined death benefit, thus keeping your family protected even in your absence.
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid item xs={12} sm={12} md={12}>
                        <h4>
                            Long-term savings
                        </h4>
                        It is important to consider life insurance if you are seeking to make long-term savings. The suitable product helps you to save systematically and build a corpus for your future; its accumulated amount may be used for your life goals. What’s more, life insurance plans also offer regular pay-outs in the form of annuities, and are therefore, an excellent tool to finance your retirement goals.
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid item xs={12} sm={12} md={12}>
                        <h4>
                            Investment
                        </h4>
                        Unit-Linked Investment Plans (ULIPs) offered by life insurance providers are primarily investment instruments. These market-linked products create wealth. ULIPs offer significant returns on premiums paid towards the insurance policy. Most plans provide considerable returns during maturity, thus making them an attractive investment vehicle.

                        Besides this, life insurance plans offer a host of other benefits, like tax deductions under Section 10, 80C, and 80CCC of the Income Tax Act, 1961 on the premium paid. You may also borrow a loan against your insurance plan if needed.

                        Life insurance plans provide financial support to you and your family. Buying an insurance policy also inculcates the habit of disciplined savings.
                    </Grid>
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

export default function SimpleDialogDemo4() {
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
                    What are the benefits of buying life insurance?
                </Typography>
            </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}
