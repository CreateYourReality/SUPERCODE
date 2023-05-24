
// ########### AUFGABE 1 ################
console.log("%c ######### AUFGABE 1 #########", "background-color:yellow;color:red;");


const showMsg = () => {
    console.log("Glückwunsch, du hast 3 Sekunden deines Lebens verschwendet!");
}


console.log("Du musst 3 Sekunden warten");
setTimeout(showMsg,3000);

let i = 10;

const backward = () => {
    if(i == 0){
        clearInterval(intervalID);
        console.log("ENDLICH FEIERABEND");
    } else {
        console.log(i);
        i--;
    }
}

let intervalID = setInterval(backward,1000);;



// ########### AUFGABE 2 ################
console.log("%c ######### AUFGABE 2 #########", "background-color:yellow;color:red;");

const btn = document.getElementById("btn");
const time = document.querySelector(".zeit");
let percent = 100;
let intervalID2;

const startTimer = () => {
    intervalID2 = setInterval(decreasePercent,100);
}

const decreasePercent = () => {
    if(percent == 0)
        clearInterval(intervalID2);
    time.innerHTML = percent-- + "%";   
}

btn.addEventListener("click", startTimer);

// ########### AUFGABE 3 ################
console.log("%c ######### AUFGABE 3 #########", "background-color:yellow;color:red;");

const timeDiv = document.getElementById("txt");

const startTime = () => {
    const actDate = new Date();
    let heute = actDate.getDate()+ "/" + (1 + Number(actDate.getMonth())) + "/" + actDate.getFullYear();
    let std = actDate.getHours();
    let min = actDate.getMinutes();
    let sec = actDate.getSeconds();

    timeDiv.innerHTML =  heute+ " - " + std+":"+min+":"+sec + " Uhr"
}

setInterval(startTime, 1000);

// ########### AUFGABE 4 ################
console.log("%c ######### AUFGABE 4 #########", "background-color:yellow;color:red;");
