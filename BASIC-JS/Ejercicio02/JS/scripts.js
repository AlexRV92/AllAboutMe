let shirtWidth = parseFloat(prompt("Introduce tu ancho")); 

let shirtLength = parseFloat(prompt("Introduce tu largo "));

let shirtSleeve = parseFloat(prompt("Introduce el tamaño de la manga"));

if (( shirtWidth >= 18 && shirtWidth < 20 ) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {

  console.log("Tu talla es la S ");

  } else if (( shirtWidth >= 20 && shirtWidth < 22 ) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) { 

    console.log("Tu talla es la M");

  } else if (( shirtWidth >= 22 && shirtWidth < 24 ) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) { 

    console.log("Tu talla es la L");
    
  } else if (( shirtWidth >= 24 && shirtWidth < 26 ) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) { 

    console.log("Tu talla es la XL");

  } else if (( shirtWidth >= 26 && shirtWidth < 28 ) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) { 

    console.log("Tu talla es la XXL");

  } else if (( shirtWidth === 28 ) && (shirtLength === 34 ) && (shirtSleeve === 10.13)) { 

    console.log("Tu talla es la XXXL");

} else { 

    console.log("N/A")
  }