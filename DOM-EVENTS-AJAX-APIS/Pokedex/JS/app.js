window.addEventListener('load', pageLoaded)

function pageLoaded(){ 
    console.info('pagina cargada')

    IniciarTareas()
    
}


function IniciarTareas(){ 

    
    document.querySelector('#search').addEventListener('submit', pokeBuscar);
    
}

function pokeBuscar (e){ 

    e.preventDefault()
    let pokebuscar = document.querySelector('#search-bar').value
    console.info(pokebuscar)

    pokedatos(pokebuscar)
}

function pokedatos(Data){ 

    console.info(Data)

    let peticionAJAX = new XMLHttpRequest()
      
     peticionAJAX.onreadystatechange = function(){
        // SE EJECUTA MUCHO POR ESO
        // Se jhace esto para q solo se haga esto solo una vez  4 es q esta listo y 200 es q no hay error (hay documentacion por internet)
  
        // CON ESTO VAMOS CONTROLANDO
        console.warn(this.readyState, this.status)
        if(this.readyState === 4 && this.status === 200){
  
        var pokemonData = this.response
        CreateCard(pokemonData)
         
        } else if( this.status === 404){ 
            alert('No se ha encontrado ningun pokemon, intentalo de nuevo')
        }
      }
      // SE PUEDE CARGAR LO Q QUERAMOS (pllguin)

        peticionAJAX.open('GET', 'https://pokeapi.co/api/v2/pokemon/' +Data )  
    
    /* Con dos parametros // metodo 'GET' y url 'www..' // */
    peticionAJAX.responseType = 'json'
    // Para q nos salga alog en el inspector pero una ver q lo tenemos hecho la funcioin es la llmada normla 
  
    peticionAJAX.send()

    
    

}

function CreateCard( Data ){ 

    console.info(Data)
    
    let nombre = Data.name;
    console.info(nombre);

    let type = []
    
    for(let i=0; i< Data.types.length; i++){ 

        
        type.push(Data.types[i].type.name) ;
        
    }

    console.info(type)
    

    let sprite = Data.sprites.front_default;
    console.info(sprite)
  
    
     let cardHTML = '<div class="col-sm-3"><div class="card"style="width: 25rem;"><img id="img-card" src="'+sprite+'"class="card-img-top" alt="..."><div class="card-body"><h2 id="card-title">'+nombre+'</h2><h5 id="type">'+type+'</h5></div></div></div>'

    console.info(cardHTML)

    let prevContainer = document.querySelector('#card-container').innerHTML
    console.info(prevContainer)

    let newContainer = document.querySelector('#card-container')

    newContainer.innerHTML = cardHTML + prevContainer
}
