const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const port = process.env.PORT || 8080

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use(express.static('public'))

function createWebsiteResponse(req, res) {
    let cvData = {
        profile: {
            firstname: 'Juan Manuel',
            lastname: 'Castillo Andrades',
            avatar: 'https://picsum.photos/500',
            address: 'C/ ejemplo 23, Sevilla, Sevilla 40011 (España)',
            phone: '+34 666 66 66 66',
            email: 'juanmanuel@flashexperience.net',
            intro: 'FullStack developer especializado en PHP, JS, Node, HTML5 blau, blau, blau....'
        },
        experience: [{
                job_title: 'SENIOR WEB DEVELOPER 3',
                company: 'Intelitec Solutions',
                description: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
                start_at: 'March 2013',
                end_at: 'present'
            },
            {
                job_title: 'SENIOR WEB DEVELOPER 2',
                company: 'Amazon',
                description: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
                start_at: 'March 2013',
                end_at: 'present'
            },
            {
                job_title: 'SENIOR WEB DEVELOPER 1',
                company: 'Cecotec',
                description: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
                start_at: 'March 2013',
                end_at: 'present'
            }
        ]
    }

    res.render('index.html.tpl', cvData)
}

app.get('/', createWebsiteResponse)

app.listen(port, function() {
    console.log(`Servidor activo en http://localhost:${port}`)
})