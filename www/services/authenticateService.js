(function (){
	'use strict';
	angular
		.module('app_services')
		.factory('authenticateService', authenticateService);

		authenticateService.$inject = ['$state', 'tokenControlService', '$auth'];

		function authenticateService ($state, tokenControlService, $auth) {

			var _getAuthenticate = function () {
				var token = tokenControlService.getItem('token');
				if (token) return true;
				return false;

			}

			var _login = function (objForm){
				return $auth.login(objForm)
					.then(function (result){
						console.log('login', result);
						tokenControlService.setItem('token', result.data.payload.authorization);
						tokenControlService.setItem('id', result.data.payload._id);
						return result.status;
					})
					.catch(function (err){
						console.log("error", err);
					});
			}

			return {
				getAuthenticate: _getAuthenticate,
				login: _login
			}
		}
})();