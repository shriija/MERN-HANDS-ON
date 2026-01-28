//Assignment 3: Age Calculator (Intermediate)
//-------------------------------------------
//Input:
    let dobString = "2000-05-15";
    let dob = new Date(dobString)
    let today = new Date()


//Tasks:
        //1. Calculate exact age in years
//find years
let years = today.getFullYear() - dob.getFullYear();
//find months
let months = today.getMonth() - dob.getMonth();
//find days
let days = today.getDate() - dob.getDate();

if (months < 0){
    years --;
    months = months + 12
}
 if (days < 0){
    months --
    //get no. of days of previous month of today
    let prev = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
    ).getDate()
    //add those dates
    days = days + prev
 }

 console.log("you are:", years, "years", months, "months", days, "days old")