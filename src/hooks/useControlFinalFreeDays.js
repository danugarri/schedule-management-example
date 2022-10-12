export const useControlFinalFreeDays = (
  allDays,
  workingHoursPerDay,
  freeDays,
  setOpenControlFinalFreeDays,
) => {
  const controlFinalFreeDays = () => {
    let checkFinal = false;
    const candidateFreeDays = [];
    let checkedFinalFreeDays = true;

    for (const day in allDays) {
      if (allDays[day] === workingHoursPerDay) {
        checkFinal = true;
        candidateFreeDays.push(day);
      }
    }
    if (checkFinal) {
      freeDays.forEach((day1) => {
        const exists = candidateFreeDays.find((day2) => day2 === day1);
        if (!exists) {
          console.log('los días candidatos son' + candidateFreeDays);
          checkedFinalFreeDays = false;
          // launch modal
          setOpenControlFinalFreeDays(true);
        }
      });
    }
    return checkedFinalFreeDays;
  };
  return controlFinalFreeDays;
};
