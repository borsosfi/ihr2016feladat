ihr.directive("matchRow", ["$http", "playerService", function($http, playerService){
    return {
        restrict: 'AE',
        templateUrl: "templates/directives/matchRow.html",
        scope: {
            serverError: "="
        },
        controller: ['$scope', "$http", function($scope, $http){
            this.players = [];
          
            $scope.getPlayerList = function() {
              this.players = playerService.getPlayerList();
            };
            
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