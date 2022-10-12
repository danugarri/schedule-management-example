import React from 'react';
import './LocalHours.css';
export const LocalHours = ({ localWorkingHours }) => {
  return (
    <div className='local-hours-container '>
      <p>{`${localWorkingHours} Horas`}</p>
      <p>11 horas al día</p>
    </div>
  );
};
