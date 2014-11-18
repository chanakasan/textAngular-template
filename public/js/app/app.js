'use strict';

/*
 | Define modules
 */
angular.module('MyApp.controllers', []);


/*
 | MyApp
 */
angular.module('MyApp', [
    'ngRoute',
    'MyApp.controllers',
    'textAngular'
])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'tmpl_homepage.html',
                controller: 'HomeCtrl'
            })
            .when('/items', {
                templateUrl: 'tmpl_item_list.html',
                controller: 'IndexCtrl'
            })
            .when('/items/new', {
                templateUrl: 'tmpl_item_create.html',
                controller: 'NewCtrl'
            })
            .otherwise({
                templateUrl: 'tmpl_404.html'
            })
    })
;


/*
 | Controllers
 */

angular.module('MyApp.controllers')
    .controller('RootCtrl', function ($scope, $location) {
        $scope.helloMessage = 'Default Hello Message';

        $scope.saveChanges = function() {
            $location.path('/items');
        }
    })

    .controller('HomeCtrl', function ($scope) {
        $scope.helloMessage = 'Welcome! to Homepage';
    })

    .controller('IndexCtrl', function ($scope) {
        $scope.helloMessage = 'All items';
    })

    .controller('NewCtrl', function ($scope) {
        $scope.helloMessage = "Create new item";
    })
