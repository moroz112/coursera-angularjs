(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var that = this;
  var service = this;
  that.userPreferences = '';
  that.firstName;
  that.lastName;
  that.email;
  that.phone;

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
  service.setUserPreferences = function() {

    that.userPreferences = $http.get(ApiPath + '/menu_items/' + that.userPreferences + '.json').then(function(response) {
      return response.data
    }, function(error) {
        return error
    })
  };
  service.getUserPreferences = function() {
      return that.userPreferences;
  }

}



})();
