// Assignment 1: Date Creation & Extraction (Beginner)
// --------------------------------------------------

// Tasks:
// 1. Create a Date object for current date & time.
let d1 = new Date()

// 2. Extract and display:
// * Year
let year = d1.getFullYear()
console.log(year)

// * Month (human readable)
let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
let monthIndex = d1.getMonth()
console.log(months[monthIndex]);

// * Date
let date = d1.getDate()
console.log(date)

// * Day of week
let day = d1.getDay();
console.log(day) // Returns 0-6 (Sunday-Saturday)

// * Hours, minutes, seconds
console.log(d1.getHours(), "hours,", d1.getMinutes(), "minutes,", d1.getSeconds(), "seconds")

// 3. Display the date in this format:
// DD-MM-YYYY HH:mm:ss
console.log(d1.toString())