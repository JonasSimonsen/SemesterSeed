var express = require('express');
var router = express.Router();
var User = require('../app/model/user.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../config/database.js');
var passport	= require('passport');

mongoose.connect(config.database);
require('../config/passport')(passport);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res) {
  if (!req.body.name || !req.body.password) {
    res.json({success: false, msg: 'Please pass name and password.'});
  } else {
    var newUser = new User({
      userName: req.body.name,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.' + err});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

module.exports = router;