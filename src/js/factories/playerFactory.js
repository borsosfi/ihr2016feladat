ihr.factory("playerFactory", ["$q", "$http", "Config", function($q, $http, Config){
    return {
        url : Config.apiServer + "/players",
        // Get player
        
        getPlayerList: function(){
            var defered = $q.defer();
            
            $http.get(this.url).then(function(response){
                if (!response.length < 1){
                    defered.reject("Failed to list players");
                }
                
                defered.resolve(response.data);
                
            }, function(err){
                defered.reject("Error in request(getPlayerList): " + err.statusText);
            });
            
            return defered.promise;
        },
        updatePlayer: function(player){
            var defered = $q.defer();
            
            $http.post(this.url + "/" + player.id, player).then(function(response){
                if (!response.data.success){
                    defered.reject("Failed to update player");
                }
                
                defered.resolve();
                
            }, function(err){
                defered.reject("Error in request(updatePlayer): " + err.statusText);
            });
            
            return defered.promise;
        }
    };
}]);