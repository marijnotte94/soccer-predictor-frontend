angular.module('requestsModule', [])
    .factory('httpRequestsService', function($http) {
        return {
            getMatches: function (year, month, day) {
                return $http({
                    method: "GET",
                    url:  "https://mathbettingtips.herokuapp.com/matches?year="+year+"&month="+month+"&day="+day
                })
            },
            getProfitDay: function (year, month, day) {
                return $http({
                    method: "GET",
                    url:  "https://mathbettingtips.herokuapp.com/profit?year="+year+"&month="+month+"&day="+day
                })
            },
            /*
            getProfitMonth: function (year, month) {
                return $http({
                    method: "GET",
                    url:  "https://mathbettingtips.herokuapp.com/profit?year="+year+"&month="+month
                })
            },
            getProfitYear: function (year) {
                return $http({
                    method: "GET",
                    url:  "https://mathbettingtips.herokuapp.com/profit?year="+year
                })
            },
            getProfit: function () {
                return $http({
                    method: "GET",
                    url:  "https://mathbettingtips.herokuapp.com/profit"
                })
            },
            */
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
