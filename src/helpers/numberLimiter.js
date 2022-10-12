export const numberLimiter = (input) => {
  const hoursMaxLength = 2;

  return input.slice(0, hoursMaxLength);
};
