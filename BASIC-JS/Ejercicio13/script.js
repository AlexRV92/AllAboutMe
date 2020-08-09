let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";
let crew = [captain, second, pilot, companion, mercenary, mechanic];

// Añadir estos 3

let doctor = "Simon";
let sister = "River";
let shepherd = "Book";
let faltan = [doctor, sister, shepherd]; 


function añadir (item) { 

  crew.push(item);
}

faltan.forEach(añadir);


console.log("El nuevo Array crew es: " +crew);