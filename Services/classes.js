module.exports = function(app, routename){

	app.get(routename, function(req, res){
		console.log(req.params);
		var integerRegex = /^\d+$/;
		if (!integerRegex.test(req.params.id)){
			res.statusCode = 400;
			res.send('Badly formatted identifier - must be an Integer value.');
			return;
		}
		
		var classes = require('./../Data/Classes.json');
		var professorClasses = classes.filter(function(someClass){
			return someClass.professor == req.params.id;
		});

		res.send(professorClasses);
	});

}