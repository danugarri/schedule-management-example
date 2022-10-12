import { getTotalHoursPerDay } from '../helpers/getTotalHoursPerDay';

export const useGetAllTotalHours = (array) => {
  const allMonday = getTotalHoursPerDay(array, 'monday');
  const allTuesday = getTotalHoursPerDay(array, 'tuesday');
  const allWednesday = getTotalHoursPerDay(array, 'wednesday');
  const allThursday = getTotalHoursPerDay(array, 'thursday');
  const allFriday = getTotalHoursPerDay(array, 'friday');
  const allSaturday = getTotalHoursPerDay(array, 'saturday');
  const allSunday = getTotalHoursPerDay(array, 'sunday');
  const allDays = {
    monday: allMonday,
    tuesday: allTuesday,
    wednesday: allWednesday,
    thursday: allThursday,
    friday: allFriday,
    saturday: allSaturday,
    sunday: allSunday,
  };
  return allDays;
};
