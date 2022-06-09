import React, { useState } from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';

import Styles from './toaster.module.css';

const Toaster = ({ statement, handleClose }) => {
    const [open, setOpen] = useState(true);

    const closeToast = () => {
        setOpen(false);
        handleClose();
    }

    return (
        <Snackbar
            variant="error"
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}
            open={open}
            onClose={closeToast}
            autoHideDuration={3000}
        >
            <SnackbarContent
                className={Styles.error}
                message={
                    <div>
                        <span style={{ marginRight: "8px" }}>
                            <ErrorIcon fontSize="large" color="error" />
                        </span>
                        <span> {statement} </span>
                    </div>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        onClick={closeToast}
                    >
                        <CloseIcon color="error" /> 
                    </IconButton>
                ]}
            />
        </Snackbar>
    )
};

export default Toaster;
