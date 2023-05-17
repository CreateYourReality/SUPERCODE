


// ########### AUFGABE 1 ###########
console.log(" %c ########### AUFGABE 1 ###########","background-color:yellow;color:red;");


let person = {
    name: "Timo",
    age: 31,
    getAge: function(){
     //   alert(this.name+" ist "+this.age+" Jahre alt")
    },
}


console.log(person.name,person.age);
console.log(person.getAge());

// ########### AUFGABE 2 ###########
console.log(" %c ########### AUFGABE 2 ###########","background-color:yellow;color:red;");

let unsereHaustiere = [
    {
      tiertyp: "Katze",
  
      names: [
        "Gipsy",
        "Nala",
        "Dinky"
      ]
    },
    {
      tiertyp: "Hunde",
      names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
      ]
    }
  ];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

unsereHaustiere[1].names.forEach(hund => {
    console.log(hund);
});

unsereHaustiere[1].names[0] = "ATZINGA";
console.log(unsereHaustiere);


// ########### AUFGABE 3 ###########
console.log(" %c ########### AUFGABE 3 ###########","background-color:yellow;color:red;");

let unserLager = {
    schreibtisch: {
      schublade: "Hefter"
    },
    schrank: {
      "Obere Schublade": {
        Ordner1: "Dokumente",
        Ordner2: "Geheimnisse"
      },
      "Untere Schublade": "Cola"
    }
  };
  
  console.log(unserLager);
  console.log(unserLager.schrank["Obere Schublade"]["Ordner2"]);
  console.log(unserLager.schrank["Untere Schublade"]);
  console.log(unserLager.schreibtisch.schublade);


// ########### AUFGABE 4 ###########
console.log(" %c ########### AUFGABE 4 ###########","background-color:yellow;color:red;");

let myMusic = [
    {
      artist: "The Beatles",
      title: "Abbey Road",
      release_year: 1969,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    },
    {
      artist: "Pink Floyd",
      title: "Dark Side of the Moon",
      release_year: 1978,
      medium: ["CS", "CD", "LP", "Download"],
      gold: true
    },
    {
      artist: "Led Zeppelin",
      title: "Led Zeppelin IV",
      release_year: 1971,
      medium: ["CS", "LP", "Download"],
      gold: true
    },
    {
      artist: "Metallica",
      title: "Kill ’Em All und Ride the Lightning",
      release_year: 1983,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    }
  ];
  
  myMusic.forEach(element => {
      console.log(element.artist);
      console.log(element.title);
      console.log(element.medium);

      element.release_year > 1975 ? console.log(element.release_year) : false;
});


// ########### AUFGABE 5 ###########
console.log(" %c ########### AUFGABE 5 ###########","background-color:yellow;color:red;");

let studentData = [
    {
      name: "Alex",
      age: 23,
      coop: false,
      address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
      },
      emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
      name: "Sandra",
      age: 22,
      coop: true,
      address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
      },
      emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
  ];

  studentData.forEach(student => {
      console.log(student.name);
      console.log(student.coop);
      console.log(student.address["city"]);
      console.log(student.emails);
});
  
