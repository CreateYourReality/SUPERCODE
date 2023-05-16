
//############## AUFGABE 1 ##############
console.log("%c ########## AUFGABE 4 ###########", "background-color:yellow; color:red;");

const allElements = Array.from(document.getElementsByClassName("example"));

console.log(allElements);

const myFunction = () => {

    allElements.forEach(element => {
        element.classList.toggle("test");
    });
   
}


//############## AUFGABE 2 ##############
console.log("%c ########## AUFGABE 2 ###########", "background-color:yellow; color:red;");

const unten = document.querySelector(".unten");
const myList = document.getElementById("myList");
const output = Array.from(document.getElementsByTagName("output"));

const untenBtns = Array.from(unten.getElementsByTagName("button"));


untenBtns[0].addEventListener("click", () => {
    console.log(myList.firstElementChild.textContent);
    output[0].innerHTML = myList.firstElementChild.textContent;
})
untenBtns[1].addEventListener("click", () => {
    console.log(myList.lastElementChild.textContent);
    output[0].innerHTML = myList.lastElementChild.textContent;
})
untenBtns[2].addEventListener("click", () => {
    console.log(myList.firstElementChild.nextElementSibling.textContent);
    output[0].innerHTML = myList.firstElementChild.nextElementSibling.textContent;
})
untenBtns[3].addEventListener("click", () => {
    console.log(myList.lastElementChild.previousElementSibling.textContent);
    output[0].innerHTML = myList.lastElementChild.previousElementSibling.textContent;
})

//############## AUFGABE 3 ##############
console.log("%c ########## AUFGABE 3 ###########", "background-color:yellow; color:red;");

const changeBtn = document.getElementById("navChange");
const homeBtn = document.getElementById("navHome");


function reverse(s){
    return s.split("").reverse().join("");
}

changeBtn.addEventListener("click", () => {
    homeBtn.style.backgroundColor = "coral";
    homeBtn.textContent = reverse(homeBtn.textContent);    
})

//############## AUFGABE 3 ##############
console.log("%c ########## AUFGABE 3 ###########", "background-color:yellow; color:red;");

const changeBtn2 = document.getElementById("navChange2");
const btnInList = Array.from(document.getElementsByClassName("listContainer"));
const liItems = btnInList[0].getElementsByTagName("li");

changeBtn2.addEventListener("click", () => {
    liItems[0].style.backgroundColor = "#f6c89f";
    liItems[1].style.backgroundColor = "#ffe7d1";
    liItems[2].style.backgroundColor = "#4b8e8d";
    changeBtn2.style.backgroundColor = "#396362" ;
})

//############## AUFGABE 4 ##############
console.log("%c ########## AUFGABE 4 ###########", "background-color:yellow; color:red;");


const createBtn = document.getElementById("createBtn");
let counter = 0;
const umwickelt = document.querySelector(".umwickeln");

createBtn.addEventListener("click", () => {

        let newElement = document.createElement("div");
        newElement.textContent = counter;
     //  newElement.style.flex = "inline-block";
        // newElement.style.marginLeft = "5%";
        // newElement.style.marginTop = "1%";
        if(counter % 10 == 0 || counter == 0){
            newElement.classList.add("weiss");
            document.querySelector("body").appendChild(document.createElement("br"));
            newElement.style.paddingTop = "10px";
            newElement.style.paddingLeft = "10px";
            newElement.style.paddingRight = "10px";
            newElement.style.paddingBottom = "10px";

        }else {
            newElement.classList.add("rechteck");
            

        }

        umwickelt.appendChild(newElement);
        counter++;
    })

//############## AUFGABE 5 ##############
console.log("%c ########## AUFGABE 5 ###########", "background-color:yellow; color:red;");

const EnterBtn = document.getElementById("enter");
const ul = document.getElementById("einkaufsliste");
const inputField = document.getElementById("userinput");


EnterBtn.addEventListener("click", () => {
    let newLiElement = document.createElement("li");
    newLiElement.textContent = inputField.value;
    ul.appendChild(newLiElement);
})


//############## AUFGABE 6 ##############
console.log("%c ########## AUFGABE 6 ###########", "background-color:yellow; color:red;");

const body = document.querySelector("body");

body.addEventListener("keypress", (event) => {
    alert("KEY: "+event.key+" | KEYCODE: "+event.keyCode+" | CODE: "+event.code );
})

//############## AUFGABE 7 ##############
console.log("%c ########## AUFGABE 7 ###########", "background-color:yellow; color:red;");

const red = document.getElementById("rot");
const green = document.getElementById("grun");
const blue = document.getElementById("blau");

const output2 = document.getElementById("demo");

let counter2 = 0;

function rgbToHex(red, green, blue) {
    // Überprüfen, ob die eingegebenen Werte im gültigen Bereich liegen
    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
      throw new Error('Ungültige RGB-Werte.');
    }
  
    // Umwandlung in Hexadezimal-Format
    var hexRed = red.toString(16).padStart(2, '0');
    var hexGreen = green.toString(16).padStart(2, '0');
    var hexBlue = blue.toString(16).padStart(2, '0');
  
    // Rückgabe des Hexadezimal-Codes
    return '#' + hexRed + hexGreen + hexBlue;
  }

const changeBackground = (color) =>{
    body.style.backgroundColor = color;
    counter2++;
    output2.innerHTML = "Wir haben die Farbe "+counter2+" mal geändert";
}


const changeHandle = () => {
    let rgbTxt = "rgb(" + red.value + "," + green.value + "," + blue.value +")";
    console.log(rgbTxt);
    body.style.backgroundColor = rgbTxt;
    output2.innerHTML = rgbTxt + " = "+ rgbToHex(Number(red.value),Number(green.value),Number(blue.value));
}