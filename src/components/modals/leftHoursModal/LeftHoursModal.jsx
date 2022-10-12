import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './LeftHoursModal.css';

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

export default function LeftHoursModal({
  openLeftHoursModal,
  setOpenLeftHoursModal,
  leftWorkingHours,
  totalSumation,
  localWorkingHours,
}) {
  const handleClose = () => setOpenLeftHoursModal(false);

  return (
    <div>
      <Modal
        open={openLeftHoursModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setOpenLeftHoursModal(false);
          }
        }}
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <p className='conclusion'>Revisa el horario</p>
            <p>{`Este local abre ${localWorkingHours}h a la semana, 11h al día`}</p>
            <p>{`Actualmente se han registrado ${totalSumation} horas`}</p>
            <p>{`Faltan por registrar ${leftWorkingHours}`}</p>
            <br />
            <p className='conclusion'>{`Introduce un trabajador que realice como máximo las ${leftWorkingHours} horas restantes`}</p>
            <button onClick={handleClose} className='close-button '>
              X
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
