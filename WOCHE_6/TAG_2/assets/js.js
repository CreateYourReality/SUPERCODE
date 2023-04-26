const gallerySec = document.getElementById("gallery");

gallerySec.innerHTML = "<figure> <img src='https://images.unsplash.com/photo-1682166811672-361327c6770d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'><figcaption>Fig.1</figcaption></figure>" +
"<figure><img src='https://images.unsplash.com/photo-1682166811672-361327c6770d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'><figcaption>Fig.2</figcaption></figure>" + "<figure><img src='https://images.unsplash.com/photo-1682166811672-361327c6770d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'><figcaption>Fig.3</figcaption></figure>";

const figureTag = document.querySelectorAll("figure");

figureTag.forEach(tag => {
    tag.style.display = 'inline-block';
  });


// ###### AUFGABE 2 #######


const infoDiv = document.getElementById("info");

infoDiv.innerHTML = "<h1>Hello World</h1>";
infoDiv.innerHTML += "<h2>How are you?</h2>";

document.getElementById('container').innerHTML = "<p>start of the element</p>"

document.write("end of the element");


// ### AUFGABE 3 #####

function intro2(paramName){
    let varName = "SuperCoder";
    console.log("Hi, " + varName + ". Mein Name ist " + paramName + ".")
}

intro2("Timo");


//##### AUFGABE 4 ######

function intro3(name, stadt, alter){
    console.log("Hallo, mein Name ist "+name+". Ich bin "+alter+" Jahre alt. Ich komme aus "+stadt);
}

intro3("Timo","Berlin",31);


//##### AUFGABE 5 #####

function math(a,b){
    console.log(a*b);
    console.log(a/b);
}

math(10,2);

math(30,20);
math(100,100);
math(5,0);
math(45,173);
math(1,1000);

