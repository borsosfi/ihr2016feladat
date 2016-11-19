var playerController = function($scope, $http, playerService){
    var self = this;
    this.players = [];
    this.serverError = false;

};
playerController.$inject = ['$scope', '$http', "playerService"];

ihr.controller("playerController", playerController);