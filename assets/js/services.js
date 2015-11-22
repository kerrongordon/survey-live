(function(){
	'use strict';

	var firebaseData = function($firebaseAuth, furl) {
		var root = new Firebase(furl);

		var service = {
			root: root,
			users: 'kerron',
			emails: 'kgpsounds.com@gmail.com'
		};
		return service;
		console.log(service);
	}

	function login(user) {
      return firebaseAuthObject.$authWithPassword(user);
    }

	angular
		.module('survey')

		.factory('firebaseData', ['$firebaseAuth', 'furl', firebaseData])


})();


(function(){
	'use strict';

	var loginService = function($state, furl, $firebaseArray, $firebaseAuth, $timeout) {
		var loginService = {};
		var ref = new Firebase(furl);
		var users = $firebaseArray(ref);
		var userAuth =  {};
		

		return {
			loginUser: function(users) {
				console.log(users);

				var authObj = $firebaseAuth(ref);

				authObj.$authWithPassword({
					email: users.email,
				  	password: users.pass
				}).then(function(authData) {
				  console.log("User " + authData.uid + " created successfully!");
				  	if (authData) {
				  		$timeout(function() {
							$state.go('home');
						}, 2000);
						
						return authData;
					}
				});
			}
		}


	}

	angular
		.module('survey')
		.factory('loginService', [ '$state', 'furl', '$firebaseArray', '$firebaseAuth', '$timeout', loginService])

})();


(function(){
	'use strict';

	var registerService = function($state, furl, $firebaseArray, $firebaseAuth, $timeout) {
		var registerService = {};
		var ref = new Firebase(furl);
		var users = $firebaseArray(ref);
		

		return {
			createUserAccount: function(users) {
				console.log(users);

				var authObj = $firebaseAuth(ref);

				authObj.$createUser({
					email: users.email,
				  	password: users.pass
				}).then(function(userData) {
				  console.log("User " + userData.uid + " created successfully!");
				  	if (userData) {
				  		$timeout(function() {
							$state.go('login');
						}, 2000);
					}
				});
			}
		}

		//return createUserAccount();

	}

	angular
		.module('survey')
		.factory('registerService', [ '$state', 'furl', '$firebaseArray', '$firebaseAuth', '$timeout', registerService])

})();
(function(){
	'use strict';

	var usersService = function($state, furl, $firebaseArray, $firebaseAuth, $firebaseObject) {
		var usersService = {};
		var ref = new Firebase(furl+'/users');
		var usersName = $firebaseArray(ref);
		var syncObject = $firebaseObject(ref);
		var authData = ref.getAuth();		

		return {
			addUserName: function(usersName) {
				this.usersName.push({Name: usersName});
				console.log(usersName);
			}
		}

	}

	angular
		.module('survey')
		.factory('usersService', [ '$state', 'furl', '$firebaseArray', '$firebaseAuth', '$firebaseObject', usersService])

})();