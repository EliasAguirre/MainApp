//created for navigating purposes after sign up

(function(){
    angular.module('MainApp')
    .controller('NavigationController', ['$scope', '$http', '$state', function($scope, $http, $state){
        //check if user is logged in
        if(localStorage['User-Data']){
          $scope.loggedIn = true;
        } else{
          $scope.loggedIn = false;
        }

        $scope.logUserIn = function(){
            $http.post('/api/user/login', $scope.login).then(function successCallback(response){
                //create a local storage for efficiency purposes
                //
                localStorage.setItem('User-Data', JSON.stringify(response));
                $scope.loggedIn = true;

            }, function errorCallback(response){
              console.log(error);
            })
        }
    }]);

}());
//back to server for under authentication
