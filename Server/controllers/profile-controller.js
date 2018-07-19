//require fs-extra(moveimages btw files), multi-party(connect the whole piece)
//and path(path creation)

//injections
//once this is done, create uploads folder to store these objects
var User = require('../datasets/users.js');
var fs = require('fs-extra');
var path = require('path');

module.exports.updatePhoto = function(req, res){
    var file = req.files.file;
    var userId = req.body.userId;

    console.log("User " + userId + " is submitting", file);

    //temp path of image uploaded, retrieved in terminal
    //starting point for uploads folder
    var tempPath = file.path;
    //create unique date to identify unique path to uploads
    var uploadDate = new Date().toISOString;

    //clean up Date
    // uploadDate = uploadDate.replace("." , "");
    // uploadDate = uploadDate.replace("-" , "");
    // uploadDate = uploadDate.replace(":" , "");

    var targetPath = path.join(__dirname, "../../uploads/" + userId + uploadDate + file.name);

    fs.rename(tempPath, targetPath, function(err){
      if(err){
        console.log(err);
      } else{
        console.log("file moved");
      }
    })
}
