const fs = require('fs')

let visitsIncrementMiddleware = (req, res, next) => {
    console.log('Increment visit for route: ' + req.url)
    let currentVisits = req.app.get('visitCount')

    currentVisits++

    req.app.set('visitCount', currentVisits)

    console.log(`${currentVisits} visits`)

    fs.writeFileSync('stats/visits.txt', currentVisits)

    next()
}

module.exports = visitsIncrementMiddleware