const express = require('express');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');
const fibonacci = require('./fibonacci');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => res.render('index.html', { name: 'World' }))

app.get('/fibonacci/', (req, res) => {
    res.json({
        result: fibonacci(req.query.number),
    });
})

module.exports = app
