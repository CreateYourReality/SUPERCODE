// ########### AUFGABE 1 #############
console.log(" %c ########## AUFGABE 1 ###########", "background-color:yellow;color:red;");


let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];
  
  let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ];

  
  let newDate = new Date();
  console.log(newDate);
  console.log(newDate.getFullYear());
  console.log(newDate.getMonth() + " Monat");
  console.log(newDate.getDay() + " Tag");
  console.log(newDate.getHours() + " Stunde");
  console.log(newDate.getMinutes() + " Minute");
  console.log(wochenTag[newDate.getDay()]);
  console.log(monate[newDate.getMonth()]);


// ########### AUFGABE 2 #############
console.log(" %c ########## AUFGABE 2 ###########", "background-color:yellow;color:red;");


let newDate2 = new Date();
let newDate3 = new Date("September 2, 2019 09:00:00");
let newDate4 = new Date(0);
let newDate5 = new Date(31556908800);
let newDate6 = new Date(86400000);

console.log(newDate2);
console.log(newDate3);
console.log(newDate4);
console.log(newDate5);
console.log(newDate6);


// ########### AUFGABE 3 #############
console.log(" %c ########## AUFGABE 3 ###########", "background-color:yellow;color:red;");

let date2 = new Date();

date2.setFullYear(2222);
console.log(date2);
date2.setFullYear(2123);
date2.setDate( date2.getDate() +1);
console.log(date2);
date2.setMonth(3);
console.log(date2);
date2.setDate(3);
console.log(date2);
date2.setDate(date2.getDate() + 30);
console.log(date2);

// ########### AUFGABE 4 #############
console.log(" %c ########## AUFGABE 4 ###########", "background-color:yellow;color:red;");

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];

  

const monatsName = (year,months,day) => {
    
    let newDate = new Date(year, months, day);

    if(newDate.getMonth() == 0){
        newDate.setMonth(11);
        console.log(list[newDate.getMonth()]);
    }else{
        console.log(list[newDate.getMonth() -1]);
    }

}

monatsName(2001,3,4);
monatsName(2019,12,24); //Dezember
monatsName(1410,07,15); //Juli


// ########### AUFGABE 5 #############
console.log(" %c ########## AUFGABE 5 ###########", "background-color:yellow;color:red;");


time1 = new Date(1999, 10, 5, 15) //PM
time2 = new Date()
time3 = new Date(2019, 12, 3, 12) //PM
time4 = new Date(2000, 1, 1, 11) //AM


const getAmPm = (time) => {
    let hours = time.getHours()

    if(hours >= 12){
        console.log(time + " PM");
    }else{
        console.log(time + " AM");
    } 
}

getAmPm(time1);
getAmPm(time2);
getAmPm(time3);
getAmPm(time4);


// ########### AUFGABE 6 #############
console.log(" %c ########## AUFGABE 6 ###########", "background-color:yellow;color:red;");

const actDate = () => {
    const newDate = new Date();
    let day = newDate.getDate();

    let months = newDate.getMonth() +1;
    
    let year = newDate.getFullYear();

    document.body.innerHTML = day + "/" + months + "/" + year;

}


actDate();