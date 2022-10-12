import React from 'react';
import style from '../../employeeSchedule/EmployeeSchedule.module.css';
export const EmployeeTable = ({ schedule }) => {
  return (
    <>
      <table className={style.employeeTable}>
        <thead className={style.employeeThead}>
          <tr>
            {Object.entries(schedule).map((day, index) => (
              <td className={style.tdPadding} key={index}>
                {day[0]}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(schedule).map((day, index) => (
              <td className={`${style.employeeTBodyTd} ${style.tdPadding}`} key={index}>
                {day[1]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};
