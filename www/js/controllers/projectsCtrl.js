angular.module('statstally.controllers')

.controller('ProjectsCtrl', ['$scope','storage', function($scope, storage) {

  storage.bind($scope,'projects',{defaultValue: [] ,storeName: 'st-projects'});

}]);
