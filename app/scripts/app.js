
  'use strict';


// Declare app level module which depends on filters, and services
angular.module('testYeoApp', [
  'ui.router',
  'testYeoApp.filters',
  'testYeoApp.services',
  'testYeoApp.directives',
  'testYeoApp.controllers',
  'ui.bootstrap',
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('view1', {url:'/view1', templateUrl: 'views/partial1.html', controller: 'MyCtrl1'});
  $stateProvider.state('view2', {url:'/view2', templateUrl: 'views/partial2.html', controller: 'MyCtrl2'});
  $urlRouterProvider.otherwise('/view1');
}])
.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }]);
