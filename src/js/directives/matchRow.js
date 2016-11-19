ihr.directive("matchRow", ["$http", "Config", "matchFactory", function($http, Config, matchFactory){
    return {
        restrict: 'AE',
        templateUrl: "templates/directives/matchRow.html",
        scope: {
            matches: "=",
            serverError: "="
        },
        controller: ['$scope', "$http", "Config", function($scope, $http, Config){
            
            var dataUrl = Config.apiServer + "/matches";
            
            $scope.updateRow = function(row){
                matchFactory.updateMatch(row).then(function(response){
                            console.log(response);
                            $scope.serverError = false;
                        }, function(err){
                            $scope.serverError = err;
                            console.error(err);
                        }
                );
               
            };
            
            $scope.deleteRow = function(match){
                if (!confirm("Are you sure you want to delete the " + match.home + "-" + match.away + " match?")){
                    return;
                }
                
                var index = $scope.matches.indexOf(match);
                $scope.matches.splice(index, 1);
            };
        }]
    };
}]);  