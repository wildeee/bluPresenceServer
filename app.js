var express = require('express');
var app = express();

require('./Services/connectionTest.js')(app);


app.get('/', function(req, res){
	res.send('Sucesso! Bem vindo ao servidor do BluPresence!');
});

app.listen(3000);