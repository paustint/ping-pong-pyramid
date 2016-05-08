(function(){
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var matchSchema = new Schema({
    id: { type: String },
    winner: { type: Schema.Types.ObjectId},
    loser: { type: Schema.Types.ObjectId },
    winnerScore: { type: Number },
    loserScore: { type: Number },
    winnerNewTier: { type: Number },
    winnerPriorTier: { type: Number },
    loserPriorTier: { type: Number },
    loserNewTier: { type: Number },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('Match', matchSchema);

})();
