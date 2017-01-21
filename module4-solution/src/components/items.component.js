(function() {
    angular.module('data').component('categoryItems', {
        templateUrl: "src/templates/items.component.tpl.html",
        bindings: {
            items: "<"
        }
    })
})();