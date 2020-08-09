let test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300,
  3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1,
  139];

  // Use el método forEach() de la matriz para hacer un bucle sobre la siguiente matriz que sume 100 a cada uno  los valores si el valor es divisible por 3. 


  test.forEach(function(item, i){
    
    if(item % 3 === 0 ){ 

      test[i] = item+100;
    }
   });

  console.log(test);
