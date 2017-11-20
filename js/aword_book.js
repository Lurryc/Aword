var app = angular.module('voice',['ng','ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/book_start',{
            templateUrl:'tpl/book_start.html'
        })
        .when('/book1',{
            templateUrl:'tpl/book_1.html'
        })
        .when('/book2',{
            templateUrl:'tpl/book_2.html'
        })
        .when('/book3',{
            templateUrl:'tpl/book_3.html'
        })
        .when('/book4',{
            templateUrl:'tpl/book_4.html'
        })
        .when('/book5',{
            templateUrl:'tpl/book_5.html'
        })
        .when('/book6',{
            templateUrl:'tpl/book_6.html'
        })
        .when('/book7',{
            templateUrl:'tpl/book_7.html'
        })
        .when('/book8',{
            templateUrl:'tpl/book_8.html'
        })
        .when('/book9',{
            templateUrl:'tpl/book_9.html'
        })
        .when('/book10',{
            templateUrl:'tpl/book_10.html'
        })
        .when('/book11',{
            templateUrl:'tpl/book_11.html'
        })
        .when('/book12',{
            templateUrl:'tpl/book_12.html'
        }).otherwise({redirectTo:'/book_start'});
});

app.controller('parentCtrl',['$scope','$location',
    function ($scope,$location) {
        $scope.jump = function(desPath){
            $location.path(desPath);
        }
    }
]);

//ÂÖ²¥
var interval;
var pos = 0;
window.onload = function() {
    var images = document.getElementsByClassName('Limg');
    var tab = document.getElementById("tab");
    tab.onmouseover = function() {
        clearInterval(interval);
    }
    tab.onmouseout = function() {
        run(images);
    }
    run(images);
}
var run = function(images) {
    interval = setInterval(function() {
        images[pos].style.display = 'none';
        pos = ++pos == images.length ? 0 : pos;
        images[pos].style.display = 'inline';
    }, 2500);
}