(function() {
'use strict';

    angular
        .module('app.service')
        .factory('pyramid', pyramidService);

    pyramidService.$inject = ['$http', 'logger'];
    function pyramidService($http, logger) {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() {
            
         }
    }
})();