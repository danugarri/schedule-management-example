export const getTotalHoursPerEmployee = (schedule) => {
  let final = null;

  for (let day in schedule) {
    if (day !== 'Employee' && day !== 'id') {
      final += schedule[day];
    }
  }

  console.log(final);
  return final;
};
