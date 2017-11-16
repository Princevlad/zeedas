	app = angular.module('app', ['ngRoute','ngStorage', 'ngAnimate']);


  
	app.config(function($routeProvider, $locationProvider){
	  
    $routeProvider
    .when('/first',{
      template: "<div class='box'>First</div>",
      animation: 'first'
    })
    .when('/second',{
      template: "<div class='box'>Second</div>",
      animation: 'second'
    })
    .when('/profile',{
      template: "./templates/profile.html",
      animation: 'third'
    }) .when('/dashboard',{
      templateUrl: "./templates/dashboard.html",
      animation: 'first'
    })
    .otherwise({
      templateUrl: "./templates/login.html",
      animation: 'welcome',
      controller:'Auth'
    });
	});
  
  app.value('EndPoint', 'http://46.101.83.13:8000/');

	app.controller('ctrl', function($scope, $rootScope){

	  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
		$rootScope.animation = currRoute.animation;
	  });


	});