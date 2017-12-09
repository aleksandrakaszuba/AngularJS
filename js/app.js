(function(){
	'use strict';

	var myApp = angular.module("myApp",['ngRoute'])
    myApp.config(function($routeProvider, $locationProvider) {
        $routeProvider
       
             .when("/", {
                templateUrl: "partials/intro.html"
            }) 
             .when("/intro", {
                templateUrl: "partials/intro.html"
            })
            .when("/installation", {
                templateUrl: "partials/installation.html"
            })
            .when("/tutorial", {
                templateUrl: "partials/tutorial.html"
            })
            .when("/conclusion", {
                templateUrl: "partials/conclusion.html"
            })
            .when("/credits", {
                templateUrl: "partials/credits.html"
            });
             //HTML5 History API
     //   $locationProvider.html5Mode(true);
    });


})()