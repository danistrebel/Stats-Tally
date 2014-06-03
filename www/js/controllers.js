angular.module('statstally.controllers', [])

.controller('EventCtrl', ['$scope','storage', function($scope, storage) {

  storage.bind($scope, 'counter', 42);


  $scope.increment = function() {
      $scope.counter+=2;
      console.log($scope.counter);
  };


}]);
