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
      var projectHash = CryptoJS.MD5($scope.project.name);
      if(!projects) {
        projects = {};
      }
      projects[projectHash] = $scope.project.name;
      storage.set('st-projects', projects);

      storage.set('st-pr-' + projectHash, $scope.project);

      $ionicNavBarDelegate.back();

    }
  }

  $scope.removeClicker = function(index) {
    $scope.project.clickers.splice(index, 1);
  }

}]);
