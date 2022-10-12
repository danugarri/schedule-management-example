export const getRamdomSpecified = (workingHoursPerDay) => {
  let leaveOut = [1, 10]; //Values to be left out
  let random = getRandomArbitrary(0, workingHoursPerDay);
  while (leaveOut.includes(random)) {
    random = getRandomArbitrary(0, workingHoursPerDay);
  }
  //   console.log(random);

  // return random integer number between min (included) and max (excluded)
};
function getRandomArbitrary(minHoursPerDay, maxOrdinaryHoursPerDay) {
  return Math.floor(Math.random() * (maxOrdinaryHoursPerDay - minHoursPerDay + 1) + minHoursPerDay);
}

export const modifiedGetRamdomSpecified = (leaveOut, minHoursPerDay, maxOrdinaryHoursPerDay) => {
  //Values to be left out
  let random = getRandomArbitrary(minHoursPerDay, maxOrdinaryHoursPerDay);
  while (leaveOut.includes(random)) {
    random = getRandomArbitrary(2, 9);
  }
  return random;
};
