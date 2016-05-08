(function() {
'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];
    function dataservice($http) {
        var service = {
            getPlayers:getPlayers,
            savePlayer:savePlayer,
            getPyramid:getPyramid,
            savePyramid:savePyramid,
            getMatches:getMatches,
            getMatch:getMatch,
            saveMatch:saveMatch,
        };
        
        return service;

        ////////////////
        function getPlayers() { 
            
        }
                
        function savePlayer(player) {
            
        }
        // ID is optional to return a specific pyramid
        // instead of returning the most recent pyramid
        function getPyramid(id) {
            
        }
        
        function savePyramid(pyramid) {
            
        }
        
        function getMatches() {
            
        }
        
        function getMatch(id) {
            
        }
        
        function saveMatch() {
            
        }
    }
})();