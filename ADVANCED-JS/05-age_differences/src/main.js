export const differenceInAges = (ages) => {
    
  let  edades = ages;
  let younger = 0;
  let older = 0;
  let diff = 0;
  let nuevo = [];

  for ( let i in edades){ 

    younger = Math.min.apply(null, edades);
    older = Math.max.apply(null, edades);
  }

  diff = older - younger;
  
  nuevo.push(younger);
  nuevo.push(older);
  nuevo.push(diff);

  return nuevo;
}