//created for navigating purposes after sign up

(function(){
    angular.module('MainApp')
    .controller('NavigationController', ['$scope', '$http', '$state', function($scope, $http, $state){
        $scope.logUserIn = function(){
            $http.post('/api/user/login', $scope.login).then(function successCallback(response){
                //create a local storage for efficiency purposes
                //
                localStorage.setItem('User-Data', JSON.stringify(response));
            }, function errorCallback(response){
              console.log(error);
            })
        }
    }]);
}());
//back to server for under authentication
