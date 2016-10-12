var express = require('express');
var app = express();

var routes = require('./routes.js')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./Services/connectionTest.js')(app, routes.connectionTest);
require('./Services/authentication.js')(app, routes.authentication);


app.get(routes.root, function(req, res){
	res.send('Sucesso! Bem vindo ao servidor do BluPresence!');
});

app.listen(3000);