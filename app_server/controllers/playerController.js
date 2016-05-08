(function(){
  'use strict';
  
  var _ = require("lodash");
  // var FeatureRequest = require('../models/featureRequest');
  // var Match = require('../models/match');
  var Player = require('../models/player');
  // var PlayerMatch = require('../models/playerMatch');

  /**
   * 200 - OK success GET
   * 201 - created success POST
   * 203 - created success PUT
   * 204 - no content success DELETE
   * 400 bad request
   * 401 unathorized
   * 403 forbidden
   * 404 not found
   * 405 method not allowed
   */
  /** Helper function to send JSON server response */
  function sendJson(res, status, content, keyName) {
    content = content || {};
    if (keyName) {
      var temp = {};

      temp[keyName] = content;
      content = temp;
    }
        res.status(status);
        res.json(content);
  }


  /** Controllers */
  //////////////////////////////////////////// PLAYER ////////////////////////////////////////////
  
  module.exports.getPlayers = function(req, res) {
    
    Player.find({}, function(err, players) {
      if (err) {
        sendJson(res, 400, {error: err, message: 'Error fetching players'});
      } else {
        sendJson(res, 201, players, 'players');
      }
    });
    
  }
  
  module.exports.getPlayerById = function(req, res) {
    var id = req.params.id;
    Player.find({_id: id}, function(err, player) {
      if (err) {
        sendJson(res, 400, {error: err, message: 'Error fetching player'});
      } else {
        sendJson(res, 201, player);
      }
    });
  }

  module.exports.savePlayer = function(req, res) {
    var newPlayer = {};
    newPlayer.name = req.params.name;
    newPlayer.email = req.params.email;
    newPlayer.screenName = req.params.screenName;
    newPlayer.password = req.params.password;
    
    var player = new Player(newPlayer);
    
    player.save(function(err, player) {
      if (err) {
        sendJson(res, 400, {error: err, message: 'Error saving player'});
      } else {
        sendJson(res, 201, player);
      }
    });
    
  }


})();

