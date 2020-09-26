const events = require('events')

const Emitter = events.EventEmitter //referencia a clase EventEmitter

let eventEmitter = new Emitter()

//añadimos la función que escuchará al evento datos (Subscriber)
eventEmitter.on('timeupdate', (currentDateTime) => {
    console.clear()
    console.log(currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds())
})

eventEmitter.on('timeupdate', (currentDateTime) => {
    console.info("el tiempo!!!!")
})

setInterval(function() {
    //emitimos el evento en cada intervalo (Publisher)
    eventEmitter.emit('timeupdate', new Date())
}, 1000); //intervalo cada segundo