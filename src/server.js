const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
    autoescape: false
})

server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

server.get('/', function (req,res) {
    return res.render('index.njk')
})

server.get('/about', function (req,res) {
    return res.render('about.njk')
})

server.get('/projects', function (req,res) {
    return res.render('projects.njk')
})


server.listen(3300, () => {
    console.log('SERVER IS RUNNING');
})