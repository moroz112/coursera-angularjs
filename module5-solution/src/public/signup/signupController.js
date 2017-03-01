(function() {
    'use strict';

    angular.module('public').controller('SignupController', SignupController);
    SignupController.$inject = ['MenuService', '$scope'];
    
    function SignupController(MenuService, $scope) {
        var that = this;
        var listenerBad;
        var listenerGood;

        this.formSubmitted = false;
        this.errorFormSubmit = false;

        this.$onInit = function() {
            listenerBad = $scope.$on('wrong:response', onWrongResponse);
        };
        this.$onDestroy = function() {
            listenerBad();
        };

        function onWrongResponse(ev, data) {
            that.errorFormSubmit = data.on;
            that.formSubmitted = !data.on
        };
        this.submit = function() {
            console.log('submit');
            MenuService.userPreferences = this.userPreferences;
            MenuService.checkRequest();
        }
    }
})();