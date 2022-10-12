import { useEffect, useRef } from 'react';
import { extractOnlyDays } from '../helpers/extractOnlyDays';
import { useGetAllTotalHours } from './useGetAllTotalHours';

export const useControlTotalHours = (totalEmployees, schedule) => {
  console.log(totalEmployees);

  let isMoreThanNeeded = useRef(false);
  let recalculatedSchedule = useRef({});
  // Array with an object with the worked hours per day
  const workedHoursPerDays = extractOnlyDays(totalEmployees);

  const allDays = useGetAllTotalHours(workedHoursPerDays);
  for (let totalPerDay in allDays) {
    console.log(allDays[totalPerDay]);
  }
  useEffect(() => {
    let newSchedule = { ...schedule };
    const recalculateHours = () => {
      for (let totalPerDay in allDays) {
        console.log(allDays[totalPerDay]);
        if (allDays[totalPerDay] > 11) {
          isMoreThanNeeded.current = true;
          newSchedule = {
            ...newSchedule,
            [totalPerDay]: schedule[totalPerDay] - (allDays[totalPerDay] - 11),
          };
        }

        console.log('entraaaaaaaaaaaaaa');
        // setSchedule(schedule);
      }
      console.log(newSchedule);
      recalculatedSchedule.current = newSchedule;
    };

    recalculateHours();
  }, [allDays, schedule]);
  return [isMoreThanNeeded, recalculatedSchedule];
};
