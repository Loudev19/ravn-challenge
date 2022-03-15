import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './DeleteConfirmation.css'

export default function DeleteConfirmation(props) {
  return (
    <Dialog
        open={props.isOpen}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation delete"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete this task?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <button className="text-button" 
                type="button" 
                onClick={props.onClose}>
                Cancel
            </button>
            <button className="colored-text-button" 
                type="button"
                onClick={props.onDelete} >
                Delete
            </button>
        </DialogActions>
    </Dialog>
  );
}
