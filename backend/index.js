  
'use strict'

const expressApp = require('./app')

const port = process.env.PORT || 8080

expressApp.listen(port, () => console.info(`Server running in http://localhost:${port}`))