module.exports = function(app, routename){

	var deepcopy = require("deepcopy");

	app.get(routename, function(req, res){
		console.log(req.params);
		var integerRegex = /^\d+$/;
		if (!integerRegex.test(req.params.id)){
			res.statusCode = 400;
			res.send('Badly formatted identifier - must be an Integer value.');
			return;
		}
		
		var classes = require('./../Data/Classes.json');
		var professorClasses = deepcopy(classes)
			.filter(function(someClass){
				return someClass.professor == req.params.id;
			}).map(function(someClass){
				delete someClass.professor;
				return someClass;
			});
		console.log(professorClasses);

		res.send(professorClasses);
	});

}