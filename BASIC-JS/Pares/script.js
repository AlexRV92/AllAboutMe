let pares = 0;
let impares = 0; 


for (var i=1; i <= 50 ; i++ ){ 

  if ( i % 2 === 0 ){ 
    pares++;
  } else { 
    impares++;
  }
}

console.log("Hay " +pares +" numeros pares y " +impares +" numeros impares entre 1 y 50");