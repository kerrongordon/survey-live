(function(){
	'use strict';

	angular
		.module('survey', ['ui.router', 'firebase', 'ngAnimate'])

		.constant('furl', 'https://surveyq.firebaseio.com')
		.constant('furlUsers', 'https://surveyq.firebaseio.com/users')

		.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) { 
			$stateProvider
				.state('login', {
					url: '/login',
					templateUrl: 'view/login.html',
					data: {
						pageTitle: 'Login'
					},
					controller: 'loginCtrl',
					controllerAs: 'login'
				})
				.state('register', {
					url: '/register',
					templateUrl: 'view/login.html',
					data: {
						pageTitle: 'Register'
					},
					controller: 'registerCtrl',
					controllerAs: 'register'
				})
				.state('account', {
					url: '/account',
					templateUrl: 'view/account.html',
					data: {
						pageTitle: 'account'
					},
					controller: 'accountCtrl',
					controllerAs: 'account'
				})
				.state('home', {
					url: '/home',
					templateUrl: 'view/home.html',
					data: {
						pageTitle: 'Home'
					},
					controller: 'homeCtrl',
					controllerAs: 'home',
					resolve: {
				     	survey: [ 'furl', '$firebaseAuth', function(furl, $firebaseAuth) {
				     		var ref = new Firebase(furl);
							var authData = ref.getAuth();
							return authData;
				     	}]
				    }
				})

			$urlRouterProvider.otherwise('/login');
		}]) 


})();

(function(){
	'use strict';

	angular
		.module("survey").run(function ($rootScope, $state, $stateParams) {
		  	$rootScope.$state = $state;
		  	$rootScope.$stateParams = $stateParams;
		});

})();