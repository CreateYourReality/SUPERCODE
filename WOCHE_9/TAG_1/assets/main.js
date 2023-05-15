
// ########### AUFGABE 1 ###########
console.log("%c ########## AUFGABE 1 ###########", "background-color:yellow; color:red;");

const selectAufgabe1 = document.getElementById("aufgabe1");
const output = document.querySelector(".output");


selectAufgabe1.addEventListener("change", () => {

    output.innerHTML = "Sie haben "+ selectAufgabe1.value + " ausgewählt";
})



// ########### AUFGABE 2 ###########
console.log("%c ########## AUFGABE 2 ###########", "background-color:yellow; color:red;");

let clicked = 0;
const btn = document.getElementById("clickBtn");

btn.addEventListener("click", () => {
    clicked++;
    btn.textContent = "Click me: "+clicked;
})


// ########### AUFGABE 3 ###########
console.log("%c ########## AUFGABE 3 ###########", "background-color:yellow; color:red;");

const colorSelect = document.getElementById("aufgabe3");
const removeColorBtn = document.getElementById("removeColor");

removeColorBtn.addEventListener("click", () => {

    colorSelect[colorSelect.selectedIndex].remove();
})

// ########### AUFGABE 4 ###########
console.log("%c ########## AUFGABE 4 ###########", "background-color:yellow; color:red;");

const chooseColor = document.getElementById("farbeAuswahlen");
const colorChangeBtn = document.getElementById("button");
const body = document.querySelector("body");

colorChangeBtn.addEventListener("click", () => {
    let removeSpace = chooseColor.value.replace(/\s/g, '');
    console.log(removeSpace);

    body.style.backgroundColor = removeSpace;
})