'use strict';

var passport = require('passport'),
  FacebookTokenStrategy = require('passport-facebook-token'),
  User = require('mongoose').model('User'),
  config = require('facebouk.config.js');

module.exports = function () {

  passport.use(new FacebookTokenStrategy({
      clientID: config.appId,
      clientSecret: config.appSecret
    },
    function (accessToken, refreshToken, profile, done) {
      User.upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
        return done(err, user);
      });
    }));

};