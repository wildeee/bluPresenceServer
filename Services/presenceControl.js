module.exports = function(app, routename){

	app.post(routename, function(req, res){
		console.log(JSON.stringify(req.body, null, 2));
		res.send(
			req.body.filter(function(elem){
				var date = new Date(elem.data);
				return date.getDate() === 28 && date.getMonth() === 10 && date.getFullYear() === 2016;
			}).map(function(elem){
				return {
					idChamadaApp : elem.idChamadaApp,
					erro         : 'Não é possível lançar chamada para essa data'
				};
			})
		);
	})

}