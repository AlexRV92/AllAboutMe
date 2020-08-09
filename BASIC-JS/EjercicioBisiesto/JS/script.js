let ano = parseInt(prompt("Introduce un año mayor que 1800 y menor que 2100.")); 
const bisiesto = 4; 


if ((ano > 1800) && ( ano < 2100 )){

  if (( ano % 4 === 0) &&  ( ano % 100 !== 0)) { 

     console.log("El año introducido es bisiesto.");

    }else if ((ano % 400 === 0 ) || (ano % 100 !== 0)){ 

      console.log("El año introducido es bisiesto.")
    }

   else { 

    console.log("El año introducido no es bisiesto.");
  }

}else { 

  console.log("El año introducido no es correcto");
}
