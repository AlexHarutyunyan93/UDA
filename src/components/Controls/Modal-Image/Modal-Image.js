import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CardMedia from "@material-ui/core/CardMedia/CardMedia";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 700,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1),
    },
    media: {
        width: "100%",
        height: 0,
        paddingTop: '50%', // 16:9
    },
}));

export function SimpleModal({handleCloseModal, open}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleCloseModal}
            >
                <div style={modalStyle} className={classes.paper}>
                    <CardMedia
                        className={classes.media}
                        image="public/images/item_1.jpg"
                        title="Paella dish"
                    />
                </div>
            </Modal>
        </div>
    );
}