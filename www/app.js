(function  () {
	'use strict';
	angular.module('app_controllers', []);
	angular.module('app_services', []);
	angular.module('app_components', []);
	angular.module('app_interceptors', []);

	angular.module('app', [
		'ui.router',
		'ui.bootstrap',
		'ngAnimate',
		'ngMessages',
		'app_controllers',
		'app_services',
		'app_components',
		'app_interceptors',
		'satellizer',
		'ngFileUpload'
	])
	.run(function  ($rootScope, $state, authenticateService) {

		  // $rootScope.$on('$routeChangeStart', function(event, next, current) {
      //           if (next.auth) {
      //               if (!authenticateService.getToken()) {
      //                   $rootScope.$evalAsync(function() {
      //                       $state.go('login');
      //                   });
      //               }
      //           }
      //       });
	});

})();
