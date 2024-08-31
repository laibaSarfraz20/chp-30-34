let now = new Date();
document.write("Current Date and Time:", now.toString());
document.write("Current Date and Time:", now.toLocaleString());
// 2
let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

let nows = new Date();
let currentMonthIndex = nows.getMonth();
let currentMonth = monthNames[currentMonthIndex];
document.write("Current month:", currentMonth); 

// 3

let today = new Date();
let currentDayIndex = now.getDay(); 
let currentDayShort = days[currentDayIndex].slice(0, 3); 
document.write("Current day (first 3 letters):", currentDayShort); 

// 4
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = new Date();
let currentDay = days[now.getDay()];
let message = currentDay === "Saturday" || currentDay === "Sunday" ? "It's Fun day!" : "Not a Fun day yet.";
document.write(message); 

// 5

const day1 = new Date();
const currentDate = now.getDate();
const message1 = currentDate < 16 ? "First fifteen days of the month" : "Last days of the month";
console.log(message1);
