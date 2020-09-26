const express = require('express')
const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const port = process.env.PORT || 8081
const app = express()
    //app.disable('x-powered-by')

function resetPoweredBy(poweredName = '') {
    return (req, res, next) => {
        res.set('X-Powered-By', poweredName)
            //res.removeHeader('X-powered-By')
        next()
    }
}

function createHeaderVersionMiddleware(appVersion = '1.0.0') {
    return (req, res, next) => {
        res.set('Accept-version', appVersion)
        next()
    }
}

app.use(createHeaderVersionMiddleware(process.env.APP_VERSION))

//app.use(resetPoweredBy('Codetakers'))

app.get('/', (req, res) => {
    res.send('express app home')
})

app.get('/contacto', (req, res) => {
    res.send('express app home')
})

app.get('/trabajos', (req, res) => {
    res.send('express app trabajos')
})

app.listen(port, () => {
    console.info(`Server running in http://127.0.0.1:${port}`)
})
