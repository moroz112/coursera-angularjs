(function() {
    'use strict';

    angular.module('public').controller('InfoController', InfoController);

    InfoController.$inject = ['MenuService','userPreferences'];

    function InfoController(MenuService, userPreferences) {
        this.userPreferences = userPreferences;
        this.firstName = MenuService.firstName;
        this.lastName = MenuService.lastName;
        this.email = MenuService.email;
        this.phone = MenuService.phone;
        this.isSignUp = !userPreferences;
    }
})();