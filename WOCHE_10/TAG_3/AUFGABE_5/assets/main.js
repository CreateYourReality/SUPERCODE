

const minutesInput = document.getElementById("minutes");
const actTime = document.getElementById("time");

let actCountdown = -1;
let intervalID = "";
let seconds = 0;
let restart = 0;


const startMinCountdown = () => {
    if(intervalID == ""){
        restart = Number(minutesInput.value);
        actCountdown == -1 ? actCountdown = Number(minutesInput.value) : false;
        intervalID = setInterval(startMinCountdown, 1000);
        return;
    }

    if(seconds == 0){
        actCountdown--;
        seconds = 59;
    } else {
        seconds--;
    }

    actTime.innerHTML = actCountdown + ":" + seconds;
    if(actCountdown == 0){
        clearInterval(intervalID);
        console.log("ENDEGELÄNDE");
    }
}

const pauseMinCountdown = () => {
    clearInterval(intervalID);
    intervalID = "";
}

const restartMinCountdown = () => {
    clearInterval(intervalID);
    intervalID = "";
    seconds = 0;
    actCountdown = restart;
    startMinCountdown();
}