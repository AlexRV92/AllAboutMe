export const sumOfMinimums = (arr) => {
  
  let matriz = [];
  let total = 0;

  for ( let i in matriz ){ 

    var minimo = Math.min.apply(null, matriz[i]);
    total = total + minimo;
  }

  return total

  // HAY ALGUN PROBLEMA CON EL ASSERT DEL MAIN.SPEC. PROBADO EN CODEPEN CREANDO LET ARR Y PASANDOLO A UNA FUNCION 

}