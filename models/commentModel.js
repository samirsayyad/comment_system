'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new Schema({
    text: {
      type: String,
      required: 'Kindly enter the text of the comment'
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: 'Kindly enter the id of the user'
      },
    created_at: {
      type: Date,
      default: Date.now
    },
    ref_id: {
      type:  Schema.Types.ObjectId,
      default : null ,
      required : false 
    }
      
    
  });
  

  var commentModel = mongoose.model('Comments', CommentSchema);

  CommentSchema.path('ref_id').validate(
    
    
    {
      validator: (value) => new Promise((resolve , reject)=>{
        
        if (value !== null){
          return commentModel.countDocuments({ ref_id: value }, (err, count) => {
              if(count >= process.env.COMMENT_LEVEL){
                resolve(false)
              }else {
                resolve(true);
              }
            })
        }else {
          resolve(true);
        }
      }),
      message: 'Comments level limit has been reached.'
    }
    
    
  );
  module.exports = commentModel; 
    
  
