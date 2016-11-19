ihr.service('playerService', ['playerFactory', function(playerFactory){
    var service = this;
    //service.data = {};
    //service.data.playerList = [];
    service.players = [];
    
    service.getPlayerList = function(){
        playerFactory.getPlayerList()
            .then(function(playerList){
            // TODO : add cache validation logic
            service.players = playerList;
            //service.cache.playerList = playerList;
            console.log(playerList);
        },
        function(err){
            console.log("Error reading cache");
            service.lastError = err;   
        });
    };
    
    service.getPlayerList();
    
    service.updatePlayer = function(player){
        return playerFactory.updatePlayer(player);           
    }
    
}])