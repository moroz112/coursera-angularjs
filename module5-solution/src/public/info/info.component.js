(function () {
    'use strict';

    angular.module('public').component('info', {
        templateUrl: 'src/public/info/info-component.html',
        bindings: {
            preferences: '<'
        },
        controller: InfoComponentController
    });

    InfoComponentController.$inject = ['ApiPath'];

    function InfoComponentController(ApiPath) {
        this.basePath = ApiPath;
    }
})();