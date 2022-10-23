export const useMaxFourtyHours = (setOpenMaxFourtyHoursModal) => {
  const isMaxFourtyHours = (ordinaryEmployeeHours) => {
    if (ordinaryEmployeeHours > 40) {
      setOpenMaxFourtyHoursModal(true);
      return true;
    } else {
      return false;
    }
  };
  return isMaxFourtyHours;
};
