(function() {
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        this.toBuyItems = ShoppingListCheckOffService.toBuyItems;

        this.boughtItem = function(index, name, quantity) {
            ShoppingListCheckOffService.boughtItem(index, name, quantity)
        }
    }
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.boughtItems = ShoppingListCheckOffService.boughtItems;
    }
    function ShoppingListCheckOffService() {
        this.toBuyItems = [
            {name: 'cookies', quantity: 10},
            {name: 'cakes', quantity: 5},
            {name: 'candies', quantity: 11}
        ];
        this.boughtItems = [];

        this.boughtItem = function(index, name, quantity) {
            this.toBuyItems.splice(index, 1);
            this.boughtItems.push({name: name, quantity: quantity});
        }
    }
})();