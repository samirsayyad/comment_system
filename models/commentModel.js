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
      type: [{
        type: Schema.Types.ObjectId,
        default : null ,
      }],
      
    }
  });
  
  module.exports = mongoose.model('Comments', CommentSchema);