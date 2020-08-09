export function countLettersAndDigits(input) {
  
   let busco = (/[A-Z]|[a-z]|[0-9]/gi);
   return (input.match(busco)||[]).length;
   
   
}