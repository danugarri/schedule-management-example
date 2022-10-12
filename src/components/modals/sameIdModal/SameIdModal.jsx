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

export default function SameIdModal({ setOpenSameIdModal, openSameIdModal }) {
  const handleClose = () => setOpenSameIdModal(false);

  return (
    <div>
      <Modal
        open={openSameIdModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setOpenSameIdModal(false);
          }
        }}
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <p className='conclusion'>No puedes añadir 2 empleados con el mismo Id</p>
            <p>Calcula un nuevo horario antes de intentar añadir un empleado</p>
            <p className='conclusion'>Haz click en Calcular y luego en Añadir Empleado</p>
            <button onClick={handleClose} className='close-button '>
              X
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
