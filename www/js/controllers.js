angular.module('statstally.controllers', [])

.controller('ProjectsCtrl', ['$scope','storage', function($scope, storage) {

  storage.bind($scope, 'counter', 42);


  $scope.increment = function() {
      $scope.counter++;
      console.log($scope.counter);
  };


}]);
