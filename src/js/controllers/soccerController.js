var soccerController = function($scope, $http, Config, matchService){
    var self = this;
    this.matches = [];
    this.serverError = false;
    
    $scope.$watch(function(){
        return matchService.cache.matches;
    }, function(newValue, oldValue){
        console.log(newValue);
        if (newValue){
            self.matches = newValue;
        }
    })
    
    matchService.get();
    
    /*matchFactory.getMatches().then(function(matches){
                self.matches = matches;
                console.log(matches);
                self.serverError = false;
            }, function(err){
                self.serverError = err;
                console.error(err);
            }
    );*/
    
};
soccerController.$inject = ['$scope', '$http', 'Config', "matchService"];

ihr.controller("soccerController", soccerController);