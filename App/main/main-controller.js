//needs a state, states done in app.js state provider
(function(){
  angular.module('MainApp')
  .controller('MainController', ['$scope', '$http', '$interval', function($scope, $http, $interval){

    if(localStorage['User-Data'] !== undefined){
      $scope.user = JSON.parse(localStorage['User-Data']);
      console.log($scope.user);
    }

    $scope.sendCollab = function(event){
      if (event.which === 13){
        var request = {
            user: $scope.user.data.username || $scope.user.data.email,
            userId: $scope.user.data._id,
            userImage: $scope.user.data.image,
            content: $scope.newCollab
        }
        $http.post('api/collab/post', request).then(function successCallback(response){
          console.log(response);
          $scope.collabs = response;
          console.log(request);
        }, function errorCallback(error){
          console.error(error);
        })
      }
    };
  }]);
}());
