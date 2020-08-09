export const spam = (str) => {

    
    let array = str.split("");
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
    console.log(str) // No añade ! al array

    return str
}
