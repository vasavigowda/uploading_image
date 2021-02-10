
const mongoose = require('mongoose');
const UserData =require('../Model/model');
// const jwt = require('jsonwebtoken');

exports.get_a_data = function(req, res) {
  UserData.find({}, function(err, data) {
  if (err)
  res.send(err);
  res.json(data);
  });
  };
  
  exports.post_a_data = function(req, res) {
      var User = new UserData(req.body);
      User.save({},function(err, data) {
          if (err)
              res.send(err);
              res.json(data);
      });
      };
  
  exports.update_a_task=(req, res)=>{
      UserData.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, data) => {
          if (error) { res.json(error) }
          res.json(data)
      })
    }
    
  exports.delete_a_task = function(req, res) {
  UserData.deleteOne({_id: req.params.id}, function(err, data) {
  if (err)
  res.send(err);
  res.json({ message: 'Task successfully deleted' });
  });
  };
  
  