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
            .state('chapter', {
                url: '/chapter',
                templateUrl: 'templates/chapter/chapter.html',
                controller: 'chapterCtrl',
								controllerAs: 'vm'
						})
            .state('chapter-new', {
                url: '/chapter-new',
                templateUrl: 'templates/chapter/chapter-new.html',
                controller: 'chapterCtrl',
								controllerAs: 'vm'
						})
            .state('chapter-edit', {
                url: '/chapter-edit',
                templateUrl: 'templates/chapter/chapter-new.html',
                controller: 'chapterCtrl',
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
