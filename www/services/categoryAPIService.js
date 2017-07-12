(function (){
	'use strict';
	angular
		.module('app_services')
		.factory('categoryAPIService', categoryAPIService);

		categoryAPIService.$inject = ['$state', '$http', 'config'];

		function categoryAPIService ($state, $http, config) {

      var _getCategories = function (objParam) {
          return $http.get(config.baseUrl + 'app/categories/')
          .then(function (result) {
            console.log('result categories', result);
            return result.data.payload;
          });
      }

			var _getCategory = function (id) {
          return $http.get(config.baseUrl + 'app/categories/' + id)
          .then(function (result) {
            return result.data.payload;
          });
      }

      var _add = function (category){
        return $http.post(config.baseUrl + 'app/categories/', category)
           .then(function (result) {
             return result.data.payload;
           });
      }

			var _update = function (category, id) {
				return $http.put(config.baseUrl + 'app/categories/'+ id, category)
					 .then(function (result) {
						 return result.data.payload;
					 });
			}

			var _upload = function (img) {
        return $http.post(config.baseUrl + 'novels/upload', img, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
       })
       .then(function (result) {
         return result.data.payload;
         });
      }
        
      var _delete = function(id) {
        return $http.delete(config.baseUrl + 'app/categories/'+ id)
					 .then(function (result) {
						 return result.data.payload;
					 });  
      }

			return {
				getCategories: _getCategories,
        add : _add,
				upload: _upload,
				getCategory: _getCategory,
        update: _update,
        delete: _delete
			}
		}
})();
