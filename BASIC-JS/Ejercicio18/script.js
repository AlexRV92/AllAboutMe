
let orders = "rffrfflfrff";


let Rover = { 

  direction: "N", 
  x: 0,
  y: 0,

}

function turnLeft(Rover){ 

  if (Rover.direction === "N"){ 
    Rover.direction = "W";
  } else if (Rover.direction === "W"){ 
    Rover.direction = "S";
  } else if (Rover.direction === "S") { 
    Rover.direction = "E"; 
  } else { 
    Rover.direction = "N";
  }
}

function turnRight(Rover){ 

  if (Rover.direction === "N"){ 
    Rover.direction = "E";
  } else if (Rover.direction === "E"){ 
    Rover.direction = "S";
  } else if (Rover.direction === "S") { 
    Rover.direction = "W"; 
  } else { 
    Rover.direction = "N";
  }
}

function avanzar (Rover){ 

  if ((Rover.direction === "N")&& ( 0 <= Rover.x < 10 ) && ( Rover.y != 0)){ 
    Rover.y = Rover.y - 1;

  } else if (( Rover.direction === "S") &&( 0 <= Rover.x < 10 ) && (Rover.y!=9)){ 
    Rover.y = Rover.y + 1;

  } else if ((Rover.direction === "W" )&& ( Rover.x != 0 )) { 
    Rover.x= Rover.x - 1; 

  } else if ((Rover.direction === "E") && (Rover.x != 9 )){ 
    Rover.x = Rover.x +1 ;
  } else { 
    console.log("ERROR"); 
  }

  console.log(Rover.x, Rover.y);
}

function commands(orders){ 

    let order = orders.split("");
    console.log("Las ordenes introducidas son: " +order)
    
    order.forEach(function(item) {

      if (item=== "r"){ 
          console.log("Girando a la derecha");
          turnRight(Rover);
          

      } else if (item=== "l") {
          console.log("Girando a la izquierda");
          turnLeft(Rover);
          

        } else if ( item === "f"){
          console.log("Avanzando");
          avanzar(Rover);
          
        } else { 

          console.log("Comando incorrecto, saltando a la siguiente accion")
        }
      
      
    });

}

commands(orders)











// PRUEBAS
// console.log(Rover.direction);
// // turnRight(Rover.direction);
// console.log(Rover.direction);

// PRUEBAS AVANZAR 

// turnRight(Rover);
// console.log(Rover.direction);
// avanzar(Rover); 
// console.log(Rover.x, Rover.y)
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover); 
// console.log(Rover.x, Rover.y)
// avanzar(Rover); 
// turnRight(Rover);
// console.log(Rover.direction);
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover); 
// avanzar(Rover);
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// avanzar(Rover)
// turnRight(Rover)
// console.log(Rover.direction);
// console.log(Rover.x, Rover.y)

// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)

// turnRight(Rover);
// console.log(Rover.direction);
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)
// avanzar(Rover)
// console.log(Rover.x, Rover.y)



