angular.module('statstally.controllers')

.controller('ProjectCtrl', ['$scope','storage', '$stateParams', function($scope, storage, $stateParams) {

  var storageName = 'st-pr-' + $stateParams['id']

  storage.bind($scope,'project',{defaultValue: {},storeName: storageName});

  $scope.click = function(clicker) {
    clicker.clicks.push(new Date());
  }

}]);
