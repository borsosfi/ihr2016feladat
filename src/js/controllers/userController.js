var userController = function($http){
    var self = this;
    
    this.user = {
        name: {
            first:"Vér",
            last:"Pisti"
        },
        job:"RageQuiter",
        age:"151"
    };
    
    this.regUser = function(event){
        event.preventDefault();
        console.log(self.user);
    };
};
userController.$inject = ['$http'];
ihr.controller("userController", userController);