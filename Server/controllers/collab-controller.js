var Collab = require('../datasets/collabs');
module.exports.postCollab = function(req,res){
  var collab = new Collab(req.body);
  collab.save();

  Collab.find({}, function(err, allCollabs){
    if(err){
      res.error(error);
    } else{
      res.json(allCollabs);
    }
  })
}
