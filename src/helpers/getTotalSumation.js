export const getTotalSumation = (allDays) => {
  let totalSumation = 0;
  for (let day in allDays) {
    totalSumation += allDays[day];
  }
  console.log(totalSumation);
  return totalSumation;
};
