module.exports = function(app, routename){

	app.post(routename, function(req, res){
		console.log(req.body);
		var alunos = require('./../Data/Students.json');
		var alunoAutenticado = null;
		alunos.some(function(aluno){
			if (aluno.login === req.body.login && aluno.password === req.body.senha){
				alunoAutenticado = aluno;
				return true;
			}
		});
		console.log(alunoAutenticado);

		if (!alunoAutenticado){
			res.statusCode = 404;
			res.send('Authentication failed!');
		} else {
			res.send({
				id: alunoAutenticado.id,
				nome: alunoAutenticado.nome
			});
		}
	})

}