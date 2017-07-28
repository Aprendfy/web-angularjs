(function(){
  'use strict';
   angular
      .module('app_services')
      .factory('postAPIService', postAPIService);

      postAPIService.$inject = ['config', '$http'];

      function postAPIService(config, $http){

        var _getAll = function (category) {
            return $http.get(config.baseUrl + 'app/posts/?category='+category)
            .then(function (result) {
              console.log('get facebook posts', result.data.payload);
              return result.data.payload;
            });
        }

        var _add = function (objParam){
          return $http.post(config.baseUrl + 'app/posts/', objParam,{
                transformRequest:angular.identity,
                headers:{'Content-type':undefined}
             })
             .then(function (result) {
               return result.data.payload;
             });
        }

        var _getChapter = function (id){
          return $http.get(config.baseUrl + 'posts/'+id)
             .then(function (result) {
               return result.data;
             });
        }

        var _deletar = function (id){
          return $http.delete(config.baseUrl + 'app/posts/'+id)
             .then(function (result) {
               return result.data;
             });
        }

        var _update = function (objParam, id){
          return $http.put(config.baseUrl + 'app/posts/'+id, objParam, {
                transformRequest:angular.identity,
                headers:{'Content-type':undefined}
             })
             .then(function (result) {
               console.log('update post', result.data.payload);
               return result.data.payload;
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
