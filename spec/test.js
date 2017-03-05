describe('MainController', function() {

  beforeEach(module('gulp-angular-app'));

  var $controller;
  var $scope, controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  beforeEach(function() {
    $scope = {};
    controller = $controller('MainController', { $scope: $scope });
  });

  it('al inicio $scope.error debe ser igual a undefined', function() {
    expect($scope.error).toEqual(undefined);
  });
  it('tras limpiar $scope.searchString debe ser una cadena vacia', function() {
    $scope.searchString = 'sdfkjañlsdk';
    $scope.limpiar();
    expect($scope.searchString).toEqual('');
  });

});
