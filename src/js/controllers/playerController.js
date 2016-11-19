var playerController = function($scope, $http, playerService){
    var self = this;
    this.players = [];
    this.serverError = false;
    
    /*$scope.$watch(function(){
        return matchService.cache.matches;
    }, function(newValue, oldValue){
        console.log(newValue);
        if (newValue){
            self.matches = newValue;
        }
    })*/
    
    playerService.get();
};
playerController.$inject = ['$scope', '$http', "playerService"];

ihr.controller("playerController", playerController);