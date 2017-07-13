(function () {
  'use strict';
  angular
   .module('app')
   .config(['$urlRouterProvider', '$stateProvider', '$authProvider','$locationProvider','$httpProvider',
		function  ($urlRouterProvider, $stateProvider, $authProvider, $locationProvider, $httpProvider) {

       $authProvider.loginUrl = "http://localhost:3000/v1/admin/auth/login";
      //  $authProvider.loginUrl = "https://stark-beach-53351.herokuapp.com/users/authenticate";
       $httpProvider.interceptors.push('AuthInterceptor');
       
		   $stateProvider
            .state('home', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard/dashboard.html',
                controller: 'dashboardCtrl',
                controllerAs: 'vm'
            })
            .state('signin', {
                url: '/signin',
                templateUrl: 'templates/authentication/signin.html',
                controller: 'authCtrl',
                controllerAs: 'vm'
            })
						.state('signup', {
                url: '/signup',
                templateUrl: 'templates/authentication/signup.html',
                controller: 'authCtrl',
                controllerAs: 'vm'
            })
						.state('category', {
                url: '/category',
                templateUrl: 'templates/category/category.html',
                controller: 'categoryCtrl',
								controllerAs: 'vm'
						})
            .state('category-new', {
                url: '/category-new',
                templateUrl: 'templates/category/category-new.html',
                controller: 'categoryCtrl',
								controllerAs: 'vm'
						})
            .state('category-edit', {
                url: '/category-edit',
                templateUrl: 'templates/category/category-new.html',
                controller: 'categoryCtrl',
								controllerAs: 'vm'
						})
            .state('post', {
                url: '/post',
                templateUrl: 'templates/post/post.html',
                controller: 'postCtrl',
								controllerAs: 'vm'
						})
            .state('post-new', {
                url: '/post-new',
                templateUrl: 'templates/post/post-new.html',
                controller: 'postCtrl',
								controllerAs: 'vm'
						})
            .state('post-edit', {
                url: '/post-edit',
                templateUrl: 'templates/post/post-new.html',
                controller: 'postCtrl',
								controllerAs: 'vm'
						})
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard/dashboard.html',
                controller: 'dashboardCtrl',
                controllerAs: 'vm'
            });

      // $locationProvider.html5Mode(true);
			$urlRouterProvider.otherwise('/signin');

		}])
    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.interceptors.push('AuthInterceptor');
    }]);

})();
