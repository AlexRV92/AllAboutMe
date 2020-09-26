
// Obtener el H1 de la página
// Obtener todos los elementos li existentes en la página
// Obtener todos los li pertenecientes al menú principal
// Obtener el número de tareas en mi lista
// Obtener el último elemento de mi lista de tareas
// Obtener el primer li de cada ul existente
// Obtener todos los campos de formulario de tipo text
// Todos los resultados deben ser enviados a la consola del navegador.

// ##Reflexiones

// ¿Qué ocurre si con el método querySelector uso el selector 'li'?
// ¿Y si le paso el selector '.task-item'?
// ¿Podrías discernir cuál es el comportamiento de querySelector?


console.info(document.querySelector('h1'));

console.info(document.querySelectorAll('li'));

let nav = document.querySelector('nav');

console.info(nav.querySelectorAll('li'));

let tarea = document.querySelectorAll('li.task-item');

console.info(tarea.length);

let ultimo = document.querySelector('li.task-item:last-child');
console.info(ultimo);

let primer = document.querySelectorAll('ul li:first-child');
console.info(primer);

let formulario = document.querySelectorAll('form input[type="text"]');



console.info(formulario);
