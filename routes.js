module.exports = function(){

	var routes = {

		 root           : '/'
		,connectionTest : '/testConnection'
		,authentication : '/authentication'
		,classes        : '/classes/professor/:id'
		,students       : '/students/:idlist'


	};

	return routes;
};