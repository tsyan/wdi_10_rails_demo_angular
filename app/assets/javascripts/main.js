// TODO: Add angular application module and routes.

// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//= require_self
//= require_tree ./services/main
//= require_tree ./filters/main
//= require_tree ./controllers/main
//= require_tree ./directives/main

var StoreFront = angular.module('StoreFront',['ngRoute']);

StoreFront.config(['$routeProvider', function($routeProvider){
  // Route to retrieve one product
  // '/product/:productId
  $routeProvider.when('/product/:productId',{
      templateUrl: '../assets/mainProduct.html',
      controller: 'ProductCtrl'
  });
  // Default Route
  $routeProvider.otherwise({
      templateUrl: '../assets/mainIndex.html',
      controller: 'IndexCtrl'
  });
}]);

StoreFront.config(['$httpProvider',function(provider) {
    provider.defaults.headers.common['X-CSRF-Token'] = document.querySelector("meta[name=csrf-token]").getAttribute('content');
}]);
