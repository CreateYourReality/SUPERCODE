

//###### AUFGABE 1 ######
console.log("###### AUFGABE 1 #####");

let person = ["Timo","Einfach Krass","IQ 100000"];
console.log(person);

let friends = ["Ferhat","Paul","Anton"];
console.log(friends);

let favoriteFood = ["Lasagne","Pizza","Keilchen"];
console.log(favoriteFood);


//###### AUFGABE 2 ######
console.log("###### AUFGABE 2 #####");

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);


//###### AUFGABE 3 ######
console.log("###### AUFGABE 3 #####");

console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

//###### AUFGABE 4 ######
console.log("###### AUFGABE 4 #####");

person.push("NeuePerson");
person.push("ZweiteNeuePerson");
console.log(person);
console.log(person.length);

friends.push("Chris","Liz");
console.log(friends);
console.log(friends.length);

favoriteFood.push("nuts","chips");
console.log(favoriteFood);
console.log(favoriteFood.length);

//###### AUFGABE 5 ######
console.log("###### AUFGABE 5 #####");

let popped = person.pop();
console.log(person);
console.log(popped);

let popped2 = friends.pop();
console.log(friends);
console.log(popped2);

let popped3 = favoriteFood.pop();
console.log(favoriteFood);
console.log(popped3);

//###### AUFGABE 6 ######
console.log("###### AUFGABE 6 #####");

let shifted = person.shift();
console.log(person);
console.log(shifted);

let shifted2 = friends.shift();
console.log(friends);
console.log(shifted2);

let shifted3 = favoriteFood.shift();
console.log(favoriteFood);
console.log(shifted3);

//###### AUFGABE 7 ######
console.log("###### AUFGABE 7 #####");

friends.unshift("Friend1","Friend2");
console.log(friends);

favoriteFood.unshift("eat1","eat2");
console.log(favoriteFood);

//###### AUFGABE 8 ######
console.log("###### AUFGABE 8 #####");

let ziele = ["Berlin","München","Rom","Barcelona"];
console.log(ziele);

let sliced = ziele.slice(0,2);
console.log("Vorher: "+ziele);
console.log("Nachher: "+sliced);


//###### AUFGABE 9 ######
console.log("###### AUFGABE 9 #####");

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

console.log(text.split("."));
console.log(text.split(" "));
console.log(text.split(""));


