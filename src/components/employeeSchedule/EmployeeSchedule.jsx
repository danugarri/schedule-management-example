import React from 'react';
import { EmployeeTable } from './employeeTable/EmployeeTable';

export const EmployeeSchedule = ({ schedule }) => {
  return <EmployeeTable schedule={schedule} />;
};
