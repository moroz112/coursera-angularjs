(function() {
    angular.module('data').controller('categoriesController', categoriesController);

    categoriesController.$inject = ['categories'];
    function categoriesController(categories) {
        this.list = categories
    }
})();