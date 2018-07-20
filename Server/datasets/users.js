//created file for users using mongod and mongo afters its running
//its a javascript files

//we need to inject it as a dependency
var mongoose = require('mongoose');

//exporting as a module
//first parameter is users
//2nd pass object traits
//add data cause first is creating profile then is image upload
module.exports = mongoose.model('User', {
  email: String,
  //not secure at all, not deploy this but for practical purposes
  //create for the bantz
  password: String,
  image: String
});

//at this points we have node set up, databae set up  , lets set up angular front end now
//goto html file and set bootstrap to angular
//go link up angular.js
//just use source for export with link from angular.org https://ajax.googleapis.com/ajax/libs/angularjs/1.6.10/angular.min.js
//look at comment: angular set up
