//create accounts and authentication system

var User = require('../datasets/users');

//module export
module.exports.signup = function(req, res){
    //check flag
    console.log(req.body);
//goto server and use body parser . json

  var user = new User(req, res);
  user.save();

  res.json(req.body);
}
