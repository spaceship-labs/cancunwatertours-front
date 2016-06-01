'use strict';

/**
 * @ngdoc overview
 * @name cancunwatertoursFrontApp
 * @description
 * # cancunwatertoursFrontApp
 *
 * Main module of the application.
 */
(function(){
  angular
    .module('cancunwatertoursFrontApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
    .config(routeProvider);

  routeProvider.$inject = ['$routeProvider'];
  function routeProvider($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();

