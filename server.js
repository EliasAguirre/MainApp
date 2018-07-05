//act as server, store API calls, dependency injection etc.


//time to declere dependencies!
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



//make our application an instance of express
var app = express();
var authenticationController = require('./Server/controllers/authentication-controller')

//based on mongod file, port number given there by default, at this point we need to create our datasets
//aim to have both users in both data sets to have an array of users, no new table like in mySQL
//that connects this guy with another guy
//this after installing mongod and mongo pain in the ass but works watch indian guy vide on how to install in macos
//usnig appopriate paths link: https://www.youtube.com/watch?v=DX15WbKidXY
//path being : /Users/eliasaguirre/Desktop/ubcin/MainApp/mongod and have both servers running
////> show dbs
//admin  0.000GB
//local  0.000GB
//> use MainApp
//switched to db MainApp
//mongo in a window and mongod in anotherone
mongoose.connect('mongodb://localhost:27017/MainApp');

//add this once wee have authenticationcontroller ready
app.use(bodyParser.json());

//Comment: extra add
//This is the file we need to send anytime a server is looking to find a file named app
//this solved the error on the console on the server, after Comment 10 on the app.js file
//__dirname is directory name
//aletrnative erased: /Users/eliasaguirre/Desktop/ubcin/MainApp/App
app.use('/app', express.static(__dirname + "/App"));


// Comment: fix source angular 2
//used to fix the source of angularjs

app.use('/node_modules', express.static(__dirname + "/node_modules"));

//node sends files to us, build all get manually
//req is for request, res for response
//linking html file ///Users/eliasaguirre/Desktop/MainApp/index.html
app.get('/', function(req, res){
  res.sendfile('index.html');
});

//authentication, path created in signup-controller
app.post('/api/user/signup', authenticationController.signup);

//make sure app is running, server is up, and give it local host, function is just callback function
app.listen('3000', function(){
  console.log("Server is Up! Local Host 3000");
});
