


// ##### AUFGABE 1 #####
console.log("%c ###### AUFGABE 1 ###### ", "color:red;background-color:yellow");


for(let i = 1; i<=10;i++){
    console.log("Hello world "+i);
}



// ##### AUFGABE 2 #####
console.log("%c ###### AUFGABE 2 ###### ", "color:red;background-color:yellow");

let numArray = [];

for(let i = 0; i <= 10; i++){
    numArray.push(i);
}

console.log(numArray);

// ##### AUFGABE 3 #####
console.log("%c ###### AUFGABE 3 ###### ", "color:red;background-color:yellow");

let names = ["Freddy","Steffen","Finn","Julia","Farid","Christian","Sergio"];

for(let n of names){
    console.log(n);
}


// ##### AUFGABE 4 #####
console.log("%c ###### AUFGABE 4 ###### ", "color:red;background-color:yellow");

const imageArray = () => {
    let returnArray = [];
    let addZero = "0";

    for(let i = 1; i <= 100; i++){
        if(i < 10){
            returnArray.push("image_"+addZero+addZero+i);
        } else if (i < 100){
            returnArray.push("image_"+addZero+i);
        }else{
            returnArray.push("image_"+i);
        }
    }

    return returnArray;
}

console.log(imageArray());


// ##### AUFGABE 5 #####
console.log("%c ###### AUFGABE 5 ###### ", "color:red;background-color:yellow");

// const outputField = document.getElementById("outputField");
// const inputField = document.getElementById("inputField");

// const calcLOOP = () => {
//     let loops = inputField.value;
//     let outLoops = "";

//     for(let i = 0; i < loops;i++){
//         outLoops += "o";
//     }

//     outputField.innerHTML = "L"+outLoops+"p";
// }


// ##### AUFGABE 6 #####
console.log("%c ###### AUFGABE 6 ###### ", "color:red;background-color:yellow");

let numArr = [5, 22, 15, 100, 55]


for(let i = 0; i <= numArr.length;i++){
    for(let j = 2; j < Number(numArr[i]);j++){
        if(numArr[i] %j == 0){
            console.log(numArr[i] + " ist teilbar durch "+j+", das Ergebnis ist: "+numArr[i]/j);
        }
    }
}

// ##### AUFGABE 7 #####
console.log("%c ###### AUFGABE 7 ###### ", "color:red;background-color:yellow");


const outputField = document.getElementById("outputField");
const inputField = document.getElementById("inputField");

const calcLOOP = () => {
    let loops = inputField.value;
    let outLoops = "";

    if(loops == 0){
        outputField.innerHTML = "Bitte gibt eine gültige Zahl und nicht 0 ein";
        return;
    }

    if(loops %2 == 0){ //gerade Zahlen
        for(let i = 0; i < loops;i++){
            outLoops += "o";
        }
    }else{
        for(let i = 0; i < loops;i++){
            i %2 ? outLoops+="0" : outLoops+="o";
        }
    }

    outputField.innerHTML = "L"+outLoops+"p";
}