var ihr = angular.module("mainModule", ["ngRoute"]);



ihr.config(['$routeProvider', "$httpProvider", function($routeProvider, $httpProvider){
    
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.common.Token = "RANDOMTOKEN";
    
    $routeProvider.when('/player', {
        controller: 'playerController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/players.html'
    }).otherwise({
        controller: 'playerController',
        controllerAs: 'ctrl',
        templateUrl: 'templates/players.html'
    });
}]);

ihr.constant("Config", {
    apiServer : "http://192.168.0.15:3000" 
})