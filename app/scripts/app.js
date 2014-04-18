'use strict';

angular
  .module('surveyApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ngGrid',
    'lr.upload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/manager/survey-list', {
        templateUrl: 'views/manager/survey-list.html',
        controller: 'ManagerSurveyListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
