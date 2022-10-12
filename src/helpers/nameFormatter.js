export const nameFormatter = (employeeName) => {
  return `${employeeName.charAt(0).toUpperCase()}${employeeName.substring(1).toLowerCase()}`;
};
