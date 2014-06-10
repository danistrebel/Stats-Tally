angular.module('statstally.controllers')

.controller('NewProjectCtrl', ['$scope', '$ionicPopup', 'storage', '$ionicNavBarDelegate', '$state', '$stateParams', 'templates', function($scope, $ionicPopup, storage, $ionicNavBarDelegate, $state, $stateParams, templates) {


  $scope.project = {
    name: "",
    clickers : []
  }

  // Copy clickers of the template if a template is specified
  if($stateParams['template']) {
      //Assign a copy so that the clickers in the template remain unmodified
      $scope.project.clickers = angular.copy(templates[$stateParams['template']].clickers);
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
      $scope.project.clickers.push({ name: $scope.newClicker.name, clicks: []});
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

      $state.go('app.projects');

    }
  }

  $scope.removeClicker = function(index) {
    $scope.project.clickers.splice(index, 1);
  }

}]);
