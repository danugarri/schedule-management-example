export const getWorkingDays = (freeDays) => {
  return 7 - freeDays.length;
};

export const isCorrectNumberOfFreeDays = (freeDays, ordinaryEmployeeHours) => {
  const workingDays = 7 - freeDays.length;
  const maxFreeDays = ordinaryEmployeeHours / workingDays;
  const maxHoursPerDay = 9;
  const correctFreedays = maxFreeDays <= maxHoursPerDay;

  return correctFreedays;
};
