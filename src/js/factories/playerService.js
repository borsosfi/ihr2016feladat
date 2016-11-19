ihr.service('playerService', ['playerFactory', function(matchFactory){
    var service = this;
    service.cache = {};
    
    service.getPlayerList = function(){
        playerFactory.getPlayerList()
            .then(function(playerList){
            // TODO : add cache validation logic
            service.cache.playerList = playerList;
        },
        function(err){
            console.log("Error reading cache");
            service.lastError = err;   
        });
    };
    
    service.updatePlayer = function(player){
        return playerFactory.updatePlayer(player);           
    }
    
}])