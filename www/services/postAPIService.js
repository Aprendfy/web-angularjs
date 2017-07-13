(function(){
  'use strict';
   angular
      .module('app_services')
      .factory('postAPIService', postAPIService);

      postAPIService.$inject = ['config', '$http'];

      function postAPIService(config, $http){

        var _getAll = function () {
            return $http.get(config.baseUrl + 'app/posts/?category=')
            .then(function (result) {
              return result.data.payload;
            });
        }

        var _add = function (objParam){
          return $http.post(config.baseUrl + 'posts/', objParam)
             .then(function (result) {
               return result.data;
             });
        }

        var _getChapter = function (id){
          return $http.get(config.baseUrl + 'posts/'+id)
             .then(function (result) {
               return result.data;
             });
        }

        var _deletar = function (id){
          return $http.delete(config.baseUrl + 'posts/'+id)
             .then(function (result) {
               return result.data;
             });
        }

        var _update = function (objParam){
          return $http.put(config.baseUrl + 'posts/'+objParam._id, objParam)
             .then(function (result) {
               return result.data;
             });
        }


  			return {
  				getAll: _getAll,
          add: _add,
          getChapter: _getChapter,
          update: _update,
          deletar: _deletar
  			}
      }
})();
