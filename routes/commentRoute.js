module.exports = function(app) {
    var commentController = require('../controllers/commentController');
  
    app.route('/comments')
      .get(commentController.list_all_comments)
      .post(commentController.create_a_comment);
  
  };