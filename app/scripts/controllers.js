'use strict';

/* Controllers */

angular.module('angularRestfulAuth')
    .controller('HomeCtrl', ['$rootScope', '$scope', '$location', '$localStorage', 'Main', function($rootScope, $scope, $location, $localStorage, Main) {

        //Get  trending Videos
        $scope.trending = function() {
            console.log($scope.countryCode)
            console.log($scope.videoCategory)
            $scope.youtubeAPI = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode='+$scope.countryCode+'&&videoCategoryId='+$scope.videoCategory+'&&type=video&maxResults=10&key=AIzaSyAvUS4J75tEZxQZxDbTW1ueRvoQ84sSEHc';

            Main.trending($scope.youtubeAPI, function(res) {                    
                    $scope.videos = res.items;
                    $scope.count = res.items.length;                                      
                    $location.path('/')                                
            }, function() {
                $rootScope.error = 'Failed to Get Videos';
            })
        };
    }])

.controller('MeCtrl', ['$rootScope', '$scope', '$location', 'Main', function($rootScope, $scope, $location, Main) {

        Main.me(function(res) {
            $scope.myDetails = res;
        }, function() {
            $rootScope.error = 'Failed to fetch details';
        })
}]);
