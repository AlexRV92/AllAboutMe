//codigo javascript aquí


// Añadir tareas

// function addTarea(){

//   document.querySelector('button').addEventListener('click', manejarTarea);
  
// }
//  Evento de añadir
var arraytareas=[];


window.addEventListener('load', loadedPage)

function loadedPage() {
  console.info('Página cargada')
  IniciarTareas()
}

function IniciarTareas(){ 
    
    addTarea();
  
  // si no esta vacio esto permite agregar los eventos tmb a los elementos que estan ya creados
  let lista = document.querySelector('ul');

    console.info(lista)
    let items = lista.querySelectorAll('li');
    console.info(items)
    for ( let i=0; i< items.length; i++){ 
    var itemindice = items[i]; 
    itemindice.querySelector('input.checkbox').addEventListener('click', claseCompletado);
    itemindice.querySelector('i.remove').addEventListener('click', borrar);
    }
}

function addTarea(){ 
  document.querySelector('button').addEventListener('click', manejarTarea);
}

function manejarTarea(event){
  
  event.preventDefault();
  let nuevaTarea = document.querySelector('input');

  console.info(nuevaTarea.value);


  if(nuevaTarea.value !== ""){ 

    console.info("Agregando a tareas: " +nuevaTarea.value);

    let padre = document.querySelector('ul');
    let hijo = document.createElement('LI');
    // let nuevo = hijo.cloneNode(true);
    let nuevo = padre.appendChild(hijo);
    const inner = '<div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox">'+nuevaTarea.value 
    const inner2 = '<i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline" ></i>'

    nuevo.innerHTML = inner + inner2;
    padre.appendChild(nuevo);
    console.info(nuevo);
    
    let lista = document.querySelector('ul');

    console.info(lista)

    let items = lista.querySelectorAll('li');

    console.info(items)

  
    for ( let i=0; i< items.length; i++){ 

    var itemindice = items[i]; 

    itemindice.querySelector('input.checkbox').addEventListener('click', claseCompletado);
    itemindice.querySelector('i.remove').addEventListener('click', borrar);
    }
    
  } else { 
    alert("DEBES INTRODUCIR UN TEXTO PARA AÑADIR UNA NUEVA TAREA"); 
  }

  arraytareas.push({name: nuevaTarea.value, done:false}); 
  console.info(arraytareas)
  nuevaTarea.value ='';
  nuevaTarea.focus();
}

function borrar(event) { 
  
  this.parentNode.parentNode.removeChild(this.parentNode);
  
}

function claseCompletado(e){ 

  let item = e.currentTarget;
  let nodoPadre = item.parentNode;
  let nodo2 = nodoPadre.parentNode;
  let li = nodo2.parentNode;

  li = li.classList.toggle( "completed")
  
  console.info(li)
}




