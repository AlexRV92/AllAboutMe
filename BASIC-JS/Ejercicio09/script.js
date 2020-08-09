var ancho = 0;

function buildTriangle (ancho){ 
  triangulo="";

  for(var i=1; i <= ancho; i++){ 

    
    triangulo = triangulo + (makeLine(i));
  }
  return triangulo;
}


function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* "
  }
  return line + "\n";
}

console.log(buildTriangle(5));