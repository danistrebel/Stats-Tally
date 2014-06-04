angular.module('statstally.controllers')

.controller('ProjectsCtrl', ['$scope','storage', 'templates', function($scope, storage, templates) {

  storage.bind($scope,'projects',{defaultValue: {},storeName: 'st-projects'});

  $scope.templates = templates;

}]);
