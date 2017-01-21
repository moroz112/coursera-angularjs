(function() {
    'use strict';
    angular.module('MenuApp')
        .config(RouterConfig);

    function RouterConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', {
                url: '',
                templateUrl: 'src/templates/root.state.tpl.html'
            })
            .state('root.home',{
                url: '/',
                templateUrl: 'src/templates/home.state.tpl.html'
            })
            .state('root.categories', {
                url: '/categories',
                templateUrl: 'src/templates/categories.state.tpl.html',
                controller: 'categoriesController as catCtrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories()
                    }]
                }
            })
            .state('root.items', {
                url: '/items/{category}',
                templateUrl: 'src/templates/items.state.tpl.html',
                controller: "itemsController as itemCtrl",
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.category)
                    }]
                }
            })

    }
})();