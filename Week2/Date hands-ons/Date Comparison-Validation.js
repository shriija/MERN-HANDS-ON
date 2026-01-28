// Assignment 2: Date Comparison & Validation (Beginner -> Intermediate)
// ---------------------------------------------------------------------

// Given:
let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
// 1. Check if:
// * Today is before deadline -> "Enrollment Open"
let todayDate = new Date() // Using current date

if (enrollmentDeadline > todayDate) {
    console.log("Enrollment Open")
} 
// * Today is after deadline -> "Enrollment Closed"
else {
    console.log("Enrollment closed")
}

// 2. Validate user input date:
// * Input: "2026-02-30"
let inputStr = "2026-02-30"
let testDate = new Date(inputStr)

// * Detect whether the date is valid or invalid

if (isNaN(testDate.getTime()))//return NAN for invalid dates 
{
    console.log("Invalid date")
}
else{
    console.log("valid date ")
}
  