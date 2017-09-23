'use strict';

angular.module('angularRestfulAuth')
    .factory('Main', ['$http', '$localStorage', function($http, $localStorage){
        return {
            //Get Trending Videos
            trending: function(data, success, error) {
                $http.get(data).success(success).error(error)
            }            
        };
    }
]);