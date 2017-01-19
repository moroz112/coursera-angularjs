(function() {
    'use strict';
    angular.module('MenuApp')
        .config(RouterConfig);

    function RouterConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home',{
                url: '/',
                templateUrl: 'src/templates/home.state.tpl.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/categories.state.tpl.html',
                controller: 'categoriesController as catCtrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories()
                    }]
                }
            })
            .state('items', {
                url: '/categories/{category}',
                templateUrl: 'src/templates'
            })

    }
})();