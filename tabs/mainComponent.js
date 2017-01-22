(function() {
    angular.module('app').component('tabs', {
        templateUrl: "./component.tpl.html",
        bindings: {
            tab: '<'
        },
        controller: function() {
            this.switchTab = function(index) {
                for(var i = 0; i < this.tab.length; i++) {
                    this.tab[i].isShow = false
                }
                this.tab[index].isShow = true
            }
        }

    })
})();