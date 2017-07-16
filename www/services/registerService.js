(function (){
	'use strict';
	angular
		.module('app_services')
		.factory('registerService', registerService);

		registerService.$inject = ['$state', 'tokenControlService', '$auth', '$http', 'config'];

		function registerService ($state, tokenControlService, $auth, $http, config) {

      var _register = function (objParam) {
         return $http.post(config.baseUrl + 'admin/auth/register/', objParam)
            .then(function (result) {
							tokenControlService.setItem('token', result.data.payload.authorization);
							tokenControlService.setItem('id', result.data.payload._id);
              return result.payload;
            });
      }

			return {
				register : _register
			}
		}
})();