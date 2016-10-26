(function(){
    "use strict";

    angular.module("LunchCheck", [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.meals = "";
        $scope.notificationMessage = "";
        $scope.checkMealsQuantity = function (meals) {
            var mealsQuantity = 0;

            if(meals) {
                mealsQuantity = meals.split(',').length;
            }

            switch (mealsQuantity) {
                case 1:
                case 2:
                case 3:
                    $scope.notificationMessage = "Enjoy";
                    break;
                case 0:
                    $scope.notificationMessage = "Please enter data first";
                    break;
                default:
                    $scope.notificationMessage = "Too much";
            }
        }
    }
})();