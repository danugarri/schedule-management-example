import React, { useState } from 'react';
import './App.css';
import { AddEmployee } from './components/addEmployee/AddEmployee';
import { EmployeeSchedule } from './components/employeeSchedule/EmployeeSchedule';
import { Inputs } from './components/inputs/Inputs';
import Spinner from './components/loaders/spinner/Spinner';
import { LocalHours } from './components/localHours/LocalHours';
import BasicModal from './components/modals/BasicModal';
import ControlFinalFreeDaysModal from './components/modals/controlFinalFreeDaysModal/ControlFinalFreeDaysModal';
import EmployeeModal from './components/modals/employeeModal/EmployeeModal';
import LeftHoursModal from './components/modals/leftHoursModal/LeftHoursModal';
import MaxFreeDaysModal from './components/modals/maxFreeDays/MaxFreeDays';
import SameIdModal from './components/modals/sameIdModal/SameIdModal';
import { extractOnlyDays } from './helpers/extractOnlyDays';
import { getCandidateFreeDays } from './helpers/getCandidateFreeDays';
import { getTotalHoursPerEmployee } from './helpers/getTotalEmployeeHours';
import { getTotalSumation } from './helpers/getTotalSumation';
import { useGetAllTotalHours } from './hooks/useGetAllTotalHours';

function App() {
  const [schedule, setSchedule] = useState({});
  const [freeDays, setFreeDays] = useState([]);
  const [ordinaryEmployeeHours, setOrdinaryEmployeeHours] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [totalEmployees, setTotalEmployees] = useState([]);
  const localWorkingHours = 77;
  const workingHoursPerDay = 11;
  // Array with an object with the worked hours per day
  const workedHoursPerDays = extractOnlyDays(totalEmployees);
  const allDays = useGetAllTotalHours(workedHoursPerDays);
  const totalSumation = getTotalSumation(allDays);
  const leftWorkingHours = localWorkingHours - totalSumation;
  const candidateFreeDays = getCandidateFreeDays(allDays, workingHoursPerDay);

  const emptyTable = () => {
    setTotalEmployees([]);
  };
  const add = () => {
    const totalHoursPerEmployee = getTotalHoursPerEmployee(schedule);
    const newSchedule = { ...schedule };
    // let recalculatedSchedule = { ...schedule };
    newSchedule.totalHours = totalHoursPerEmployee;
    // recalculatedSchedule.id = id;
    // recalculatedSchedule.totalHours = totalHoursPerEmployee;
    // recalculateHours.totalHours = totalHoursPerEmployee;
    // recalculateHours(recalculatedSchedule, newSchedule, totalHoursPerEmployee);
    const notCalculatedNewSchedule = totalEmployees.find((employee) => employee.id === schedule.id);
    if (!notCalculatedNewSchedule) {
      setTotalEmployees((prev) => prev.concat(newSchedule));
    } else {
      setOpenSameIdModal(true);
    }
  };

  // Modals
  const [open, setOpen] = useState(false);
  const [openFreeDaysModal, setOpenFreeDaysModal] = useState(false);
  const [openEmployeeModal, setOpenEmployeeModal] = useState(false);
  const employeeConfirmation = () => {
    setOpenEmployeeModal(true);
  };
  const [openLeftHoursModal, setOpenLeftHoursModal] = useState(false);
  const [openSameIdModal, setOpenSameIdModal] = useState(false);
  const [openControlFinalFreeDays, setOpenControlFinalFreeDays] = useState(false);
  // Loader
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='app'>
      <LocalHours localWorkingHours={localWorkingHours} />
      <Inputs
        setSchedule={setSchedule}
        freeDays={freeDays}
        setFreeDays={setFreeDays}
        ordinaryEmployeeHours={ordinaryEmployeeHours}
        setOrdinaryEmployeeHours={setOrdinaryEmployeeHours}
        open={open}
        setOpen={setOpen}
        openFreeDaysModal={openFreeDaysModal}
        setOpenFreeDaysModal={setOpenFreeDaysModal}
        employeeName={employeeName}
        setEmployeeName={setEmployeeName}
        setTotalEmployees={setTotalEmployees}
        totalEmployees={totalEmployees}
        employeeConfirmation={employeeConfirmation}
        allDays={allDays}
        leftWorkingHours={leftWorkingHours}
        setOpenLeftHoursModal={setOpenLeftHoursModal}
        emptyTable={emptyTable}
        workingHoursPerDay={workingHoursPerDay}
        setOpenControlFinalFreeDays={setOpenControlFinalFreeDays}
        localWorkingHours={localWorkingHours}
        setIsLoading={setIsLoading}
      />
      {!isLoading ? <EmployeeSchedule schedule={schedule} /> : <Spinner />}
      <BasicModal open={open} setOpen={setOpen} />
      <MaxFreeDaysModal
        openFreeDaysModal={openFreeDaysModal}
        setOpenFreeDaysModal={setOpenFreeDaysModal}
      />
      <EmployeeModal
        openEmployeeModal={openEmployeeModal}
        setOpenEmployeeModal={setOpenEmployeeModal}
        employeeConfirmation={employeeConfirmation}
      />
      <LeftHoursModal
        openLeftHoursModal={openLeftHoursModal}
        setOpenLeftHoursModal={setOpenLeftHoursModal}
        leftWorkingHours={leftWorkingHours}
        totalSumation={totalSumation}
        localWorkingHours={localWorkingHours}
      />
      <SameIdModal openSameIdModal={openSameIdModal} setOpenSameIdModal={setOpenSameIdModal} />
      <ControlFinalFreeDaysModal
        openControlFinalFreeDays={openControlFinalFreeDays}
        setOpenControlFinalFreeDays={setOpenControlFinalFreeDays}
        candidateFreeDays={candidateFreeDays}
      />
      <AddEmployee
        schedule={schedule}
        add={add}
        totalEmployees={totalEmployees}
        setTotalEmployees={setTotalEmployees}
        localWorkingHours={localWorkingHours}
        emptyTable={emptyTable}
      />
    </div>
  );
}

export default App;
