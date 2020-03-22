
var mongoose = require('mongoose'),
Comments = mongoose.model('Comments');

exports.list_all_comments = (req, res) => {
    Comments.find({}, (err, task) => {
    if (err)
        res.send(err);
    res.json(task);
    });
};


exports.create_a_comment = (req, res) => {
    var new_comment = new Comments(req.body);
    new_comment.save((err, task) => {
      if (err)
        res.send(err);
      res.json(task);
    });
  };