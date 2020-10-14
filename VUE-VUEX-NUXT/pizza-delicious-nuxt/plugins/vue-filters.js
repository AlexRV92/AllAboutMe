import Vue from 'vue'

//configuramos los filtros de mi aplicación

Vue.filter('toDate', (date) => {
    let shortTime = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Intl.DateTimeFormat('en-BG', shortTime).format(date)
})

Vue.filter('toDateTime', (date) => {
    let shortTime = { year: 'numeric', month: 'short', day: 'numeric', hour };
    return new Intl.DateTimeFormat('en-BG', shortTime).format(date)
})

Vue.filter('statusLabel', (statusId) => {
    statusId--
    let statusList = ['Pendiente', 'Enviado', 'Entregrado', 'Cancelado'];

    return statusList[statusId]
})

Vue.filter("toMoney", (value) => {
    return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(value)
})