angular.module('requestsModule', [])
    .factory('httpRequestsService', function($http) {
        return {
            getMatches: function () {
                return $http({
                    method: "GET",
                    url: "https://mathbettingtips.herokuapp.com/matches/today"
                })
            },
            loadComp1: function() {
                return $http({
                    method: "GET",
                    url: "https://mathbettingtips.herokuapp.com/loadcomp1"
                })
            },
            loadComp2: function() {
                return $http({
                    method: "GET",
                    url: "https://mathbettingtips.herokuapp.com/loadcomp2"
                })
            },
            loadOdds: function() {
                return $http({
                    method: "GET",
                    url: "https://mathbettingtips.herokuapp.com/loadodds"
                })
            }
        }
    });
