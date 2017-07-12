(function (){
	'use strict';
	angular
		.module('app_interceptors')
		.factory('AuthInterceptor', AuthInterceptor);

		AuthInterceptor.$inject = ['$q','$location', '$injector' ];

		function AuthInterceptor ( $q,  $location, $injector) {
			return {
				request: function (config) {
					config.headers = config.headers || {};

					if($injector.get('authenticateService').getAuthenticate()){
						config.headers['Authorization'] = $injector.get('tokenControlService').getItem('token');
					}
					return config;
				},

				responseError: function (response) {
					if (response.status === 401 || response.status === 403){
							$location.path('/signin');
					}

					return $q.reject(response);
				}
			}
		}
})();