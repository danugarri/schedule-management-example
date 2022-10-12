export const extractOnlyDays = (totalEmployees) => {
  const array = [];
  let final = {};
  totalEmployees.forEach(function (employee) {
    for (let day in employee) {
      if (day !== 'Employee' && day !== 'id') {
        final = {
          ...final,
          [day]: employee[day],
        };
      }
    }
    array.push(final);
  });
  console.log(array);
  return array;
};
