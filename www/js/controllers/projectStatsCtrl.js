angular.module('statstally.controllers')

.controller('ProjectStatsCtrl', ['$scope','storage', '$stateParams', function($scope, storage, $stateParams) {

  var storageName = 'st-pr-' + $stateParams['project']

  storage.bind($scope,'project',{storeName: storageName});

  (function cumulateClicks() {
    $scope.cumulatedClicks = [];
    for (var i =0; i<$scope.project.clickers.length; i++) {
      clicks = [];
      for (var j =0; j<$scope.project.clickers[i].clicks.length; j++) {
        clicks.push([Date.parse($scope.project.clickers[i].clicks[j])/1000, j+1]);
      }
      $scope.cumulatedClicks.push({key: $scope.project.clickers[i].name, values: clicks});
    }
    console.log($scope.cumulatedClicks);
  })();


    $scope.clickerName = function(){
      return function(d) {
        return d.name;
      };
    }
    $scope.clickerCount = function(){
      return function(d) {
        return d.clicks.length;
      };
    }
}]);
