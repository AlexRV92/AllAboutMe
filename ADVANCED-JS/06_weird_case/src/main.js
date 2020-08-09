export const toWeirdCase = (text) => {

   
   let words = text.split(" ");
   let palabras = []
   let final = []
   
   for (let i in words){
      palabras = words[i].split("")
      
      for (let k in palabras){
      
         if ( k % 2 == 0 ){ 
            palabras[k] = palabras[k].toUpperCase()
         }
      }
     palabras = palabras.join("");
      final.push(palabras);
   }
  return (final.join(" "))
}