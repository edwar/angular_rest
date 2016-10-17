/**
* FinalApp Module
*
* Description
*/
angular.module('FinalApp')
.factory('PostResource', ['$resource', function($resource){
	return $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"},{update:{method: "PUT"}});
}])