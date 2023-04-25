
console.log("########### AUFGABE 1 ##############")

// AUFGABE 1a
let a = 12;
let b = a * 3;
console.log(b);
document.write(b);


//AUFGABE 1b

console.log("Hello World!"); 
console.log("Anton");

let firstName = "Anton";

console.log(firstName);
let age = 28;

console.log(age);

let job = "Trainer";
console.log(job);

let married = true;

console.log(married);

console.log(firstName + " ist " + age + " Jahre alt und von Beruf " + job + ". Ob er verheiratet ist? " + married);


console.log("########### AUFGABE 2 ##############");
// AUFGABE 2


let firstName2 = "John";
let lastName = "Doe";
let age2 = 35;

console.log(firstName2 + " " + lastName + " ist " + age2 + " Jahre alt.");

console.log("########### AUFGABE 3 ##############");

//Aufgabe 3

// let x = 34;
// x = 67;
// console.log(x);

// const y = 34;
// y = 67;
// console.log(y);


console.log("########### AUFGABE 4 ##############");
//AUFGABE 4

let score = 5+5*10;

console.log("Ergebnis: " + score);

let score2 = (5+5)*10;
console.log("Ergebnis2: " + score2);

let score3 = 0;
score3 = score3 + 10;
console.log('Ergebnis: ' + score3);

let score4 = 0;
score4 += 10;
console.log('Ergebnis: ' + score4);


let zahl = 1;
zahl = zahl + 1;
zahl += 1;

zahl++;
console.log('increment: ' + zahl);

zahl--;
console.log('dekrement: ' + zahl);



console.log("########### AUFGABE 5 ##############");
//AUFGABE 5

// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);

// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);

console.log("########### AUFGABE 6 ##############");
//AUFGABE 6

let x2 = "Hello ";
let y2 = "World<br>";
let z = x2 + y2;

document.write(z);

let n = x2 + " " +y2;
document.write(n);


document.write(x2+"World");

let meinString = "Ich bin Erster";
meinString += " Ich komme auf Platz zwei"
console.log(meinString);

console.log("########### AUFGABE 7 ##############");
//AUFGABE 7

document.write("<h1>Hello World!");
document.write("<p>Have a nice day</p>");

let myText = "Hello again ";

document.write(myText);

let vorname = "Timo";
let nachname = "Moewes";
document.write(vorname + " " +nachname);

console.log("########### AUFGABE 8 ##############");
//AUFGABE 8

window.alert("Hallo Welt");
window.prompt("Bitte geben Sie Ihren Namen ein.");
window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
window.confirm("Stimmen Sie meiner Meinung zu?"); 

let alter = window.prompt( "Gib mir bitte dein Alter:" );
console.log(alter);
let b2 = 5;
let a2 = b2 * 5 -3;
window.alert(a2);
let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
window.confirm(mann + grosse);

