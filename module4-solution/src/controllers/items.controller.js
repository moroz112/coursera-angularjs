(function() {
    angular.module('data').controller('itemsController', itemsController);

    function itemsController(items) {
        this.items = items;
    }
})();