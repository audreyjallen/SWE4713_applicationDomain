import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import './App.css'

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

export const HelpModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className = "button" onClick={handleOpen}>Help!</button>
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
            <h3>Managing Accounts</h3>
            <p>Accounts can be managed from the 'Chart of Accounts' page. The accounts are identified by their name and
            ID, though they can also be filtered by other characteristics such as balance and account type
            using the filter dropdown menu on the right-hand side of the screen. Accounts can be searched by name
            using the search bar located beside the filter tool.</p>

            <p>If you have managerial or accountant permissions, you will have the ability to view accounts. Adding,
            editing, and deactivating accounts are permissions reserved for administrators only. Account management
            options are found within the display of each account. Any account edits can be found in the change record.</p>

            <h3>Journalizing</h3>
            <p>Journal entries can be made for existing accounts only. Entries made by users with accountant-level
              clearance must be approved by management before changes will be reflected in the account's ledger. Transactions are
              required to include at least one debit and one credit, though multiple are allowed. Transactions may be
              filtered by date or date range, or searched by account name or amount. Changes will be reflected in the change
              log, and each individual entry can be viewed by its post reference.
            </p>
            <p>Managers may view all submitted journal entries, as well as sort by category (approved, pending, rejected).
              Entry requests may also be filtered by date.
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}