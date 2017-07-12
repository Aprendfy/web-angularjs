(function (){
	'use strict';
	angular
		.module('app_services')
		.factory('userService', userService);

		userService.$inject = ['$state', '$http', 'config'];

		function userService ($state, $http, config) {

      var _listAll = function (objParam) {
          return $http.get(config.baseUrl + 'users/')
          .then(function (result) {
            return result.data;
          });
      }

      var _changeUserApprove = function (objUser){
        return $http.put(config.baseUrl + 'users/', objUser)
           .then(function (result) {
             return result.data;
           });
      }

			var _getCurrentUser = function () {
				return localStorage.getItem('id');
			}

			return {
				listAll : _listAll,
        changeUserApprove : _changeUserApprove,
				getCurrentUser: _getCurrentUser
			}
		}
})();