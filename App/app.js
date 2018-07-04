//Indusrty standar name, this right after importing angular in HTMl file index.html through source

//wrap in anonymous function because of common practice to minimize javaScript files
//to stop different ports from running into each other
(function() {
  //here we name application
  //application and then list of dependencies to passed in, to avoid passing multiple
  //things on our node side.. i.e UI router as a declaration of a dependency in string form
  angular.module('MainApp', ['ui.router'])
  //add state provider since its a single page application, to tell it where it is rn
      .config(function($stateProvider){

        $stateProvider
          .state('signUp', {
            url: "/signup",
            templateUrl: "App/signup/signup.html",
            controller: "SignupController"

          })

      })

}());

//Comment:  App module Route - connected to index.html under Comment: Final Solution d
//angular.module('app', ['ngRoute']);

//here go back to index and give it a source for Angular
//look at Comment A

//Comment 10
//after giving it source thre is an error in the console in the server because we need angular to
//say "hey these guys are gonna be using these files "
//need to go get that file from the server app
//look at comment: extra add
