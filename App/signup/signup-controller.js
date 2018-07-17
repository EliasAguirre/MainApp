//time to create the SignUpController
//create this first then go to signup page html
// (function(){
//   angular.module('MainApp')
//   //pass name of controller
//   //located in app.js declared as an object and page that
//   //signs us up
//   //add blank array to pass in dependencies
//   //for minification purposes pass blank array and function
// .controller('SignUpController', ['$scope', '$state', function($scope, $state){
//
//   //after this go to sign up page
//   }]);
//
// }());
//include empty array on main app because Calling angular.module without the array of dependencies when
//the module has not yet been defined causes this error to be thrown. To fix it, define your module with
//a name and an empty array, as in the first example above.
//MainApp, []

(function(){
    angular.module('MainApp')
.controller('SignupController', ['$scope', '$state', '$http', function($scope , $state, $http){
  //create user state and function within controller!
  //css linked, bootstrap working, aligned through css
  //$scope.createUser = function() call to create state of used being created
  //also added http
  //in the signup.html we created objects of newUser and newPassowrd
  //so we dont have to create (line texted) data object!!!
  //newUser is the line texted variable
  //this is thanks to ngmodel, angular finds it for us
        $scope.createUser = function(){
            //test
            console.log($scope.newUser);
            //$http.post('api/user/signup', $scope.newUser).success(function(response)
            $http.post('api/user/signup', $scope.newUser).then(function successCallback(response){


            }, function errorCallback(response){
                console.log(error);
              //now we gotta send these email and Password
              //to an endpoint, goto server
            })
      }
  }]);
}());
