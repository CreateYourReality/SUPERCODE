

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veranderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veranderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veranderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veranderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veranderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veranderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veranderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veranderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veranderung: "0.00%" }
  ];

  let metallNames = [];
  let preiseArray = [];
  let veranderungArray = [];


  function createTableFromObjects(data) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    
    // Create table header row
    const keys = Object.keys(data[0]);
    for (const key of keys) {
      const headerCell = document.createElement('th');
      headerCell.textContent = key;
      headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
  
    // Create table data rows
    for (const obj of data) {
      const dataRow = document.createElement('tr');
      for (const key of keys) {
        const dataCell = document.createElement('td');
        dataCell.textContent = obj[key];
        dataRow.appendChild(dataCell);
      }
      table.appendChild(dataRow);
    }
  
    return table;
  }
  
  edelMetallPreise.forEach(metall => metallNames.push(metall.name));
  edelMetallPreise.map((metall) => console.log(metall.name));
  console.log(metallNames);

  edelMetallPreise.forEach(metall => preiseArray.push(metall.preiseGramEuro));
  edelMetallPreise.map((metall) => console.log(metall.preiseGramEuro));
  console.log(preiseArray);

  edelMetallPreise.forEach(metall => veranderungArray.push(metall.veranderung));
  edelMetallPreise.map((metall) => console.log(metall.veranderung));

  console.log(edelMetallPreise.filter(metall => metall.preiseGramEuro > 50));

  const table = createTableFromObjects(edelMetallPreise);
  table.style.border = "black 1px solid";

  document.body.appendChild(table);


  // 2_2

  const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
  ];


  singers.sort((x,y) => {
    let a = x.name;
    let b = y.name;

    if(a<b)
        return -1;
    if(a>b)
        return 1;
    return 0;        
  });

  console.log(singers);