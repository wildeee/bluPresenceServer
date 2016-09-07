module.exports = function(app){

	app.get('/testConnection', function(req, res){
		res.send({
			 message : 'Conexão efetuada com sucesso!'
			,date    : new Date()
		});
	});

};