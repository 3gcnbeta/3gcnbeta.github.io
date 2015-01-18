'use strict';

/**
 * @ngdoc overview
 * @name 3gcnbetagithubioApp
 * @description
 * # 3gcnbetagithubioApp
 *
 * Main module of the application.
 */
angular
  .module('3gcnbetagithubioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
