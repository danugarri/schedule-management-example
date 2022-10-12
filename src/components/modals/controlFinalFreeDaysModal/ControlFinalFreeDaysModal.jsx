import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function ControlFinalFreeDaysModal({
  openControlFinalFreeDays,
  setOpenControlFinalFreeDays,
  candidateFreeDays,
}) {
  const handleClose = () => setOpenControlFinalFreeDays(false);
  const freeDaysList = candidateFreeDays.map((day) => <li key={day}>{day}</li>);
  return (
    <div>
      <Modal
        open={openControlFinalFreeDays}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setOpenControlFinalFreeDays(false);
          }
        }}
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <p className='conclusion'>Modifica los DÍAS LIBRES</p>
            <p>{`Los posibles días libres son :`}</p>
            <ul>{freeDaysList}</ul>
            <button onClick={handleClose} className='close-button '>
              X
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
