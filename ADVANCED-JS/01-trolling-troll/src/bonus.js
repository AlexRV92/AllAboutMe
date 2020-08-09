export const spam = (str) => {

comprobar()

// Definiendo funciones

function comprobar(){ 
    let comentario = prompt('Introduce un comentario aquí: ')
    let comentariomayus = comentario.toUpperCase() ;
    
  if ( (comentariomayus.includes('IDIOTA')) || (comentariomayus.includes('PERDEDORES')) || (comentariomayus.includes('CACA')) || (comentariomayus.includes('CULO')) || (comentariomayus.includes('PIS')) ) { 
  
    replace(comentario); 
  } else { 
    str = comentario; 
    return str;
  }    

}

function replace(comentario){ 
    
    let array = comentario.split("");
    let arraynuevo = [];
   
    for ( let i of array ){ 
  
      if (( i === "a") || ( i === "e") || ( i === "o") || ( i === "u")){ 
        arraynuevo.push("i"); 
    
      } else if (( i === "A")||( i ==="E")|| ( i==="O")||( i=== "U")){ 
          arraynuevo.push("I");
  
      } else { 
            arraynuevo.push(i)
      }
}    
    str = arraynuevo.join("");
    console.log(array)

}
}
