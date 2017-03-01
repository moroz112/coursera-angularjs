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
            listenerGood =$scope.$on('good:response', onGoodResponse);
        };
        this.$onDestroy = function() {
            listenerBad();
        };

        function onWrongResponse() {
            that.errorFormSubmit = true;
        };
        function onGoodResponse() {
            that.formSubmitted = true;
        }
        this.submit = function() {
            console.log('submit');
            MenuService.userPreferences = this.userPreferences;
            MenuService.getUserPreferences();
        }
    }
})();