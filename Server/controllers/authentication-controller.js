//create accounts and authentication system

var User = require('../datasets/users');

//module export
module.exports.signup = function(req, res){
    //check flag
    console.log(req.body);
//goto server and use body parser . json

  var user = new User(req.body);
  user.save();

  res.json(req.body);

  //once we are done with this, we can allow profiles and move on, again on app
}

module.exports.login = function(req, res){
    User.find(req.body, function(err, results){
        if (err){
          //usually have to send response back to client
          console.log("Error Out");
        }
        //only 1 result
        if(results && results.length === 1){
          //store user data, once localStorage is up
          var userData = results[0];

          //if info found store that info in local storage
          res.json({email: req.body.email,
                    _id: userData._id,
                    username: userData.username,
                    image: userData.image
          });
        }
    })
}
