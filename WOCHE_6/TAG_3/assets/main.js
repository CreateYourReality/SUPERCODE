
const output = document.querySelector(".output");


function doubleME(){
    const numField = document.querySelector(".num");
    
    output.innerHTML = numField.value * 2;
}


function giveYear(){
    const year = document.querySelector(".year");
    output.innerHTML = 2023 - year.value;
}

function getDiff(){
    const year1 = document.querySelector(".year1");
    const year2 = document.querySelector(".year2");

    output.innerHTML = "Die Differenz ist : "

    if(year1.value - year2.value < 0){
        output.innerHTML += (year1.value - year2.value) * (-1);

    } else{
        output.innerHTML += year1.value - year2.value;
    }
    
}


//+++ AUFGABE COUNTER +++



const output2 = document.querySelector(".counterOutput");

function add1(){
    output2.innerHTML = Number(output2.innerHTML)+1;
}
function sub1(){
    output2.innerHTML = Number(output2.innerHTML)-1;
}
function add10(){
    output2.innerHTML = Number(output2.innerHTML)+10;
}
function sub10(){
    output2.innerHTML = Number(output2.innerHTML)-10;
}
function add100(){
    output2.innerHTML = Number(output2.innerHTML)+100;
}
function sub100(){
    output2.innerHTML = Number(output2.innerHTML)-100;
}
function reset(){
    output2.innerHTML = Number(0) ;
}
function mult2(){
    output2.innerHTML = Number(output2.innerHTML)*2;
}


//++++ LAST MISSION +++

const headline = document.querySelector("h2");

function changeHeadline(){
    headline.classList.add("changeHeadline")

}


function resetHeadline(){
    headline.classList.remove("changeHeadline");
}