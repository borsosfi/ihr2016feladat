var playerController = function($scope, $http, playerService){
    var self = this;
    this.players = [];
    this.serverError = false;
    
    playerService.get();
};
playerController.$inject = ['$scope', '$http', "playerService"];

ihr.controller("playerController", playerController);