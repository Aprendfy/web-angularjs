(function (){
	'use strict';
	angular
		.module('app_interceptors')
		.factory('loadingInterceptor', loadingInterceptor);

		loadingInterceptor.$inject = [];

		function loadingInterceptor () {
			return {

				request: function (config) {
					var url = config.url;

					if (url.indexOf('templates') > -1)
						return config;

					var timestamp = new Date().getTime();

					config.url = url + "?timestamp=" + timestamp;
					console.log(config.url);

					return config;
				}
			}
		}
})();