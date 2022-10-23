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

export default function MaxHoursModal({
  openMaxHoursAccordingToFreeDays,
  setOpenMaxHoursAccordingToFreeDays,
  maxHoursToDo,
}) {
  const handleClose = () => setOpenMaxHoursAccordingToFreeDays(false);

  return (
    <div>
      <Modal
        open={openMaxHoursAccordingToFreeDays}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setOpenMaxHoursAccordingToFreeDays(false);
          }
        }}
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <>
              <p className='conclusion'>Modifica los DÍAS LIBRES</p>
              <p>{`El máximo de horas que se pueden hacer de acuerdo con los días libres seleccionados es: ${maxHoursToDo}`}</p>
            </>
            <button onClick={handleClose} className='close-button '>
              X
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
