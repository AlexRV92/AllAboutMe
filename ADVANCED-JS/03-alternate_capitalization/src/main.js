export function capitalize(s) {
 
    let resultado = [];
    let primera = s.split("");
    let segunda = s.split("");
    
    for ( let i in primera){ 
        if ( i % 2 == 0 ){   
            primera[i] = primera[i].toUpperCase();
        }
    }

    for ( let i in segunda){ 
        if ( i % 2 != 0){ 
            segunda[i] = segunda[i].toUpperCase(); 
        }
    }

    primera = primera.join("");
    segunda = segunda.join("");
    resultado.push(primera);
    resultado.push(segunda);
   
    return resultado
}