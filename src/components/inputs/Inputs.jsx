import React, { useRef } from 'react';
import { useManegeSchedule } from '../../hooks/useManegeSchedule';
import { numberLimiter } from '../../helpers/numberLimiter';
import { removeItemFromArr } from '../../helpers/removeDays';
import { isCorrectNumberOfFreeDays } from '../../helpers/getWorkingDays';
import './Inputs.css';
import { useControlFinalFreeDays } from '../../hooks/useControlFinalFreeDays';
import { checkMaxHoursAccordingToFreeDays } from '../../helpers/checkMaxHoursAccordingToFreeDays';

export const Inputs = ({
  setSchedule,
  setFreeDays,
  freeDays,
  ordinaryEmployeeHours,
  setOrdinaryEmployeeHours,
  setOpen,
  open,
  employeeName,
  setEmployeeName,
  openFreeDaysModal,
  setOpenFreeDaysModal,
  employeeConfirmation,
  totalEmployees,
  allDays,
  leftWorkingHours,
  setOpenLeftHoursModal,
  emptyTable,
  workingHoursPerDay,
  setOpenControlFinalFreeDays,
  localWorkingHours,
  setIsLoading,
  openMaxHoursAccordingToFreeDays,
  setOpenMaxHoursAccordingToFreeDays,
}) => {
  const mondayRef = useRef();
  const tuesdayRef = useRef();
  const wednesdayRef = useRef();
  const thursdayRef = useRef();
  const fridayRef = useRef();
  const saturdayRef = useRef();
  const sundayRef = useRef();
  const controlFinalFreeDays = useControlFinalFreeDays(
    allDays,
    workingHoursPerDay,
    freeDays,
    setOpenControlFinalFreeDays,
  );
  const checkedDay = (e) => {
    console.log(e);
    const isChecked = e.target.checked;
    const value = e.target.name;
    if (isChecked) {
      setFreeDays((prev) => prev.concat([value]));
    } else {
      removeItemFromArr(freeDays, value);
    }
    console.log(isChecked);
  };
  console.log(freeDays);
  const scheduleManagement = useManegeSchedule(
    ordinaryEmployeeHours,
    totalEmployees,
    allDays,
    freeDays,
    workingHoursPerDay,
    localWorkingHours,
  );
  const submitEmployeeSchedule = (e) => {
    e.preventDefault();

    // Checking if it is possible have the entered number of freedays
    const correctFreedays = isCorrectNumberOfFreeDays(freeDays, ordinaryEmployeeHours);
    const maxHoursToDo = checkMaxHoursAccordingToFreeDays(allDays, workingHoursPerDay, freeDays);
    const isInCorrectedMaxHours =
      freeDays.length > 0 && maxHoursToDo < Number(ordinaryEmployeeHours);
    const isCorrectedLeftHours = leftWorkingHours < ordinaryEmployeeHours;
    // check final
    const checkedFinalFreeDays = controlFinalFreeDays();

    if (
      ordinaryEmployeeHours !== 0 &&
      ordinaryEmployeeHours >= 10 &&
      correctFreedays &&
      !isInCorrectedMaxHours
    ) {
      if (
        leftWorkingHours >= ordinaryEmployeeHours &&
        !openMaxHoursAccordingToFreeDays &&
        checkedFinalFreeDays
      ) {
        setIsLoading(true);
        const getSchedule = async () => {
          const response = await scheduleManagement(1, employeeName);
          return response;
        };
        getSchedule().then((data) => {
          setSchedule(data);
          setIsLoading(false);
          employeeConfirmation();
        });
      }
    }
    if (isCorrectedLeftHours) {
      setOpenLeftHoursModal(true);
    }
    if (ordinaryEmployeeHours === 0 || ordinaryEmployeeHours < 10) {
      setOpen(!open);
    }
    // if (!correctFreedays) {
    //   setOpenFreeDaysModal(!openFreeDaysModal);
    // }
    if (isInCorrectedMaxHours && !isCorrectedLeftHours) {
      setOpenMaxHoursAccordingToFreeDays(true);
    }
  };
  const clearSearch = () => {
    //   This part can be optional
    setOrdinaryEmployeeHours('');
    setEmployeeName('');
    mondayRef.current.checked = false;
    tuesdayRef.current.checked = false;
    wednesdayRef.current.checked = false;
    thursdayRef.current.checked = false;
    fridayRef.current.checked = false;
    saturdayRef.current.checked = false;
    sundayRef.current.checked = false;
    setSchedule([]);
    emptyTable();
    //
  };
  return (
    <React.Fragment>
      <form onSubmit={submitEmployeeSchedule}>
        <label htmlFor='ordinaryEmployeeHours' className='employee-labels'>
          Horas del trabajador según contrato
        </label>
        <input
          type='number'
          name='ordinaryEmployeeHours'
          onChange={(e) => {
            const limittedNumber = numberLimiter(e.target.value);
            setOrdinaryEmployeeHours(limittedNumber);
            console.log(e.target.value);
          }}
          value={ordinaryEmployeeHours}
          autoFocus
        />
        <br />
        <label htmlFor='employee-name' className='employee-labels'>
          Empleado
        </label>
        <input
          type='text'
          name='employee-name'
          onChange={(e) => {
            const employee = e.target.value;
            setEmployeeName(employee);
            console.log(e.target.value);
          }}
          value={employeeName}
        />
        <br />
        <br />
        {/* checkboxes */}
        <label>Días libres</label>
        <br />
        <label htmlFor='monday'>Lunes</label>
        <input
          className='checkbox'
          type='checkbox'
          name='monday'
          onClick={checkedDay}
          ref={mondayRef}
        />
        <label htmlFor='tuesday'>Martes</label>
        <input
          className='checkbox'
          type='checkbox'
          name='tuesday'
          onClick={checkedDay}
          ref={tuesdayRef}
        />
        <label htmlFor='wednesday'>Miércoles</label>
        <input
          className='checkbox'
          type='checkbox'
          name='wednesday'
          onClick={checkedDay}
          ref={wednesdayRef}
        />
        <label htmlFor='thursday'>Jueves</label>
        <input
          className='checkbox'
          type='checkbox'
          name='thursday'
          onClick={checkedDay}
          ref={thursdayRef}
        />
        <label htmlFor='friday'>Viernes</label>
        <input
          className='checkbox'
          type='checkbox'
          name='friday'
          onClick={checkedDay}
          ref={fridayRef}
        />
        <label htmlFor='saturday'>Sábado</label>
        <input
          className='checkbox'
          type='checkbox'
          name='saturday'
          onClick={checkedDay}
          ref={saturdayRef}
        />
        <label htmlFor='sunday'>Domingo</label>
        <input
          className='checkbox'
          type='checkbox'
          name='sunday'
          onClick={checkedDay}
          ref={sundayRef}
        />

        <br />
        <br />
        <section className='buttons-section'>
          <input
            type='submit'
            value='Calcular'
            onClick={submitEmployeeSchedule}
            className='buttons'
          />
          <input type='button' value='Limpiar' onClick={clearSearch} className='buttons' />
        </section>
      </form>
    </React.Fragment>
  );
};
