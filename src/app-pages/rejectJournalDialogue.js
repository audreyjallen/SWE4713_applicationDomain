import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Reject = () => {

  const [open, setOpen] = React.useState(false);

 // const [reason, setReason] = React.useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}
      style = {{backgroundColor: "#f7bf4f", color: "#000000"}}
      variant = "contained"
      disableElevation
      >
        REJECT
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Reject Journal Entry</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Reason for rejection:
          </DialogContentText>
          <input
            size='small'
            variant = "outlined"
            margin="dense"
            id="reason"
            label=""
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button style = {{backgroundColor: "#f7bf4f", color: "#000000"}}
            variant = "contained"
            disableElevation onClick={handleClose}>Cancel</Button>
          <Button style = {{backgroundColor: "#f7bf4f", color: "#000000"}}
            variant = "contained"
            disableElevation
            onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}