ihr.directive("playerTable", ["$http", "playerService", function($http, playerService){
    return {
        restrict: 'AE',
        templateUrl: "templates/directives/playerRow.html",
        scope: {
        },
        controller: ['$scope', "$http", function($scope, $http){          
            
            
            //$scope.currentPage = 0;
            //$scope.pageSize = 10;
            //$scope.data = playerService.players;
            
            //$scope.numberOfPages=function(){
            //    return Math.ceil($scope.data.length/$scope.pageSize);                
            //}
             //= $scope.data;
            
            $scope.players = [];
            
            $scope.$watch(function(){
                return playerService.players;
            }, 
            function(newValue){
                $scope.players = newValue;
            });
            
            $scope.updatePlayer = function(player) {
                playerService.updatePlayer(player).then(function(response){
                        console.log(response);
                        $scope.serverError = false;
                    }, function(err){
                        $scope.serverError = err;
                        console.error(err);
                    }
                );
            };
        }]
    };
}]);