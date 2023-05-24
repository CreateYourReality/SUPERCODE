
const divID = document.getElementById("count");
const message = document.querySelector(".message");

let i = Number(divID.innerHTML) -1;

const decrease = () => {
    if(i == 0){
        message.style.opacity = "0%";
        clearInterval(myInterval);
    }
    divID.innerHTML = i--;
}

const myInterval = setInterval(decrease,1000);
