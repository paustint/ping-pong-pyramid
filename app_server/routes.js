(function () {
  'use strict';

  var express = require('express');
  var router = express.Router();
  var playerController = require('./controllers/playerController');
  var pyramidController = require('./controllers/pyramidController');
  var matchController = require('./controllers/matchController');

//////////////// NEED TO ADD ABILITY TO DELETE RECORDS... ADMIN ONLY /////////////////////////////

  /** Routes */
  router.get('/player', playerController.getPlayers);
  router.get('/player/:id', playerController.getPlayerById);
  router.post('/player', playerController.savePlayer);
  
  router.get('/pyramid', pyramidController.getPyramid);
  router.get('/pyramid', pyramidController.getPyramidById);
  router.get('pyramid/all', pyramidController.getPyramids);
  router.post('pyramid', pyramidController.savePyramid);
  
  router.get('/match', matchController.getMatches);
  router.get('/match/:id', matchController.getMatchById);
  router.post('/match', matchController.saveMatch);
  
  // router.get('/player', syncDataController.getPlayers);
  // router.get('/player/:externalId', syncDataController.getPlayer);
  // router.post('/player', syncDataController.postPlayer);

  // router.get('/playerMatch', syncDataController.getPlayerMatches);
  // router.get('/playerMatch/:externalId', syncDataController.getPlayerMatch);
  // router.post('/playerMatch', syncDataController.postPlayerMatch);

  // router.get('/match', syncDataController.getMatches);
  // router.get('/match/:externalId', syncDataController.getMatch);
  // router.post('/match', syncDataController.postMatch);

  // router.get('/featureRequest', syncDataController.getFeatureRequests);
  // router.get('/featureRequest/:externalId', syncDataController.getFeatureRequest);
  // router.post('/featureRequest', syncDataController.postFeatureRequest);

  // router.get('/all', syncDataController.getAll);
  // router.post('/all', syncDataController.postAll);

  module.exports = router;

})();
