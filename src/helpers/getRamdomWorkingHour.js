export const getRandomWorkingHour = (maxOrdinaryHoursPerDay, minHoursPerDay) =>
  Math.floor(Math.random() * (maxOrdinaryHoursPerDay - minHoursPerDay + 1) + minHoursPerDay);
