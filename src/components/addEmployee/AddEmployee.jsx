import React from 'react';
import { ExportCsv } from '../exportCsv/ExportCsv';

import './AddEmployee.css';

import { TotalEmployeesTable } from './totalEmployeesTable/TotalEmployeesTable';

export const AddEmployee = ({
  schedule,
  add,
  totalEmployees,
  setTotalEmployees,
  localWorkingHours,
  emptyTable,
}) => {
  const deleteEmployee = (typedEmployee) => {
    const newTotal = totalEmployees.filter((employee) => employee.id !== typedEmployee.id);
    setTotalEmployees(newTotal);
  };

  return (
    <>
      {schedule.hasOwnProperty('monday') && (
        <div className='total-buttons'>
          <button onClick={add} className='space'>
            Añadir Empleado
          </button>
          <button onClick={emptyTable} className='space'>
            Vaciar Tabla
          </button>
          <ExportCsv csvData={totalEmployees} />
        </div>
      )}
      <TotalEmployeesTable
        schedule={schedule}
        totalEmployees={totalEmployees}
        deleteEmployee={deleteEmployee}
        localWorkingHours={localWorkingHours}
      />
    </>
  );
};
