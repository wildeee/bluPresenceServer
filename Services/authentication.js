module.exports = function(app, routename){

	app.post(routename, function(req, res){
		console.log(req.body);
		var professores = require('./../Data/Users.json');
		var professorAutenticado = null;
		professores.some(function(professor){
			if (professor.login === req.body.login && professor.password === req.body.senha){
				professorAutenticado = professor;
				return true;
			}
		});
		console.log(professorAutenticado);

		if (!professorAutenticado){
			res.statusCode = 404;
			res.send('Authentication failed!');
		} else {
			res.send(professorAutenticado);
		}
	})

}