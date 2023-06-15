let date1 = document.querySelector(".date");
let day1 = document.querySelector(".day");
let month1 = document.querySelector(".month");
let year1 = document.querySelector(".year");

let months = ["January","February","March", "April", "May", "June", "July", "August", "September", "December"];
let days = ["Sunday", "Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];


function displayDate(){
    let allDate = new Date()
    let date = allDate.getDate();
    let day = allDate.getDay();
    let month = allDate.getUTCMonth()
    let year = allDate.getUTCFullYear()

    date1.innerHTML = date;
    day1.innerHTML = days[day];
    month1.innerHTML = months[month]
    year1.innerHTML = year;

}



displayDate();

