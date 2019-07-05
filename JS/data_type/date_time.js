let now = new Date("2019-07-05");
console.log(now);

let year = 2019;
let month = 9;
let date = 29;
let hours = 8;
let minutes = 9;
let seconds = 10;
let ms = 11;

let newNow = new Date(year, month, date, hours, minutes, seconds, ms);

console.log(newNow);
console.log(newNow.getFullYear());
console.log(newNow.getMonth());
console.log(newNow.getDate());
console.log(newNow.getHours());
console.log(newNow.getMinutes());
console.log(newNow.getSeconds());
console.log(newNow.getMilliseconds());

// the hour in UTC+0 time zone (London time without daylight savings)
console.log( newNow.getUTCHours() );

newNow.setFullYear(2020 , 10, 30)
console.log(newNow.getFullYear());
console.log(newNow.getMonth());
console.log(newNow.getDate());
console.log(newNow.getHours());
console.log(newNow.getMinutes());
console.log(newNow.getSeconds());
console.log(newNow.getMilliseconds());

let dateNumber = new Date();
console.log(+date); // the number of milliseconds, same as date.getTime()


let start = Date.now(); // start measuring time

// do the job
for (let i = 0; i < 100000000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // end measuring time

console.log( `The loop took ${end - start} ms` );

/*Bench MARK */
function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  let time1 = 0;
  let time2 = 0;
  
  // run bench(upperSlice) and bench(upperLoop) each 10 times alternating
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }
  
  console.log( 'Total time for diffSubtract: ' + time1 );
  console.log( 'Total time for diffGetTime: ' + time2 );

  let dateParse = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

  console.log(dateParse);