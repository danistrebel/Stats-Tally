angular.module('statstally.controllers')

.controller('NewProjectCtrl', ['$scope', '$ionicPopup', 'storage', '$ionicNavBarDelegate', function($scope, $ionicPopup, storage, $ionicNavBarDelegate) {

  $scope.project = {
    name: "",
    clickers : []
  }

  $scope.newClicker = {
    name: ""
  }

  $scope.addClicker = function() {
    if($scope.newClicker.name.length <1) {
      $ionicPopup.alert({
        title : 'Incomplete Input',
        subTitle : 'Clicker must have a name.'
      });
    }
    else {
      $scope.project.clickers.push({ name: $scope.newClicker.name, count: 0});
      $scope.newClicker.name = "";
    }

  }

  $scope.storeProject = function() {

    if($scope.project.name.length <1 || $scope.project.clickers.length<1) {
      $ionicPopup.alert({
        title : 'Incomplete Input',
        subTitle : 'Projects must at least have a name and one clicker.'
      });
    }
    else {
      var projects = storage.get('st-projects');
      if(!projects) {
        projects = [];
      }
      projects.push($scope.project);
      storage.set('st-projects', projects);
      $ionicNavBarDelegate.back();

    }
  }

  $scope.removeClicker = function(index) {
    $scope.project.clickers.splice(index, 1);
  }

}]);
