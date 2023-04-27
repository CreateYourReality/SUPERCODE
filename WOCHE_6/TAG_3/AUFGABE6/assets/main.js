
const body = document.querySelector("body");
const redRange = document.querySelector("#red");
const greenRange = document.querySelector("#green");
const blueRange = document.querySelector("#blue");

let red = 0;
let green = 0;
let blue = 0;

function changeBackground(){

    red = redRange.value; 
    green = greenRange.value; 
    blue = blueRange.value; 


    body.style.backgroundColor = "rgba("+red+","+green+","+blue+",1)";
}