var contador = 10; 

( function () { 

  function laugh(contador) { 

    var line= " ";
    for (i=1; i<= contador; i++) { 

      line += "ja ";
    }

    return line;
    
  } ;

  console.log(laugh(10));
}());


