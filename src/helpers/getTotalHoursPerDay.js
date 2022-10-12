export const getTotalHoursPerDay = (array, dayName) => {
  return array
    .map((employee) => employee[dayName])
    .reduce((prev, current) => Number(prev) + Number(current), []);
};
