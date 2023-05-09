
//#### AUFGABE 1 ######
console.log("###### AUFGABE 1 ######");

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
  ];
  

const Sortierung = (a, b) => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
}

languages.sort(Sortierung);
console.log(languages);


//#### AUFGABE 2 ######
console.log("###### AUFGABE 2 ######");

let languages2 = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
  ];

languages2.sort(Sortierung);
console.log(languages2.reverse());

//#### AUFGABE 3 ######
console.log("###### AUFGABE 3 ######");

var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.sort((a,b) => a-b));

//#### AUFGABE 4 ######
console.log("###### AUFGABE 4 ######");

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray2.sort((a,b) => a-b))

//#### AUFGABE 5 ######
console.log(" %c ###### AUFGABE 5 ######","background-color:yellow;color:red;");

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ]

let upperDrinks = getraenke.map(x => x.toLocaleUpperCase());
console.log(upperDrinks);

//#### AUFGABE 6 ######
console.log(" %c ###### AUFGABE 6 ######","background-color:yellow;color:red;");

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];

let newArray = array.map(x => x*2);
newArray.sort((a,b) => a-b);

console.log(newArray);

//#### AUFGABE 7 ######
console.log(" %c ###### AUFGABE 7 ######","background-color:yellow;color:red;");

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
let Celsius = fahrenheit.map(x => Math.round(((x - 32) / 1.8).toFixed(2)));

console.log(Celsius);

//#### AUFGABE 8 ######
console.log(" %c ###### AUFGABE 8 ######","background-color:yellow;color:red;");

let getraenke2 = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ];

 const myDrinks = () =>{
    getraenke2 = getraenke2.sort(Sortierung);

    getraenke2.forEach(elem => {
        console.log(elem);
        document.write("<p>" + elem +"</p>");
    });
 }
 
myDrinks();

//#### AUFGABE 9 ######
console.log(" %c ###### AUFGABE 9 ######","background-color:yellow;color:red;");

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];


checkNumber.forEach(elem => {
    console.log(elem %3 ? elem += 0 :  elem += 100);
});


//#### AUFGABE 10 ######
console.log(" %c ###### AUFGABE 10 ######","background-color:yellow;color:red;");

let album = [
    "holidays.jpg",
 "Restaurant.jpg",
 "desktop",
 "rooms.GIF",
 "DOGATBEACH.jpg",
]



const removeME = (a) => {
   return (a.includes(".") ? a.slice(0,a.length-4) : "invalid").toLowerCase();
}

let newAlbum = album.map(removeME);
console.log(newAlbum);