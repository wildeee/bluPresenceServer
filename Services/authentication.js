module.exports = function(app, routename){

	app.post(routename, function(req, res){
		console.log(req.body);
		res.send({
			 "id"       : 123
			,"login"    : "prof"
			,"password" : "pass"
		});
	})

}