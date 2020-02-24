angular.module('matchModule', ['ngRoute','requestsModule'])
    .controller('matchController', function (httpRequestsService) {
        var vm = this;
        httpRequestsService.getMatches()
            .then(function (response) {
                vm.matches = response.data;
            });

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




    });
