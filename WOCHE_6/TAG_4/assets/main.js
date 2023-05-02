

//###### AUFGABE 1 ######
function adult(){
    const age = Number(document.querySelector(".age").value);
    const output = document.querySelector(".output");

    if(age >= 18){
        output.innerHTML = "Du bist volljährig.";
    } else{
        output.innerHTML = "Du bist minderjährig.";
    }
}



//##### AUFGABE 2 ######
function weather(){
    const quali = Number(document.querySelector(".quali").value);
    const output2 = document.querySelector(".output2");

    if(quali >= 8 && quali <= 10){
        output2.innerHTML = "super";
    } else if(quali == 6 || quali == 7){
        output2.innerHTML = "gut";
    }else if(quali >= 3 && quali <= 5){
        output2.innerHTML = "okay";
    }else if(quali >= 0 && quali <= 2){
        output2.innerHTML = "schlecht";
    } else{
        output2.innerHTML = "FALSCHE EINGABE, nur [0-10] möglich"
    }
}

//###### AUFGABE 3 ######
function greaterThan(){
    event.preventDefault();
    const age = Number(document.getElementById("input").value);
    const output3 = document.querySelector(".output3");

    console.log("test");
    if(age >= 18){
        output3.innerHTML = "Ja, Du kannst Shisha rauchen";
    } else{
        output3.innerHTML = "Du darfst noch nicht Shisha rauchen.";
    }
}


// ###### AUFGABE 4 ######
function checkAirQuality(){
    const rangeInput = Number(document.querySelector(".aqi").value);
    const levelConcern = document.querySelector(".aqi-concern");
    const levelEffect = document.querySelector(".aqi-effect");
    const aqiLabel = document.querySelector(".aqi-label");
    const body = document.querySelector("body");

    aqiLabel.innerHTML = "AQI: "+ rangeInput;


    if(rangeInput <= 50){
        levelConcern.innerHTML = "Level of health concern: Good";
        levelEffect.innerHTML = "Level of health effect: Little or no risk";
        body.style.backgroundColor ="green";

    } else if(rangeInput > 50 && rangeInput <= 100){
        levelConcern.innerHTML = "Level of health concern: Moderate";
        levelEffect.innerHTML = "Level of health effect: Acceptable quality";
        body.style.backgroundColor ="yellow"


    } else{
        levelConcern.innerHTML = "Level of health concern: Unhealthy for sensitive groups";
        levelEffect.innerHTML = "Level of health effect: Generable publics not likely affected";
        body.style.backgroundColor ="orange"


    }
}



// ######## AUFGABE 5 #######

function mathME(){
    const tolleZahl = Number(document.querySelector(".tolleZahl").value);
    const diffZahl = 27;

    let diff = tolleZahl - diffZahl;


    if(diff > 27){
        console.log((tolleZahl - diffZahl) * 2);
    }



}