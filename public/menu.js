(function(){
	var myApp =	angular.module('myApp', ['bootstrapSubmenu','ngRoute','ui.bootstrap']);

/////////////////////////////////////////////////////////////////////////////////////////

//var ngWaste = angular.module('ngWaste',['ngMessages','ngRoute','ui.bootstrap','ng-fusioncharts']);

myApp.config(['$locationProvider', '$routeProvider',function($location, $routeProvider) {
        $routeProvider
// route for the home page
            .when('/trainer/:type', {
                templateUrl : 'Courses.html',
                controller  : 'menuController1'
            })

            .otherwise ({
                redirectTo: '/about'
            });
    }]);


///////////////////////////////////////////////////////////////////////////////////////////


	angular.module('myApp')
				.controller('menuController1', function($scope,$routeParams){
						var cat = $routeParams.type;
						console.log(cat);

				});






			angular.module('myApp')
				.controller('menuController', function($scope){
					$scope.category;
					$scope.menuItems = [
					{ display: 'Home', href: 'index.html', children: []},
					{ display: 'About Us', href: 'about.html', children: []},
					{ display: 'Courses', href: '#', children: [
						{ display: 'Fitness', href: '#', children: [
															{ display: 'Zumba', href: '#trainer/zumba', children: []},
															{ display: 'Exercise', href: '#', children: []},
															{ display: 'Aerobics', href: '#', children: []}
						]},
						{ display: 'Dance', href: '#', children: []},

						{ display: 'Music', href: '#', children: []},

						{ display: 'Cooking', href: '#', children: [
															{ display: 'Cooking', href: '#', children: []},
															{ display: 'Baking', href: '#', children: []},
						]},

						{ display: 'Painting', href: '#', children: []},

						{ display: 'Art & Craft', href: '#', children: []},

						{ display: 'Yoga', href: '#', children: []},

						{ display: 'Photography', href: '#', children: []},

						{ display: 'Foreign Language', href: '#', children: []}


						]},
					{ display: 'Workshops', href: '#', children: []},
					{ display: 'Gallery', href: '#', children: []},
					{ display: 'Contact', href: 'contact.html', children: []}
					];
				});
		})();