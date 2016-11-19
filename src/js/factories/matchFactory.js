ihr.factory("matchFactory", ["$q", "$http", "Config", function($q, $http, Config){
    return {
        url : Config.apiServer + "/matches",
        getMatches: function(){
            var defered = $q.defer();
            
            $http.get(this.url).then(function(response){
                if (!response.length < 1){
                    defered.reject("Hopsz...");
                }
                
                defered.resolve(response.data);
                
            }, function(err){
                defered.reject("Error in request: " + err.statusText);
            });
            
            return defered.promise;
        },
        updateMatch: function(match){
            var defered = $q.defer();
            
            $http.post(this.url + "/" + match.id, match).then(function(response){
                if (!response.data.success){
                    defered.reject("Nem sikerült az insert...");
                }
                
                defered.resolve();
                
            }, function(err){
                defered.reject("Error in request: " + err.statusText);
            });
            
            return defered.promise;
        }
    };
}]);