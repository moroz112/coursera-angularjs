(function() {
    angular.module('app').controller('MainController', MainController);
    
    function MainController() {
        this.tab = [
            {title: 'tab1', content: "content tab1", isShow: true},
            {title: 'tab2', content: "content tab2", isShow: false}
        ];
    }
})();