// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('statstally',
  ['ionic',
  'statstally.controllers',
  'statstally.services',
  'angularLocalStorage',
  'nvd3ChartDirectives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html"
    })

    .state('welcome', {
      url: "/",
      templateUrl: "templates/welcome.html"
    })

    .state('app.projects', {
      url: "/projects",
      views: {
        'menuContent' :{
          templateUrl: "templates/projects.html"
        }
      },
      controller: 'ProjectsCtrl'
    })

    .state('app.project', {
      url: "/project/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/project.html"
        }
      },
      controller: 'NewProjectsCtrl'
    })

    .state('app.new_project', {
      url: "/projects/new?template",
      views: {
        'menuContent' :{
          templateUrl: "templates/newProject.html"
        }
      },
      controller: 'NewProjectsCtrl'
    })

    .state('app.statistics', {
      url: "/statistics",
      views: {
        'menuContent' :{
          templateUrl: "templates/statistics.html"
        }
      }
    })

    .state('app.stats', {
      url: "/statistics/:project",
      views: {
        'menuContent' :{
          templateUrl: "templates/projectStats.html"
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});


angular.module('statstally.controllers', [])
angular.module('statstally.services', [])
