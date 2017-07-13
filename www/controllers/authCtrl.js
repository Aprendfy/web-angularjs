(function(){
	'use strict';
	angular
		  .module('app_controllers')
		  .controller('authCtrl', authCtrl);

		  authCtrl.$inject = ['authenticateService', '$state', '$http', '$auth', 'registerService'];

		  function authCtrl(authenticateService, $state, $http, $auth, registerService){

		  	var vm = this;

		  	vm.signin = signin;
		  	vm.signup = signup;

		  	function signin (objForm){
					const body = {
						email: objForm.email,
						password: objForm.password
					}
					authenticateService.login(body)
						.then(function(result){
							$state.go('dashboard');
			  		})
			  		.catch(function(err){
			  		});
		  	}

		  	function signup(form){
					const body = {
						name: form.name,
						email: form.email,
						password: form.password,
						type: 'PUBLISHER'
					};
					registerService.register(body)
					.then(function (result) {
						  $state.go('dashboard');
					});
		  	}
		  }
})();
