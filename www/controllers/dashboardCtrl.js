(function(){
	'use strict';
	angular
		.module('app_controllers')
		.controller('dashboardCtrl', dashboardCtrl);

		dashboardCtrl.$inject = ['userService'];

		function dashboardCtrl (userService) {
			var vm = this;

		}
})();
