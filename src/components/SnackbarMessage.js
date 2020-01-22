import React from 'react'
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const SnackbarMessage = (props) => {
    return (
        <Snackbar open={props.open} onClose={props.onClose}>
            <Alert onClose={props.onClose} severity={props.type}>
                {props.children}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarMessage