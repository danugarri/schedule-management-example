import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../BasicModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EmployeeModal({ openEmployeeModal, setOpenEmployeeModal }) {
  const handleClose = () => setOpenEmployeeModal(false);

  return (
    <div>
      <Modal
        open={openEmployeeModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setOpenEmployeeModal(false);
          }
        }}
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <p className='confirmation'>Calculado nuevo empleado</p>
            <button type='button' onClick={handleClose} className='close-button' id='close'>
              X
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
