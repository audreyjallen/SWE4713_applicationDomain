import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import '../App.css'
import { IconButton } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  outerHeight: 400,
  bgcolor: '#EBEAEA',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Journal1Modal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Link to = "/Journal1Modal">
      <IconButton>
                  <EditIcon className = "icon"/>
                 </IconButton></Link>
      <Modal
        overflowY = "scroll"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}
        maxHeight = {500}
        overflow = "scroll"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" align = "center">
          <h1><AccountTreeIcon htmlColor='#f7bf4f'></AccountTreeIcon> | AccountAbility</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h3>Account Name</h3>
            <p>Basic Assets Account</p>

            <h3>Account Number</h3>
            <p>12345</p>

            <h3>Account Description</h3>
            <p>First Account</p>
            
            <h3>Normal Side</h3>
            <p>Sales Account</p>

            <h3>Account Category</h3>
            <p>asset</p>

            <h3>Account Subcategory</h3>
            <p>current assets</p>

            <h3>Initial Balance</h3>
            <p>0</p>

            <h3>Debit</h3>
            <p>500</p>

            <h3>Credit</h3>
            <p>500</p>

            <h3>Balance</h3>
            <p>1000</p>

            <h3>Date Added</h3>
            <p>4/5/2023</p>

            <h3>Time Added</h3>
            <p>12:00 PM</p>

            <h3>User Id</h3>
            <p>1111</p>

            <h3>Order</h3>
            <p>Cash</p>

            <h3>Statement</h3>
            <p>Balance sheet</p>

            <h3>Comment(s)</h3>
            <p>None</p>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}