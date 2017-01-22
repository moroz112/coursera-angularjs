(function() {
    angular.module('app').controller('anotherController', anotherController);

    function anotherController() {
        this.tab = [
            {title: 'tab1', content: "content tab1", isShow: true},
            {title: 'tab2', content: "content tab2", isShow: false},
            {title: 'tab3', content: "content tab3", isShow: false},
            {title: 'tab4', content: "content tab4", isShow: false},
            {title: 'tab5', content: "content tab5", isShow: false},
        ];
    }
})();