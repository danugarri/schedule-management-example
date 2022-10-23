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

export default function MaxFourtyHoursModal({
  openMaxFourtyHoursModal,
  setOpenMaxFourtyHoursModal,
}) {
  const handleClose = () => setOpenMaxFourtyHoursModal(false);

  return (
    <div>
      <Modal
        open={openMaxFourtyHoursModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setOpenMaxFourtyHoursModal(false);
          }
        }}
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <p className='conclusion'>El máximo de horas semanales por trabajador son 40h</p>
            <p>Introduce un número de horas igual o menor que 40h</p>
            <button onClick={handleClose} className='close-button '>
              X
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
