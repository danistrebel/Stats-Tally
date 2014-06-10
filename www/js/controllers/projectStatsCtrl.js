angular.module('statstally.controllers')

.controller('ProjectStatsCtrl', ['$scope','storage', '$stateParams', function($scope, storage, $stateParams) {

  var storageName = 'st-pr-' + $stateParams['project'];
  storage.bind($scope,'project',{storeName: storageName});

  /*
    Stats model to be used and modified within this view
  */
  $scope.stats = {
    filteredProject : angular.copy($scope.project),
    cumulatedClicks : []
  }

  /*
   Configurable statistics options:
   - optionsShown true if the options are opened
   - selectedClickers an array that shows for each clicker if it is being considered.
  */
  $scope.statsOptions = {
    'optionsShown' : false,
    'selectedClickers' : Array.apply(null, Array($scope.project.clickers.length)).map(function (_, _) {return true;})
  };


  function setCumulatedClicks() {
    $scope.stats.cumulatedClicks = [];
    for (var i =0; i<$scope.project.clickers.length; i++) {
      if($scope.statsOptions.selectedClickers[i]) {
        clicks = [];
        for (var j =0; j<$scope.project.clickers[i].clicks.length; j++) {
          var clickTime = new Date($scope.project.clickers[i].clicks[j]);
          clicks.push([clickTime.getTime(), j+1]);
        }
      }
      $scope.stats.cumulatedClicks.push({key: $scope.project.clickers[i].name, values: clicks});
    }
    console.log($scope.stats.cumulatedClicks);
  }

  setCumulatedClicks();

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

    $scope.xTimeTickFormat = function() {
      return function(d){
        return d3.time.format('%H:%M %x')(new Date(d));
      }
    }

    //Filter options

    $scope.showOptions = function() {
      $scope.statsOptions.optionsShown = true;
    }

    $scope.cancelOptions = function() {
      $scope.statsOptions.optionsShown = false;
    }

    $scope.applyOptions = function() {
      $scope.stats.filteredProject.clickers = [];

      for(var i = 0; i < $scope.statsOptions.selectedClickers.length; i++) {
        if($scope.statsOptions.selectedClickers[i]) {
          $scope.stats.filteredProject.clickers.push($scope.project.clickers[i]);
        }
      }

      setCumulatedClicks();

      $scope.statsOptions.optionsShown = false;

    }

    $scope.toggleSelectedClicker = function(index) {
      $scope.statsOptions.selectedClickers[index] = !$scope.statsOptions.selectedClickers[index]
    }


}]);
