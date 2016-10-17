/**
* FinalApp Module
*
* Description
*/
angular.module('FinalApp')
.controller('MainController', ['$scope','$resource','PostResource', function($scope,$resource,PostResource){
	User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});
	$scope.posts = 	PostResource.query();
	$scope.users = 	User.query();
	$scope.removePost = function (post) {
		PostResource.delete({id: post.id},function(data){
			console.log(data);
		});
		$scope.posts = $scope.posts.filter(function(element){
			return element.id !== post.id;
		});
	}
}])
.controller('PostController', ['$scope','PostResource','$resource','$routeParams','$location', function($scope,PostResource,$resource,$routeParams,$location){
	$scope.title = "Editar Post"
	$scope.post = 	PostResource.get({id: $routeParams.id});
	$scope.savePost = function (argument) {
		PostResource.update({id: $scope.post.id},{data: $scope.post},function(data){
			console.log(data);
			$location.path("/post/"+$scope.post.id);
		});
	}
}])
.controller('NewPostController', ['$scope','$resource','PostResource','$location', function($scope,$resource,PostResource,$location){
	$scope.post = {};
	$scope.title = "Crear Post";
	$scope.savePost = function (argument) {
		PostResource.save({data: $scope.post},function(data){
			console.log(data);
			$location.path("/");
		});
	}
}]);