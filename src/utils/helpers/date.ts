const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const today = new Date();
const year = today.getFullYear();
const monthName = monthNames[today.getMonth()];
const date = today.getDate();
const hour = today.getHours();
const min = today.getMinutes();

export const lastLoginDate = `${monthName} ${date}, ${year}`;
export const lastLoginTime = `${hour}:${min}`;
export const lastLogin = `${lastLoginDate} at ${lastLoginTime}`;
