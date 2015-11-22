(function(){
	'use strict';

	var loginForm = function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/loginform.html'
		}
	}

	angular
		.module('survey')

		.directive('loginForm', [loginForm])

})();
(function(){
	'use strict';

	var mPreloader = function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/preloader.html'
		};
	}

	angular
		.module('survey')

		.directive('mPreloader', [mPreloader])

})();
(function(){
	'use strict';

	var registerForm = function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/registerform.html'
		}
	}

	angular
		.module('survey')

		.directive('registerForm', [registerForm])

})();
(function(){
	'use strict';

	var mTabs = function() {
		return {
			restrict: 'E'
		};
	}

	angular
		.module('survey')

		.directive('mTabs', [mTabs])

})();