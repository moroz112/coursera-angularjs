(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var that = this;
  var service = this;
  that.userPreferences = 'someNotExistingCat';

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  service.getUserPreferences = function() {
    var config = {};
    // if(that.userPreferences) {
      config.params = {'category': that.userPreferences};
    // }

    return $http.get(ApiPath + '/menu_items.json', config).then(function(response) {
      return response.data
    })
  }

}



})();
