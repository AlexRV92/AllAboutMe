
let user1 = { 

  clave: "1111",
  nombre: "pepito",
  isActive: true,
  balance: 2000,
}
// Prueba de objeto, habría que crear 1 objeto por usuario o un  Objeto plantilla y luego definir los diferentes objetos usuario

let clave = prompt("Introduce tu pin");

if ( clave === user1.clave){

  let checkBalance = confirm("¿ Quiéres comprobar tu saldo ?"); 

    if ((user1.isActive=== true) && (user1.balance > 0)) { 
      console.log("Tu balance actual es de " + user1.balance + " €");

    } else if (( user1.isActive !== true) && ( user1.balance >= 0)) { 
      console.log("Tu cuenta no está activada");

    } else if ((user1.balance === 0 ) && (user1.isActive ===true)) { 
      console.log("Tu cuenta se encuentra vacía." );

  } else if ( user1.balance < 0 ) { 
    console.log("Tu balance es negativo, por favor contacta con tu banco");
  } else { 
    console.log("Ha ocurrido un error inexperado, por favor comience de nuevo.");
  }

} else { 
  console.log("Gracias, que tengas un buen día!");

}
