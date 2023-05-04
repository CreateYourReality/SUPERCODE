


// ###### AUFGABE 1 #######
console.log("###### AUFGABE 1 ######")


console.log(Math.PI);

const PI = Math.PI;
let roundedPI;

roundedPI = PI.toFixed(2);

console.log(roundedPI);



//## AUFGABE 2 ####
console.log("###### AUFGABE 2 ######")


let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
  ];
  

const roundME = (arrayVal) => {

    arrayVal.forEach(element => {
        console.log(Math.round(element));
    });
}

roundME(array);



// #### AUFGABE 3 #####
console.log("###### AUFGABE 3 ######");


let randomNum = Math.random();
console.log(randomNum);

let randomNum1_10 = Math.floor(Math.random() * 10) +1;
console.log(randomNum1_10);

let randomNum1_100 = Math.floor(Math.random() * 100) +1;
console.log(randomNum1_100);




// #### AUFGABE 4 #####
console.log("###### AUFGABE 4 ######");

const roundTo = (zahl,genauigkeit) =>{
    if(zahl.includes(","))
        zahl = zahl.replace(",",".");

        zahl = Number(zahl);

    console.log(zahl.toFixed(genauigkeit));
}

// roundTo(prompt("Zahl zum runden eingeben."), Number(prompt("zahl für Nachkommastelle eingeben.")));


// #### AUFGABE 5 #####
console.log("###### AUFGABE 5 ######");

let rnd = Math.floor(Math.random() * 10) +1;
let raten = 0;

while(Number(rnd) != Number(raten)){ 
    raten = Number(prompt("Rate eine zahl zwischen 1 und 10"));
    if(Number(rnd) != Number(raten))
        console.log("Du hast falsch geraten, deine Zahl: "+raten+" richtige Zahl: "+rnd);
}

console.log("DU HAST RICHTIG GERATEN, WOHOOO!");