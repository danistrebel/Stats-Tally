angular.module('statstally.controllers')

.controller('ProjectStatsCtrl', ['$scope','storage', '$stateParams', function($scope, storage, $stateParams) {

  var storageName = 'st-pr-' + $stateParams['project'];
  storage.bind($scope,'project',{storeName: storageName});
  $scope.filteredProject = angular.copy($scope.project);

  /*
   Configurable statistics options:
   - optionsShown true if the options are opened
   - selectedClickers an array that shows for each clicker if it is being considered.
  */
  $scope.statsOptions = {
    'optionsShown' : false,
    'selectedClickers' : Array.apply(null, Array($scope.project.clickers.length)).map(function (_, _) {return true;})
  };

  console.log($scope.filteredProject );

  (function cumulateClicks() {
    $scope.cumulatedClicks = [];
    for (var i =0; i<$scope.project.clickers.length; i++) {
      clicks = [];
      for (var j =0; j<$scope.project.clickers[i].clicks.length; j++) {
        clicks.push([Date.parse($scope.project.clickers[i].clicks[j])/1000, j+1]);
      }
      $scope.cumulatedClicks.push({key: $scope.project.clickers[i].name, values: clicks});
    }
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

    //Filter options

    $scope.showOptions = function() {
      $scope.statsOptions.optionsShown = true;
    }

    $scope.cancelOptions = function() {
      $scope.statsOptions.optionsShown = false;
    }

    $scope.applyOptions = function() {
      $scope.filteredProject.clickers = [];

      for(var i = 0; i < $scope.statsOptions.selectedClickers.length; i++) {
        console.log(i);
        if($scope.statsOptions.selectedClickers[i]) {
          $scope.filteredProject.clickers.push($scope.project.clickers[i]);
        }
      }

      $scope.statsOptions.optionsShown = false;

    }

    $scope.toggleSelectedClicker = function(index) {
      $scope.statsOptions.selectedClickers[index] = !$scope.statsOptions.selectedClickers[index]
    }


}]);
