(function() {
    angular.module('data').component('items', {
        templateUrl: "src/templates/items.component.tpl.html",
        bindings: {
            items: "<"
        }
    })
})();