(function() {
    'use strict';

    angular.module('public').controller('InfoController', InfoController);

    InfoController.$inject = ['userPreferences'];

    function InfoController(userPreferences) {
        this.userPreferences = userPreferences;
        this.isSignUp = !this.userPreferences.category;
    }
})();