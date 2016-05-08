(function(){
  'use strict';
  
  var _ = require("lodash");
  // var FeatureRequest = require('../models/featureRequest');
  // var Match = require('../models/match');
  var Pyramid = require('../models/pyramid');
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

  module.exports.getPyramid = function(req, res) {
    Pyramid.findOne({}, {}, {sort: {'created': -1}}, function(err, pyramid) {
      if (err) {
        sendJson(res, 400, {error: err, message: 'Error fetching pyramid'});
      } else {
        sendJson(res, 201, pyramid);
      }
    });
  }
  
  module.exports.getPyramidById = function(req, res) {
    var id = req.body.id;
    
    Pyramid.find({_id: id}, function(err, pyramid) {
      if (err) {
        sendJson(res, 400, {error: err, message: 'Error fetching pyramid'});
      } else {
        sendJson(res, 201, pyramid);
      }
    });
  }

  module.exports.getPyramids = function(req, res) {
    Pyramid.find({}, function(err, pyramids) {
      if (err) {
        sendJson(res, 400, {error: err, message: 'Error fetching pyramids'});
      } else {
        sendJson(res, 201, pyramids, 'pyramids');
      }
    });
  }
  
  module.exports.savePyramid = function(req, res) {
    var newPyramid = {};
    newPyramid.pyramid = req.params.pyramid;
    
    var pyramid = new Pyramid(newPyramid);
    
    pyramid.save(function(err, pyramid) {
      if (err) {
        sendJson(res, 400, {error: err, message: 'Error saving pyramid'});
      } else {
        sendJson(res, 201, pyramid);
      }
    });
  }

})();

