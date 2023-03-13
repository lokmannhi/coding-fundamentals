function getDays(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));
  return diffDays;
}

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
console.log(
  getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))
);
console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")));
