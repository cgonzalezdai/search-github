(function () {

'use strict';

  angular.module('gulp-angular-app')

  .controller('MainController', [
    '$scope', 'MainService',
    function($scope, MainService) {

      //modelos
      angular.extend($scope, {
        error : undefined,
        results : undefined,
        searchString : ''
      });
      //metodos
      angular.extend($scope, {
        limpiar : function () {
          $scope.searchString = '';
          $scope.error = undefined;
          if (!$('#search-results').hasClass('hidden') && $scope.results) {
            $('#search-results').animateCss('fadeOutRight', true);
          }
        },
        searchGitHub : function () {
          $scope.error = undefined;
          var url = 'https://api.github.com/search/repositories',
          method = 'GET',
          params = {
            'q': $scope.searchString.replace(" ", "+"),
            'page': 1,
            'per_page': 10,
            'sort': 'stars',
            'order': 'desc'
          };
          MainService.GitHubAPISearch(url,method,params)
          .then(function(resp) {
            $scope.results = resp.data.items;
            $('#search-results').animateCss('fadeInLeft',false);
          },function(error) {
            $scope.error = error;
          });
        }
      })
    }
  ]);

}());