var app = angular.module('voice',['ng','ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/voice_start',{
            templateUrl:'tpl/voice_start.html'
        })
        .when('/voice1',{
            templateUrl:'tpl/voice_1.html'
        })
        .when('/voice2',{
            templateUrl:'tpl/voice_2.html'
        })
        .when('/voice3',{
            templateUrl:'tpl/voice_3.html'
        })
        .when('/voice4',{
            templateUrl:'tpl/voice_4.html'
        })
        .when('/voice5',{
            templateUrl:'tpl/voice_5.html'
        })
        .when('/voice6',{
            templateUrl:'tpl/voice_6.html'
        })
        .when('/voice7',{
            templateUrl:'tpl/voice_7.html'
        })
        .when('/voice8',{
            templateUrl:'tpl/voice_8.html'
        })
        .when('/voice9',{
            templateUrl:'tpl/voice_9.html'
        })
        .when('/voice10',{
            templateUrl:'tpl/voice_10.html'
        })
        .when('/voice11',{
            templateUrl:'tpl/voice_11.html'
        })
        .when('/voice12',{
            templateUrl:'tpl/voice_12.html'
        }).otherwise({redirectTo:'/voice_start'});
});

app.controller('parentCtrl',['$scope','$location',
    function ($scope,$location) {
        $scope.jump = function(desPath){
            $location.path(desPath);
        }
}
]);
