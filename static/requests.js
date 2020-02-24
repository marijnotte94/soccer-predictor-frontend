angular.module('requestsModule', [])
    .factory('httpRequestsService', function($http) {
        return {
            getMatches: function (year, month, day) {
                return $http({
                    method: "GET",
                    url:  "https://mathbettingtips.herokuapp.com/matches?year="+year+"&month="+month+"&day="+day
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
