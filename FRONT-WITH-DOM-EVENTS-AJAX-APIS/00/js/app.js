//codigo javascript aquí
// Copia la carpeta hello-dom en tu carpeta de alumno.
// En el fichero js/app.js incluir el código JS necesario para obtener la siguiente información:
// Obtener el contenido del head
// Obtener el contenido del body
// Visualizar los siguientes datos:
// Codificación de caracteres
// MIME del fichero
// Tipo de documento
// Dominio
// Idioma
// Nº de formularios
// Nº de enlaces
// Nº de imágenes
// Nº de scripts
// Todos los resultados deben ser enviados a la consola del navegador.
// ##Reflexiones
// ¿Por qué el valor devuelto en el dominio? PORQUE ESTAMOS EJECUTANDO EL SERVIDOR DESDE LOCAL

console.info(document.head);
console.info(document.body);

console.info(document.characterSet);
console.info(document.contentType);
console.info(document.doctype);
console.info(document.domain);


console.info(document.forms);
console.info(document.links);
console.info(document.images);
console.info(document.scripts);

