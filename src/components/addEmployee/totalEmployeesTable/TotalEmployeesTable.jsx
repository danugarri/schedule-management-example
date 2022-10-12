import React from 'react';
import { extractOnlyDays } from '../../../helpers/extractOnlyDays';
import { getTotalSumation } from '../../../helpers/getTotalSumation';
import { useGetAllTotalHours } from '../../../hooks/useGetAllTotalHours';
import style from './ScheduleTable.module.css';

export const TotalEmployeesTable = ({
  schedule,
  totalEmployees,
  deleteEmployee,
  localWorkingHours,
}) => {
  // Array with an object with the worked hours per day
  const workedHoursPerDays = extractOnlyDays(totalEmployees);
  const allDays = useGetAllTotalHours(workedHoursPerDays);
  const totalSumation = getTotalSumation(allDays);
  const leftWorkingHours = localWorkingHours - totalSumation;
  const leftHoursStyle =
    leftWorkingHours === 0 ? style.leftHoursTdcompleted : style.leftHoursTdIncompleted;
  return (
    <>
      {schedule.hasOwnProperty('monday') && (
        <table className={style.scheduleTable}>
          {
            <thead className={style.scheduleThead}>
              <tr>
                {Object.entries(schedule).map((day, index) => (
                  <td className={style.tdPadding} key={day + index}>
                    {day[0]}
                  </td>
                ))}
                <td key='hours' className={`${style.totalHoursHeader} ${style.tdPadding}`}>
                  Horas totales
                </td>
                <td key='left-hours' className={`${style.leftHoursHeader} ${style.tdPadding}`}>
                  Horas por cubrir
                </td>
              </tr>
            </thead>
          }
          <tbody>
            {totalEmployees.map((employee, employeeIndex) => {
              const employeeSchedule = Object.entries(employee);
              return (
                <tr key={employeeIndex}>
                  {employeeSchedule.map((day, index) => (
                    <td className={`${style.scheduleTBodyTd} ${style.tdPadding}`} key={index}>
                      {day[1]}
                    </td>
                  ))}
                  <td key='white-space'>{}</td>
                  <td key='button'>
                    <button className={style.deleteButton} onClick={() => deleteEmployee(employee)}>
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr className={style.results}>
              <th scope='row'>Totals</th>
              <td className={style.scheduleTBodyTd}>{allDays.monday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.tuesday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.wednesday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.thursday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.friday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.saturday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.sunday}</td>
              <td className={style.idColumn}>{}</td>
              <td className={style.totalHours}>{totalSumation}</td>
              <td key='left-working-hours' className={leftHoursStyle}>
                {leftWorkingHours}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};
