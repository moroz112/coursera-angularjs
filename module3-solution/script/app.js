(function() {
    angular.module('NarrowItDownApp', [])
        .directive('foundItems', foundItemsDirective)
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var that = this;

        this.searchTerm = '';
        this.displayError = false;

        this.getMatchedMenuItems = function(searchTerm) {
            MenuSearchService.getMatchedMenuItems(searchTerm).then(function(data) {
                that.found = data;
                if (data.length == 0 || searchTerm == '') {
                    that.displayError = true;
                } else {
                    that.displayError = false
                }
            });
        };
        this.removeItem = function(index) {
            this.found.splice(index, 1);
        }
    }
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {

        this.getMatchedMenuItems = function(searchTerm) {
            var that = this;

            return $http({
                method: "GET",
                url: ApiBasePath + '/menu_items.json'
            }).then(function(response) {

                var foundItems = [];
                for(var i = 0; i < response.data.menu_items.length; i++) {
                    if(response.data.menu_items[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                        foundItems.push(response.data.menu_items[i])
                    }
                }
                return foundItems;
            })

        }
    }
    function foundItemsDirective() {
        var ddo = {
            templateUrl: "loader/itemsloaderindicator.template.html",
            scope: {
                found: '<',
                onRemove: '&',
                displayError: '='
            },
            controller: foundItemDirectiveController,
            controllerAs: 'items',
            bindToController: true
        };
        return ddo;
    }
    function foundItemDirectiveController() {

    }
})();