// ##### AUFGABE 1 #####

let firstName = "Timo";
let lastName = "Moewes";

console.log(firstName.length);
console.log(lastName.length);

let fullName = firstName.concat(" "+lastName);

console.log(fullName.length);


// ##### AUFGABE 2 #####
console.log("####### AUFGABE 2 ######");


const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

// ##### AUFGABE 3 #####
console.log("####### AUFGABE 3 ######");

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.indexOf("blue"));

// ##### AUFGABE 4 #####
console.log("####### AUFGABE 4 ######");

const A = 'Susi is going to codingschool';

let txtA = A.slice(0,4);
let txtB = A.slice(5,7);
let txtC = A.slice(5,17) + A.slice(23,29);
let txtD = A.slice(23,29);
let txtE = txtA +" "+ txtB +" "+ txtD;

output(txtA);
output(txtB);
output(txtC);
output(txtD);
output(txtE);


function output(param){
    document.write(param+"<br>")
}

// ##### AUFGABE 5 #####
console.log("####### AUFGABE 5 ######");

const text = "Sam is good at codingschool";

let textA = text.replace("good","bad");
textA = textA.replace("codingschool","school");


let textB = textA.replace("Sam","Susi");
textB = textB.replace("bad","good");

let textC = text.replace("codingschool","tennis")



output(textA);
output(textB);
output(textC);

// ##### AUFGABE 6 #####
console.log("####### AUFGABE 6 ######");

const text2 = "Sam is going to codingschool";

let luA = text2.replace("codingschool","school");
luA = luA.toUpperCase();

let luB = text2.replace("to", "at");
luB = luB.replace("codingschool","school");
luB = luB.toLowerCase();

let luC = text2.slice(0,3).toUpperCase() + text2.slice(3,16) + text2.slice(22,29).toUpperCase();

let luD = text2.slice(0,3).toLowerCase() + text2.slice(3,16).toUpperCase() + text2.slice(22,29).toLowerCase();



let luE = text2.replace(text2.charAt(4),text2.charAt(4).toUpperCase());
luE = luE.replace(luE.charAt(7),luE.charAt(7).toUpperCase());
luE = luE.replace(luE.charAt(13),luE.charAt(13).toUpperCase());
let luEb = luE.substring(22,23).toUpperCase() + luE.substring(23,28); //School
luE = luE.substring(0,16);
luE += luEb; 





output(luA);
output(luB);
output(luC);
output(luD);
output(luE);


// ##### AUFGABE 7 #####
console.log("####### AUFGABE 7 ######");

const var1 = "Sam is going to codingschool";
const var2 = "Susi";
const var3 = "and"; 




varA = var1.concat(" ",var3," to the movie theater");
varA = varA.replace("codingschool", "school");

varB = var1.replace("codingschool","movie theater");

varC = var2.concat(" " , var3," " ,var1.substring(0,4), "are going to school");

varD = var2.concat(" ",var3," ",var1.substring(0,4),"are going to the gym ",var3," to the movie theater" );

varE = var2.concat(var1.substring(3,28)," ",var3," ","to the movie theater");
varE = varE.replace("codingschool","school")



output("### AUFGABE 7 ###");
output(varA);
output(varB);
output(varC);
output(varD);
output(varE);


// ##### AUFGABE 8 #####
console.log("####### AUFGABE 8 ######");
output("### AUFGABE 8 ###");

let x = "Hello ";
let y = "World<br>";

let z = x + y;
output(z);

let n = x + " " + y;
output(n);

x += "World";

output(x);

let meinString = "Ich bin Erster";

meinString += " Ich komme auf Platz zwei";

console.log(meinString);


// ##### AUFGABE 9 #####
console.log("####### AUFGABE 9 ######");

const defaultArticle = document.querySelector("article").innerHTML;
const btn = document.getElementById("search-button");
btn.onclick = highlightME;


function highlightME(){
    let highlightArticle = document.querySelector("article");
    highlightArticle.innerHTML = defaultArticle;
    let stringVar = document.querySelector("#search-input").value;
    let highlightString = '<span class="highlight">' + stringVar + '</span>';

    highlightArticle.innerHTML =  highlightArticle.innerHTML.replaceAll(stringVar, highlightString);
}