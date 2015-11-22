(function(){
	'use strict';

	var accountCtrl = function($scope, $state, furlUsers, $firebaseArray, $firebaseObject, $timeout, $firebaseAuth) {
		var account = this;
		var ref = new Firebase(furlUsers);
		var authData = ref.getAuth();

		account.account = $firebaseObject(ref);

		account.name = $firebaseArray(ref);
		
		account.addUserName = function() {
			ref.push({
				name: account.name
			});
		};

		ref.on('value', function(snapshot) {
			$timeout(function() {
				console.log(snapshot.val());
				account.name = snapshot.val();
			});
		});
		

	}

	angular
		.module('survey')
		.controller('accountCtrl', [ '$scope', '$state', 'furlUsers', '$firebaseArray', '$firebaseObject', '$timeout', '$firebaseAuth', accountCtrl ]);

})();
(function(){
	'use strict';

	var homeCtrl = function($scope, $state, furl, $firebaseAuth, loginService) {
		var home = this;
		var ref = new Firebase(furl);
		var authData = ref.getAuth();

		var authObj = $firebaseAuth(ref);
		
		$scope.authData = authData
		
		console.log(authData);
		if (authData) {
		  	console.log("Authenticated user with uid:", authData.uid);
		}

	    home.logoutUser = function() {
	    	authObj.$unauth();
	    	$state.go('login');
	    }

	}

	angular
		.module('survey')
		.controller('homeCtrl', [ '$scope', '$state', 'furl', '$firebaseAuth', 'loginService', homeCtrl ])

})();

(function(){
	'use strict';

	var loginCtrl = function($scope, $state, furl, loginService) {
		var login = this;
		var events = {};
		var err = false;
		var loading = false;


		login.loginUser = function() {
			if (this.email || this.pass) {
				$scope.err = false;
				$scope.loading = true;
				loginService.loginUser(this);
			} else {
				$scope.err = true;
				$scope.loading = false;
			}
		}
		

	}

	angular
		.module('survey')
		.controller('loginCtrl', [ '$scope', '$state', 'furl', 'loginService', loginCtrl ]);

})();

(function(){
	'use strict';

	var registerCtrl = function($scope, $state, furl, registerService) {
		var register = this;
		var events = {};
		var err = false;
		var loading = false;
		
		register.createUserAccount = function() {
			if (this.con_pass === this.pass ) {
				$scope.err = false;
				$scope.loading = true;
				registerService.createUserAccount(this);
			} else {
				$scope.err = true;
				$scope.loading = false;
			}
		}
		

	}

	angular
		.module('survey')
		.controller('registerCtrl', [ '$scope', '$state', 'furl', 'registerService', registerCtrl ]);

})();