var myApp = angular.module('myngapp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when("/NewEvent",{
        templateUrl : "dog.html",
        controller: "AddEventController"
    }).
    when("/DisplayEvent", {
        templateUrl: "cat.html",
        controller: "ShowDisplayController"
    }).
    otherwise ({
        redirectTo: '/dog'
    });
}]);

//     }).when('/cats', {
//         templateUrl: 'cat.html',
        
//         controller:'myController'
//     })
// }

myApp.controller('myController', function ($scope, $http) {
    $scope.title = "Home Index";
    $scope.message = "Hello This is my Controller";

    $scope.showMessage = function () {
        alert('this is a frist click');
    }
    //this is a normal function 
    // $http.get(' http://localhost:3000/posts').then(function (response) {
    //     var data = response.data;
    //     $scope.user = data;
    // });

    //this is through  arrow function
    $http.get(' http://localhost:3000/posts').then(
        (response) => { $scope.user = response.data },
        //catch the error
        (err) => { console.log(err) }
    );



});
myApp.controller('SecondController', function ($scope, $interval,$timeout) {
    $scope.counter = 0;
    // $interval(function(){
    //     var coaunt=0;
    //     $scope.counter= $scope.counter+1
    // },1000)
    $timeout(function () {

        $scope.msg = "Welcome to Tutlane.com";
        
        }, 3000);
    $scope.name="sarfaraz";
//     $scope.user={
// fristName:null
//     };

});

myApp.controller("AddEventController", function($scope) {

        $scope.message = "This is to Add a new Event";

    });
    myApp.controller("ShowDisplayController",function($scope){

        $scope.message = "This is display an Event";

    });