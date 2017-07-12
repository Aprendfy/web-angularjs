(function(){
	'use strict';
	angular.module('app_services')
		   .factory('productsAPIService', productsAPIService);

		   productsAPIService.$inject = ['$http'];

		   function productsAPIService($http){

			   	var _getAll = function(){
			   		return $http.get('http://localhost:3000/products')
			   					.then(function(result){
			   						return result.data.data;
			   					})
			   					.catch(function(err){
			   						return console.log("err", err);
			   					});
			   	}

			   	var _create = function (product){
			   		 return $http.post('http://localhost:3000/products', product)
			   		 .then(function(result){
			   		 		console.log('create', result);
			   		 		return result.data.data;
			   		 })
			   		 .catch(function(err){
			   		 	console.log('err', err);
			   		 })
			   	}

			   	var _remove = function (id){
			   		 return $http.delete("http://localhost:3000/products/"+id)
			   		 			  .then(function(result){
			   		 			  	return result.data;
			   		 			  })
			   		 			  .catch(function(err){
			   		 			  	console.log("err", err);
			   		 			  });
			   	}
			   	
			   	return {
			   		getAll : _getAll,
			   		create : _create,
			   		remove : _remove
			   	}
		   
		   }
})();