module.exports = function(){

	var routes = {

		 root           : '/'
		,connectionTest : '/testConnection'
		,authentication : '/authentication'
		,classes        : '/classes/professor/:id'


	};

	return routes;
};