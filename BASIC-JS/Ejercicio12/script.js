function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}


emotions("Feliz", function reir(num) {
  var line = ""; 
  for (var i = 0; i < num; i++) { 
  line += "JA ";
} 
return line; 


});