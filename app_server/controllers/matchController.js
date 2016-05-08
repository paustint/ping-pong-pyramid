(function(){
  'use strict';
  
  var _ = require("lodash");
  // var FeatureRequest = require('../models/featureRequest');
  var Match = require('../models/match');
  // var Player = require('../models/player');
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

  module.exports.getMatches = function(req, res) {
    Match.find({}, function(err, matches) {
      if (err) {
        sendJson(res, 400, {error: err, message: 'Error fetching matches'});
      } else {
        sendJson(res, 201, matches, 'matches');
      }
    });   
  }
  
  module.exports.getMatchById = function(req, res) {
    var id = req.params.id;
    Match.find({_id: id}, function(err, match) {
      if (err) {
        sendJson(res, 400, {error: err, message: 'Error fetching match'});
      } else {
        sendJson(res, 201, match);
      }
    });
  }

  module.exports.saveMatch = function(req, res) {
    var newMatch = {};
    newMatch.winner = req.params.name;
    newMatch.loser = req.params.email;
    newMatch.winnerScore = req.params.screenName;
    newMatch.loserScore = req.params.password;
    newMatch.winnerNewLocation = req.params.winnerNewLocation;
    newMatch.winnerPriorLocation = req.params.winnerPriorLocation;
    newMatch.loserPriorLocation = req.params.loserPriorLocation;
    newMatch.loserNewLocation = req.params.loserNewLocation;
    
    var match = new Match(newMatch);
    
    match.save(function(err, match) {
      if (err) {
        sendJson(res, 400, {error: err, message: 'Error saving match'});
      } else {
        sendJson(res, 201, match);
      }
    });
  }

})();
