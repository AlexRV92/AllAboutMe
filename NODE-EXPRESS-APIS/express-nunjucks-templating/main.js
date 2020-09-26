const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const port = process.env.PORT || 8080

const nunjucksEnv = nunjucks.configure('views', {
    autoescape: true,
    express: app
})

nunjucksEnv.addFilter('truncate', function(str, strLength = 100, sufix = "...") {
    return str.substring(0, strLength) + sufix
})

app.get('/', (req, res) => {
    let newsList = [{
            published_at: 'April 25, 2017',
            title: 'And this is a<br />massive headline',
            description: 'Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />facilisis ante sed etiam magna interdum congue.Lorem ipsum dolor <br />amet nullam sed etiam veroeros.',
            photo: 'http://flashexperience.net/eoi/massively/images/pic01.jpg'
        },
        {
            published_at: 'April 24, 2017',
            title: 'Sed magna<br />ipsum faucibus',
            description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.',
            photo: 'http://flashexperience.net/eoi/massively/images/pic02.jpg'
        }, {
            published_at: 'April 22, 2017',
            title: 'Sed magna<br />ipsum faucibus',
            description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.',
            photo: 'http://flashexperience.net/eoi/massively/images/pic03.jpg'
        }, {
            published_at: 'April 21, 2017',
            title: 'Sed magna<br />ipsum faucibus',
            description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.',
            photo: 'http://flashexperience.net/eoi/massively/images/pic04.jpg'
        }, {
            published_at: 'April 28, 2017',
            title: 'Sed magna<br />ipsum faucibus',
            description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.',
            photo: 'http://flashexperience.net/eoi/massively/images/pic05.jpg'
        }, {
            published_at: 'April 30, 2017',
            title: 'Sed magna<br />ipsum faucibus',
            description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.',
            photo: 'http://flashexperience.net/eoi/massively/images/pic06.jpg'
        },
        {
            published_at: 'April 25, 2017',
            title: 'And this isasdfasdfasdfasdfasdf a<br />massive headline',
            description: 'Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />facilisis ante sed etiam magna interdum congue.Lorem ipsum dolor < br / >amet nullam sed etiam veroeros.',
            photo: 'http://flashexperience.net/eoi/massively/images/pic01.jpg'
        }
    ]

    res.render('layouts/index.html.tpl', { news: newsList })
})

app.get('/index', (req, res) => {
    res.redirect('/')
})

app.get('/generic', (req, res) => {
    res.render('layouts/generic.html.tpl')
})

app.get('/elements', (req, res) => {
    res.render('layouts/elements.html.tpl')
})

app.listen(port, function() {
    console.log(`Servidor activo en http://localhost:${port}`)
})