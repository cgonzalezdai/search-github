(function () {

'use strict';

  angular.module('gulp-angular-app')

  .factory('MainService', [
    '$http',
    function($http) {

      var factory = {};

      factory.GitHubAPISearch = function (_url,_method,_params) {
        return $http({
          url: _url,
          method: _method,
          params: _params
        });
      }

      return factory;
    }
  ]);

}());