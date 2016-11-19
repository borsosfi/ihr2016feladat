var ihr = angular.module("mainModule", ["ngRoute"]);



ihr.config(['$routeProvider', "$httpProvider", function($routeProvider, $httpProvider){
    
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.common.Token = "RANDOMTOKEN";
    
    $routeProvider.when('/soccer', {
        controller: 'soccerController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/soccer.html'
    }).when('/register', {
        controller: 'userController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/register.html'
    }).otherwise({
        controller: 'soccerController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/soccer.html'
    });
}]);

ihr.constant("Config", {
    apiServer : "http://192.168.0.15:3000"
})