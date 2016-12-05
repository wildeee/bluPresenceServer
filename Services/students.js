module.exports = function(app, routename){

	var students = require('./../Data/Students.json');

	app.get(routename, function(req, res){
		console.log(req.params);
		var ids = req.params.idlist.split(',');
		var classStudents = students.filter(function(student){
			return ids.some(function(id){
				return id == student.id;
			});
		}).map(function(student){
			return {
				 id   : student.id
				,nome : student.nome
			};
		});
		res.send(classStudents);
	});

}