ihr.controller("bodyController", ['$scope', function($scope, $timeout){
    
    $scope.checkPage = function(name){
        return location.hash === '#/'+name;
    }

}]);