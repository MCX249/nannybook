'use strict';

/**
 * @ngdoc service
 * @name NannyBook.ApiService
 * @description
 * # ApiService
 * Retrieves correct api to make requests against.
 * Uses settings from API_ENDPOINT defined in /config/apiEndpoint.js
 *
 * Usage example: $http({
 *                      url: ApiService.getEndPoint() + '/things',
 *                      method: 'GET'
 *                 })
 *
 */
angular.module('NannyBook')
  .factory('LocalStorage', function($window) {

    return {
      set: function(key, value) {
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function(key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function(key) {
        return JSON.parse($window.localStorage[key] || null);
      },
      getObjectById:function(key,id) {
          var obj = JSON.parse($window.localStorage[key]);
          for(var i in obj){
              if (obj[i].evenementId == id) return obj[i];
          }
      }
    }

  });

