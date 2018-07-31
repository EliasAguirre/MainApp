(function(){
  angular.module('MainApp', )
  .controller('EditProfileController', ['Upload', '$scope', '$state', '$http', function(Upload, $scope, $state, $http){
              //create user object here
              $scope.user = JSON.parse(localStorage['User-Data']) || undefined;

              $scope.$watch(function(){
                  return $scope.file
//call to backend setup, go to COMMENT: SERVER PROFILE ENDPOINT on server js
              }, function(){
                $scope.upload($scope.file);
              });



              //no upload if no file
                $scope.upload = function(file){
                  if(file){
                    Upload.upload({
                      url: 'api/profile/editPhoto',
                      method:'POST',
                      //unique id
                      data: {userId: $scope.user.data._id},
                      file: file,
                      uploadEventHandlers:{
                        progress: function(evt){
                          console.log('firing');
                        }
                      }
                    }).then(function successCallback(data){
                      console.log("success");
                    }, function errorCallback(error){
                  //    alert("Error Uploading!");
                      console.log(error);
                    })
                  }
               };

               $scope.updateUsername = function(){
                 var request = {
                   userId: $scope.user.data._id,
                   username: $scope.user.username

                 }
                 //ajax calls
                 //server.js
                 //made request object, now past to post (http)
                 $http.post('api/profile/updateUsername', request).then(function successCallback(){
                   console.log("success");
                 }, function errorCallback(error){
                   console.log("error");
                 });
               }

               $scope.updateBio = function(){
                 var request = {
                   userId: $scope.user.data._id,
                   bio: $scope.user.bio
                 }

                 $http.post('api/profile/updateBio', request).then(function successCallback(){
                    console.log("success");
                 }, function errorCallback(error){
                   console.log(error);
                 });
               }



  }]);
}());
