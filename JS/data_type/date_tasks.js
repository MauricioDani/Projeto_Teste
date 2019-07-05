/*Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local. */

let task1 = new Date(2012, 1, 20, 3, 12);

console.log(task1);
alert(task1);


/*Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’. */
let date = new Date(2012, 0, 3);  // 3 Jan 2012

let getWeekDay = function(date) {
    aDay = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
    return aDay[date.getDate()];
}

console.log( getWeekDay(date) );        // should output "TU"

/*European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date. */
let task3 = new Date(2012, 0, 3);  // 3 Jan 2012

let getWeekNumber = function(task3) {
    return task3.getDate()+1;
}

console.log( getWeekNumber(task3) );        // should output "TU"

/*Create a function getDateAgo(date, days) to return the day of month days ago from the date.

For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

Should work reliably for days=365 or more: */

let getDateAgo = function(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

console.log(getDateAgo(new Date(), 5));

/*Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

    year – four-digits year, for instance 2012.
    month – month, from 0 to 11.

For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb). */

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  console.log( getLastDayOfMonth(2019, 0) ); // 31
  console.log( getLastDayOfMonth(2019, 1) ); // 29
  console.log( getLastDayOfMonth(2019, 2) ); // 28