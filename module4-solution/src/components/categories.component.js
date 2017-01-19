(function(){
    angular.module('data').component('categories',{
        templateUrl: "src/templates/categories.component.tpl.html",
        bindings: {
            list: '<'
        }
    })
})();