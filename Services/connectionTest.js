module.exports = function(app, routename){

	app.get(routename, function(req, res){
		res.send({
			 message : 'Conexão efetuada com sucesso!'
			,date    : new Date()
		});
	});

};