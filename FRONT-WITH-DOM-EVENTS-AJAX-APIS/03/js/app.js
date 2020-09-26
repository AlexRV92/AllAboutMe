//codigo javascript aquí
// Instrucciones
// Copia la carpeta hello-dom en tu carpeta de alumno cambiando el nombre por el del ejercicio.
// En el fichero js/app.js incluir el código JS necesario para obtener la siguiente información:

// Modificar el class del body (vacío) y agregar una clase 'theme-darken' y otra clase 'homepage'

let bodyclass = document.querySelector('body');
bodyclass.classList.add("theme-darken", "homepage");
console.info(bodyclass);

// Cambiar el título h1 por 'TASK KILLER'

let titulo = document.querySelector("h1");
titulo.innerText = "TASK KILLER"; 
console.info(titulo);


// Eliminar del class la clase 'homepage' mediante

bodyclass.classList.remove("homepage");
// Modificar el tipo de campo del campo email del formulario de contacto a tipo 'password'

let emailChange = document.querySelector('form input[type="email"]');
emailChange.setAttribute("type", "password")
console.info(emailChange);

// En el formulario de introducción de tarea, modificar el placeholder por 'Introduce aquí tu tarea'

let tareaform = document.querySelector('#theForm input[type="text"]');
tareaform.setAttribute("placeholder","Introduce aquí tu tarea ")
console.info(tareaform)
// Modificar los siguientes estilos del menú principal:
// los a dentro de los li deben tener un padding horizontal de 15px y vertical de 10px

// let styleLi = document.querySelectorAll('.nav li');

// for(let i = 0 ; i <= styleLi.length; i++){ 

//   styleLi[i].style.padding ="15px 10px";

// }

// console.info(styleLi)
// los li (exceptuando el último) deben tener un margin por la derecha de 10px

// document.querySelectorAll('.nav li').style.marginRight="10px"
// document.querySelectorAll('li.nav-item').childNodes[1].style.marginRight="10px"



// Añadir un padding de 20px al body por todos lados y cambiar el fondo al color '#FF0'
let selector = 'body';
document.querySelector(selector).style.backgroundColor = "#FF0";
document.querySelector(selector).style.padding = "20px";


// Reflexiones
// ¿Cuando modificas un estilo se refleja en la hoja de estilo o en el elemento?

