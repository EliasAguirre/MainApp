//require fs-extra(moveimages btw files), multi-party(connect the whole piece)
//and path(path creation)

//injections
var User = require('../datasets/users.js');
var fs = require('fs-extra');
var path = require('path');

module.exports.updatePhoto = function(req, res){
    var file = req.files.file;
    var userId = req.body.userId;

    console.log("User " + userId + " is submitting", file);

}
