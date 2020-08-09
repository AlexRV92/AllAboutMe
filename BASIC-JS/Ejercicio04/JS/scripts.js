var education = prompt("Introduce ur education");
salary = 0; 


switch (education) { 

  case "no high school diploma":
    salary = 25636; 
    break;

  case "high school diploma": 
    salary = 35256;
    break;

  case "associate degree": 
    salary = 42496;
    break;

  case "bachelor degree":
    salary = 59124;
    break;

  case "master degree":
    salary = 69732;
    break;

  case "professional degree": 
    salary = 89960;
    break;

  case "doctoral degree": 
    salary = 84396;
    break;

  default:
    console.log("Introduce one: no high school diploma, a high school diploma, associate degree, bachelor degree, master degree, professional degree or doctoral degree.");
    education = false;
    break;
    
}



if (education){ 

  console.log("In 2015, a person with " +education+ " earned and average of $" +salary.toLocaleString("en-US")+"/year.");

} else { 
  console.log("Woops! something goes wrong");
}