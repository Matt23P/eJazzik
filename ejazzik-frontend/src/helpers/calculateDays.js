export default function calculateDaysBetweenDates(dateRange) {
  let [date1, date2] = dateRange.split(" - ");

  let [day1, month1, year1] = date1.split(".").map(Number);
  let [day2, month2, year2] = date2.split(".").map(Number);

  year1 += 2000;
  year2 += 2000;

  let startDate = new Date(year1, month1 - 1, day1);
  let endDate = new Date(year2, month2 - 1, day2);

  let timeDifference = endDate - startDate;

  return timeDifference / (1000 * 60 * 60 * 24);
}
