var express = require('express');
var app = express();

var routes = require('./routes.js')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./Services/connectionTest.js')       (app, routes.connectionTest);
require('./Services/authentication.js')       (app, routes.authentication);
require('./Services/classes.js')              (app, routes.classes);
require('./Services/students.js')             (app, routes.students);
require('./Services/presenceControl.js')      (app, routes.presenceControl);
require('./Services/studentAuthentication.js')(app, routes.studentAuthentication);


app.get(routes.root, function(req, res){
	res.send('Sucesso! Bem vindo ao servidor do BluPresence!');
});

app.listen(process.env.PORT || 3000);