eatsPlants = confirm("¿ El animal que estás pensando como plantas ? "); 
eatsAnimals = confirm("¿ El animal que estás pensando como otros animales ? "); 


if (eatsPlants===true && eatsAnimals===false){ 
  console.log("Tu animal es un herbívoro!"); 
  

  } else if (eatsAnimals===true && eatsPlants===false) {
    console.log("Tu animal es un carnívoro!");

  } else if ( (eatsPlants===true) && (eatsAnimals===true)) { 
    console.log("Tu animal es un omnívoro, se lo come todo");

  } else { 
    console.error("Es imposible que tu bicho no coma nada");
}