(function() {
    var app = angular.module('app', ['ui.router']);
    app.config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('');

        $stateProvider
            .state('root', {
                url: '',
                templateUrl: './root.tpl.html'
            })
            .state('root.tab1', {
                url: '/tab1',
                templateUrl: 'tab1.tpl.html',
                controller: 'MainController as MainCtrl'
            })
            .state('root.tab2', {
                url: '/tab2',
                templateUrl: 'tab2.tpl.html',
                controller: 'anotherController as anotherCtrl'
            })
    }
})();