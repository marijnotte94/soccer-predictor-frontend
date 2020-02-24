angular.module('matchModule', ['ngRoute','requestsModule'])
    .controller('matchController', function (httpRequestsService) {
        var vm = this;
        vm.updateData = function(){
            var date = vm.dateselector;
            var day = date.getDate();
            var month = date.getMonth()+1;
            var year = date.getFullYear();
            httpRequestsService.getMatches(year, month, day)
                .then(function (response) {
                    vm.matches = response.data;
                });

        };

        var now = new Date();
        var loadComp1Time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 0, 0, 0) - now;
        if (loadComp1Time < 0) {
            loadComp1Time += 86400000;
        }
        var loadComp2Time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 10, 0, 0) - now;
        if (loadComp2Time < 0) {
            loadComp2Time += 86400000;
        }
        var loadOddTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 15, 0, 0) - now;
        if (loadOddTime < 0) {
            loadOddTime += 86400000;
        }
        setTimeout(function(){httpRequestsService.loadComp1()}, loadComp1Time);
        setTimeout(function(){httpRequestsService.loadComp2()}, loadComp2Time);
        setTimeout(function(){httpRequestsService.loadOdds()}, loadOddTime);
    })

    .filter('byHomeStake', function() {
        return function(matches){
            if(matches){
                return matches.filter(function(match){
                    return match.homeStake > 0;
                })
            }
        }
    })

    .filter('byAwayStake', function() {
        return function(matches){
            if(matches){
                return matches.filter(function(match){
                    return match.awayStake > 0;
                })
            }
        }
    });


