var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("");
    //
    // Now set up the states
    $stateProvider
       .state('public', {
            url: "/public",
            //template: '<public></public>'
            templateUrl: "partials/public.html"
        })
        .state('public.login', {
            url: "/login",
            templateUrl: "partials/public.login.html"
        })
        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html"
        })
        .state('home.list', {
            url: "/list",
            templateUrl: "partials/home.list.html",
            controller: function($scope) {
                $scope.items = ["A", "Details", "Of", "Items"];
            }
        })
        .state('home.list.details', {
            url: "/details",
            templateUrl: "partials/home.list.details.html",
            controller: function($scope) {
                $scope.things = ["B", "List", "Of", "Things"];
            }
        })
        ;
});